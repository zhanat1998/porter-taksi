import { client } from '@/app/sanity/lib/client'
import { ALL_ACTIVE_VIDEOS_QUERY } from '@/app/sanity/lib/queries'
import HomeClient from './HomeClient'

// Санитиден видеолорду алуу
async function getVideos() {
  return client.fetch(ALL_ACTIVE_VIDEOS_QUERY)
}

export default async function Home() {
  const videos = await getVideos()
  return <HomeClient videos={videos} />
}