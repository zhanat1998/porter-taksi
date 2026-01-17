import { createClient } from '@sanity/client'
import { NextResponse } from 'next/server'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'try9drhk',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Маалыматтарды алуу
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const whatsapp = formData.get('whatsapp') as string
    const location = formData.get('location') as string
    const serviceType = formData.get('serviceType') as string
    const vehicle = formData.get('vehicle') as string
    const experience = formData.get('experience') as string
    const priceMin = formData.get('priceMin') as string
    const priceMax = formData.get('priceMax') as string
    const description = formData.get('description') as string
    const photo = formData.get('photo') as File | null

    // Жумушчу документин түзүү
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const workerData: any = {
      _type: 'worker',
      name,
      phone,
      whatsapp,
      location,
      serviceType,
      vehicle,
      experience,
      priceMin: priceMin ? Number(priceMin) : undefined,
      priceMax: priceMax ? Number(priceMax) : undefined,
      description,
      verified: false,
      isActive: false,
    }

    // Эгер сүрөт бар болсо, Sanity'ге жүктөө
    if (photo && photo.size > 0) {
      const buffer = Buffer.from(await photo.arrayBuffer())
      const uploadedImage = await client.assets.upload('image', buffer, {
        filename: photo.name,
        contentType: photo.type,
      })

      workerData.photo = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: uploadedImage._id,
        },
      }
    }

    // Документти түзүү
    const worker = await client.create(workerData)

    return NextResponse.json({ success: true, id: worker._id })
  } catch (error) {
    console.error('Worker application error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}