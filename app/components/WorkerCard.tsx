'use client'

import { useState } from 'react'

export type Worker = {
  _id: string
  name: string
  photoUrl?: string
  location?: string
  experience?: string
  vehicle?: string
  priceMin?: number
  priceMax?: number
  description?: string
  phone: string
  whatsapp?: string
  verified?: boolean
}

export default function WorkerCard({ worker }: { worker: Worker }) {
  const [expanded, setExpanded] = useState(false)

  const priceText = worker.priceMin && worker.priceMax
    ? `${worker.priceMin}-${worker.priceMax} сом`
    : worker.priceMin
    ? `${worker.priceMin} сом`
    : ''

  const description = worker.description || ''
  const needsExpand = description.length > 100

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition">
      {/* Mobile: Photo + Name at top */}
      <div className="md:hidden flex items-center gap-3 mb-4">
        {worker.photoUrl ? (
          <img
            src={worker.photoUrl}
            alt={worker.name}
            className="w-[125px] h-[125px] rounded-xl object-cover"
          />
        ) : (
          <div className="w-[125px] h-[125px] rounded-xl bg-gray-200 flex items-center justify-center text-4xl">
            👷
          </div>
        )}
        <div>
          <span className="font-medium text-gray-900">{worker.name}</span>
          {worker.verified && (
            <span className="text-green-500 text-sm ml-2">✓</span>
          )}
        </div>
      </div>

      {/* Desktop: Content with photo on right */}
      <div className="flex gap-4">
        {/* Left Content */}
        <div className="flex-1">
          {/* Title */}
          {worker.vehicle && (
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {worker.vehicle}
            </h2>
          )}

          {/* Location */}
          {worker.location && (
            <div className="flex items-center gap-1 text-green-600 mb-3">
              <span>📍</span>
              <span className="text-sm">{worker.location}</span>
            </div>
          )}

          {/* Info Row */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
            {worker.experience && (
              <span><strong>Тажрыйба:</strong> {worker.experience}</span>
            )}
            {priceText && (
              <span><strong>Баасы:</strong> {priceText}</span>
            )}
          </div>

          {/* Description */}
          {description && (
            <p className="text-gray-700 mb-3">
              {expanded || !needsExpand
                ? description
                : description.slice(0, 100) + '...'}
              {needsExpand && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-green-600 hover:text-green-700 ml-1"
                >
                  {expanded ? 'жашыруу' : 'толугу...'}
                </button>
              )}
            </p>
          )}
        </div>

        {/* Desktop: Photo + Name on right */}
        <div className="hidden md:flex flex-col items-center gap-2">
          {worker.photoUrl ? (
            <img
              src={worker.photoUrl}
              alt={worker.name}
              className="w-[125px] h-[125px] rounded-full object-cover"
            />
          ) : (
            <div className="w-[125px] h-[125px] rounded-full bg-gray-200 flex items-center justify-center text-4xl">
              👷
            </div>
          )}
          <div className="text-center">
            <p className="font-medium text-gray-900 text-sm">{worker.name}</p>
            {worker.verified && (
              <span className="text-green-500 text-xs">✓ Текшерилген</span>
            )}
          </div>
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="flex gap-2 pt-3 border-t border-gray-100 mt-3">
        <a
          href={`tel:${worker.phone}`}
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition flex items-center gap-1"
        >
          📞 Чалуу
        </a>
        {worker.whatsapp && (
          <a
            href={`https://wa.me/${worker.whatsapp}`}
            className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-200 transition flex items-center gap-1"
          >
            💬 WhatsApp
          </a>
        )}
      </div>
    </div>
  )
}