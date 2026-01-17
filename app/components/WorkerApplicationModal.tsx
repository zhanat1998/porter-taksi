'use client'

import { useState } from 'react'

const locations = [
  { label: 'Бишкек', value: 'Бишкек' },
  { label: 'Ленинский район', value: 'Бишкек, Ленинский район' },
  { label: 'Октябрьский район', value: 'Бишкек, Октябрьский район' },
  { label: 'Свердловский район', value: 'Бишкек, Свердловский район' },
  { label: 'Первомайский район', value: 'Бишкек, Первомайский район' },
  { label: 'Аламудунский район', value: 'Бишкек, Аламудунский район' },
  { label: 'Сокулукский район', value: 'Чуй, Сокулукский район' },
  { label: 'Ысык-Атинский район', value: 'Чуй, Ысык-Атинский район' },
  { label: 'Токмок', value: 'г. Токмок' },
  { label: 'Кант', value: 'г. Кант' },
  { label: 'Кара-Балта', value: 'г. Кара-Балта' },
]

const serviceTypes = [
  { label: 'Вывоз мусора', value: 'garbage' },
  { label: 'Клининг', value: 'cleaning' },
  { label: 'Свадьба / Той', value: 'marry-me' },
  { label: 'Грузоперевозки по КР', value: 'cargo-kg' },
  { label: 'Няня', value: 'nanny' },
  { label: 'Грузчики', value: 'loaders' },
  { label: 'Демонтаж', value: 'demolition' },
]

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function WorkerApplicationModal({ isOpen, onClose }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    location: '',
    serviceType: '',
    vehicle: '',
    experience: '',
    priceMin: '',
    priceMax: '',
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/worker-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          priceMin: formData.priceMin ? Number(formData.priceMin) : undefined,
          priceMax: formData.priceMax ? Number(formData.priceMax) : undefined,
        }),
      })

      if (!response.ok) {
        throw new Error('Ката кетти')
      }

      setIsSuccess(true)
      setTimeout(() => {
        onClose()
        setIsSuccess(false)
        setFormData({
          name: '',
          phone: '',
          whatsapp: '',
          location: '',
          serviceType: '',
          vehicle: '',
          experience: '',
          priceMin: '',
          priceMax: '',
          description: '',
        })
      }, 2000)
    } catch (err) {
      setError('Ката кетти. Кайра аракет кылыңыз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 z-0" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-green-600 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-xl font-bold">👷 Жумушчу катары катталуу</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200 text-2xl">
            ✕
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">Ийгиликтүү!</h3>
            <p className="text-gray-600">Арызыңыз кабыл алынды. Жакында сиз менен байланышабыз.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Аты-жөнү <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Асан Усенов"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Телефон номери <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+996555123456"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp номери <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                placeholder="996555123456 (плюс белгисиз)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Жайгашкан жери <span className="text-red-500">*</span>
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Тандаңыз...</option>
                {locations.map((loc) => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Кызмат түрү <span className="text-red-500">*</span>
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Тандаңыз...</option>
                {serviceTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Vehicle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Унаа / Кызмат аталышы <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                required
                placeholder="Портер (1.5 тонна)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Тажрыйба <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                placeholder="5 жыл"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Price Range */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Мин. баа (сом) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="priceMin"
                  value={formData.priceMin}
                  onChange={handleChange}
                  required
                  placeholder="500"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Макс. баа (сом) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="priceMax"
                  value={formData.priceMax}
                  onChange={handleChange}
                  required
                  placeholder="1000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Өзүңүз жөнүндө <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Кызматыңыз жөнүндө кыскача маалымат..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Жөнөтүлүүдө...' : 'Арыз жөнөтүү'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              Арыз жөнөткөндөн кийин администратор текшерет жана сиздин маалыматыңыз сайтта чыгат.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}