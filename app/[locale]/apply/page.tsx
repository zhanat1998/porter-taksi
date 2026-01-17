'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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

export default function ApplyPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

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
  const [photo, setPhoto] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Жазганда ошол полянын катасын тазалоо
    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: '' })
    }
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Файл өлчөмүн текшерүү (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFieldErrors({ ...fieldErrors, photo: 'Сүрөт 5MB дан ашпаш керек' })
        return
      }
      // Формат текшерүү
      if (!file.type.startsWith('image/')) {
        setFieldErrors({ ...fieldErrors, photo: 'Сүрөт форматы туура эмес' })
        return
      }
      setPhoto(file)
      setPhotoPreview(URL.createObjectURL(file))
      setFieldErrors({ ...fieldErrors, photo: '' })
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = 'Аты-жөнүңүздү жазыңыз'
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Телефон номериңизди жазыңыз'
    } else if (!/^[+]?[0-9]{10,13}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Туура эмес формат (мисалы: +996555123456)'
    }

    if (!formData.whatsapp.trim()) {
      errors.whatsapp = 'WhatsApp номериңизди жазыңыз'
    } else if (!/^[0-9]{10,13}$/.test(formData.whatsapp.replace(/\s/g, ''))) {
      errors.whatsapp = 'Туура эмес формат (мисалы: 996555123456)'
    }

    if (!formData.location) {
      errors.location = 'Жайгашкан жериңизди тандаңыз'
    }

    if (!formData.serviceType) {
      errors.serviceType = 'Кызмат түрүн тандаңыз'
    }

    if (!formData.vehicle.trim()) {
      errors.vehicle = 'Унаа же кызмат аталышын жазыңыз'
    }

    if (!formData.experience.trim()) {
      errors.experience = 'Тажрыйбаңызды жазыңыз'
    }

    if (!formData.priceMin) {
      errors.priceMin = 'Мин. бааны жазыңыз'
    } else if (Number(formData.priceMin) < 0) {
      errors.priceMin = 'Баа 0дөн кем болбош керек'
    }

    if (!formData.priceMax) {
      errors.priceMax = 'Макс. бааны жазыңыз'
    } else if (Number(formData.priceMax) < Number(formData.priceMin)) {
      errors.priceMax = 'Макс. баа мин. баадан чоң болуш керек'
    }

    if (!formData.description.trim()) {
      errors.description = 'Өзүңүз жөнүндө жазыңыз'
    } else if (formData.description.trim().length < 10) {
      errors.description = 'Кеминде 10 символ жазыңыз'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) {
      setError('Кызыл менен белгиленген полялар туура эмес толтурулган')
      return
    }

    setIsSubmitting(true)

    try {
      // FormData колдонуу (сүрөт үчүн)
      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'priceMin' || key === 'priceMax') {
          submitData.append(key, value ? String(Number(value)) : '')
        } else {
          submitData.append(key, value)
        }
      })
      if (photo) {
        submitData.append('photo', photo)
      }

      const response = await fetch('/api/worker-application', {
        method: 'POST',
        body: submitData,
      })

      if (!response.ok) {
        throw new Error('Ката кетти')
      }

      setIsSuccess(true)
    } catch (err) {
      setError('Сервер катасы. Кайра аракет кылыңыз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-7xl mb-6">✅</div>
            <h1 className="text-3xl font-bold text-green-600 mb-4">Ийгиликтүү!</h1>
            <p className="text-gray-600 text-lg mb-8">
              Арызыңыз кабыл алынды. Жакында сиз менен байланышабыз.
            </p>
            <Link
              href="/"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition"
            >
              Башкы бетке кайтуу
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">👷</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Жумушчу катары катталуу</h1>
            <p className="text-gray-600">Формаңы толтуруп, биздин командага кошулуңуз</p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Photo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сүрөтүңүз
                </label>
                <div className="flex items-center gap-4">
                  {photoPreview ? (
                    <div className="relative">
                      <img
                        src={photoPreview}
                        alt="Preview"
                        className="w-24 h-24 rounded-full object-cover border-4 border-green-500"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPhoto(null)
                          setPhotoPreview(null)
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-sm hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
                      <span className="text-4xl text-gray-400">👤</span>
                    </div>
                  )}
                  <div className="flex-1">
                    <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg inline-block transition">
                      📷 Сүрөт тандоо
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                      />
                    </label>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG. Макс. 5MB</p>
                  </div>
                </div>
                {fieldErrors.photo && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.photo}</p>
                )}
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Аты-жөнү <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Асан Усенов"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg ${
                    fieldErrors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {fieldErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон номери <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+996555123456"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg ${
                    fieldErrors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {fieldErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.phone}</p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp номери <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="996555123456 (плюс белгисиз)"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg ${
                    fieldErrors.whatsapp ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {fieldErrors.whatsapp && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.whatsapp}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Жайгашкан жери <span className="text-red-500">*</span>
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg ${
                    fieldErrors.location ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                >
                  <option value="">Тандаңыз...</option>
                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>
                {fieldErrors.location && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.location}</p>
                )}
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Кызмат түрү <span className="text-red-500">*</span>
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg ${
                    fieldErrors.serviceType ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                >
                  <option value="">Тандаңыз...</option>
                  {serviceTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {fieldErrors.serviceType && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.serviceType}</p>
                )}
              </div>

              {/* Vehicle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Унаа / Кызмат аталышы <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder="Портер (1.5 тонна)"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg ${
                    fieldErrors.vehicle ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {fieldErrors.vehicle && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.vehicle}</p>
                )}
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тажрыйба <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="5 жыл"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg ${
                    fieldErrors.experience ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {fieldErrors.experience && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.experience}</p>
                )}
              </div>

              {/* Price Range */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Мин. баа (сом) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="priceMin"
                    value={formData.priceMin}
                    onChange={handleChange}
                    placeholder="500"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg ${
                      fieldErrors.priceMin ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {fieldErrors.priceMin && (
                    <p className="text-red-500 text-sm mt-1">{fieldErrors.priceMin}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Макс. баа (сом) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="priceMax"
                    value={formData.priceMax}
                    onChange={handleChange}
                    placeholder="1000"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg ${
                      fieldErrors.priceMax ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {fieldErrors.priceMax && (
                    <p className="text-red-500 text-sm mt-1">{fieldErrors.priceMax}</p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Өзүңүз жөнүндө <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Кызматыңыз жөнүндө кыскача маалымат..."
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg resize-none ${
                    fieldErrors.description ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {fieldErrors.description && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.description}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-xl hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Жөнөтүлүүдө...' : 'Арыз жөнөтүү'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Арыз жөнөткөндөн кийин администратор текшерет жана сиздин маалыматыңыз сайтта чыгат.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}