'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

const cargoTypes = [
  {
    id: 'bishkek-osh',
    icon: '🏔️',
    title: 'Бишкек - Ош',
    description: '700 км, 8-10 саат',
    price: '15,000-40,000 сом'
  },
  {
    id: 'bishkek-issykkul',
    icon: '🌊',
    title: 'Бишкек - Ысык-Көл',
    description: '250-400 км, 4-6 саат',
    price: '8,000-20,000 сом'
  },
  {
    id: 'bishkek-jalal',
    icon: '🏭',
    title: 'Бишкек - Жалал-Абад',
    description: '600 км, 7-9 саат',
    price: '12,000-35,000 сом'
  },
  {
    id: 'bishkek-naryn',
    icon: '🌄',
    title: 'Бишкек - Нарын',
    description: '300 км, 5-6 саат',
    price: '10,000-25,000 сом'
  },
  {
    id: 'bishkek-talas',
    icon: '⛰️',
    title: 'Бишкек - Талас',
    description: '300 км, 5-6 саат',
    price: '10,000-25,000 сом'
  },
  {
    id: 'bishkek-batken',
    icon: '🏜️',
    title: 'Бишкек - Баткен',
    description: '900 км, 12-14 саат',
    price: '20,000-50,000 сом'
  },
]

const workers = [
  {
    id: 1,
    name: 'Алмаз Орозов',
    photo: 'https://randomuser.me/api/portraits/men/71.jpg',
    specialty: 'Бишкек - Ош',
    vehicle: 'Фура 20т',
    experience: '12 жыл',
    rating: 5.0,
    reviews: 312,
    price: '18,000 - 35,000',
    priceType: 'сом',
    description: 'Ош багытында 1000+ рейс. Тажрыйбалуу айдоочу.',
    location: 'Бишкек',
    phone: '+996555711822',
    whatsapp: '996555711822',
    verified: true,
  },
  {
    id: 2,
    name: 'Бакыт Сатыбалдиев',
    photo: 'https://randomuser.me/api/portraits/men/72.jpg',
    specialty: 'Бишкек - Ысык-Көл',
    vehicle: 'Газель 3т',
    experience: '8 жыл',
    rating: 4.9,
    reviews: 189,
    price: '8,000 - 15,000',
    priceType: 'сом',
    description: 'Чолпон-Ата, Каракол, баардык Ысык-Көлгө.',
    location: 'Бишкек',
    phone: '+996700822933',
    whatsapp: '996700822933',
    verified: true,
  },
  {
    id: 3,
    name: 'Гүлжигит Токтосунов',
    photo: 'https://randomuser.me/api/portraits/men/73.jpg',
    specialty: 'Бишкек - Жалал-Абад',
    vehicle: 'Портер',
    experience: '6 жыл',
    rating: 4.8,
    reviews: 98,
    price: '12,000 - 25,000',
    priceType: 'сом',
    description: 'Жалал-Абад, Өзгөн, Базар-Коргон. Тез жеткирем.',
    location: 'Бишкек',
    phone: '+996772933044',
    whatsapp: '996772933044',
    verified: true,
  },
  {
    id: 4,
    name: 'Данияр Эсенов',
    photo: 'https://randomuser.me/api/portraits/men/74.jpg',
    specialty: 'Бишкек - Нарын',
    vehicle: 'Газель 2т',
    experience: '5 жыл',
    rating: 4.7,
    reviews: 67,
    price: '10,000 - 20,000',
    priceType: 'сом',
    description: 'Нарын, Ат-Башы, Казарман. Тоо жолдорунда тажрыйба.',
    location: 'Бишкек',
    phone: '+996550044155',
    whatsapp: '996550044155',
    verified: false,
  },
  {
    id: 5,
    name: 'Эрлан Жумабеков',
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    specialty: 'Бишкек - Ош',
    vehicle: 'Газель 5т',
    experience: '10 жыл',
    rating: 4.9,
    reviews: 234,
    price: '15,000 - 28,000',
    priceType: 'сом',
    description: 'Ош, Кара-Суу, Ноокат. Арзан баада сапаттуу.',
    location: 'Бишкек',
    phone: '+996708155266',
    whatsapp: '996708155266',
    verified: true,
  },
  {
    id: 6,
    name: 'Жаныбек Кадыров',
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    specialty: 'Бишкек - Талас',
    vehicle: 'Портер',
    experience: '7 жыл',
    rating: 5.0,
    reviews: 145,
    price: '10,000 - 22,000',
    priceType: 'сом',
    description: 'Талас багытынын адиси. Жаны машина.',
    location: 'Бишкек',
    phone: '+996777266377',
    whatsapp: '996777266377',
    verified: true,
  },
  {
    id: 7,
    name: 'Канат Абдыкадыров',
    photo: 'https://randomuser.me/api/portraits/men/77.jpg',
    specialty: 'Бишкек - Баткен',
    vehicle: 'Фура 10т',
    experience: '15 жыл',
    rating: 4.8,
    reviews: 178,
    price: '25,000 - 45,000',
    priceType: 'сом',
    description: 'Баткен, Сүлүктү, Кызыл-Кыя. Алыс аралыктар.',
    location: 'Бишкек',
    phone: '+996559377488',
    whatsapp: '996559377488',
    verified: true,
  },
  {
    id: 8,
    name: 'Мирлан Исаков',
    photo: 'https://randomuser.me/api/portraits/men/78.jpg',
    specialty: 'Бишкек - Ысык-Көл',
    vehicle: 'Портер',
    experience: '4 жыл',
    rating: 4.6,
    reviews: 56,
    price: '6,000 - 12,000',
    priceType: 'сом',
    description: 'Арзан баада. Чакан жүктөргө ылайыктуу.',
    location: 'Бишкек',
    phone: '+996701488599',
    whatsapp: '996701488599',
    verified: false,
  },
  {
    id: 9,
    name: 'Нурбек Орозбеков',
    photo: 'https://randomuser.me/api/portraits/men/79.jpg',
    specialty: 'Бишкек - Ош',
    vehicle: 'Фура 15т',
    experience: '14 жыл',
    rating: 5.0,
    reviews: 289,
    price: '20,000 - 40,000',
    priceType: 'сом',
    description: 'VIP жүк ташуу. Камера, GPS. Кепилдик.',
    location: 'Бишкек',
    phone: '+996555599600',
    whatsapp: '996555599600',
    verified: true,
  },
  {
    id: 10,
    name: 'Өмүрбек Токтогулов',
    photo: 'https://randomuser.me/api/portraits/men/80.jpg',
    specialty: 'Бишкек - Жалал-Абад',
    vehicle: 'Газель 3т',
    experience: '9 жыл',
    rating: 4.9,
    reviews: 167,
    price: '14,000 - 30,000',
    priceType: 'сом',
    description: 'Жалал-Абад, Таш-Көмүр, Кара-Көл. Тажрыйбалуу.',
    location: 'Бишкек',
    phone: '+996700600711',
    whatsapp: '996700600711',
    verified: true,
  },
]

export default function CargoKgPage() {
  const t = useTranslations()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🚛</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Жүк ташуу Кыргызстан боюнча
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Бишкектен бардык облустарга - Ош, Ысык-Көл, Жалал-Абад, Нарын
          </p>
        </div>
      </section>

      {/* Cargo Types */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Багыттар</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cargoTypes.map((type) => (
              <div
                key={type.id}
                id={type.id}
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-3xl mb-2">{type.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{type.description}</p>
                <p className="text-blue-600 font-bold text-sm">{type.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2">Биздин айдоочулар</h2>
          <p className="text-gray-600 text-center mb-8">Тажрыйбалуу жана ишенимдүү айдоочулар</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workers.map((worker) => (
              <div
                key={worker.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {/* Header with photo */}
                <div className="relative">
                  <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <img
                    src={worker.photo}
                    alt={worker.name}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white object-cover"
                  />
                  {worker.verified && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <span>✓</span> Текшерилген
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="pt-14 pb-4 px-4">
                  <h3 className="text-xl font-bold text-center text-gray-800">{worker.name}</h3>
                  <p className="text-blue-600 text-center font-medium">{worker.specialty}</p>
                  <p className="text-indigo-500 text-center text-sm">{worker.vehicle}</p>

                  <div className="flex justify-center items-center gap-4 mt-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      {worker.rating}
                    </span>
                    <span>{worker.reviews} сын-пикир</span>
                    <span>{worker.experience}</span>
                  </div>

                  <p className="text-gray-600 text-sm mt-3 text-center line-clamp-2">
                    {worker.description}
                  </p>

                  <div className="mt-4 text-center">
                    <span className="text-2xl font-bold text-blue-600">{worker.price}</span>
                    <span className="text-gray-500 text-sm"> {worker.priceType}</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <a
                      href={`tel:${worker.phone}`}
                      className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium text-center hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                      <span>📞</span> Чалуу
                    </a>
                    <a
                      href={`https://wa.me/${worker.whatsapp}`}
                      className="flex-1 bg-green-500 text-white py-3 rounded-xl font-medium text-center hover:bg-green-600 transition flex items-center justify-center gap-2"
                    >
                      <span>💬</span> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Айдоочу болуп иштегиңиз келеби?</h2>
          <p className="text-gray-600 mb-6">
            Өзүңүздү катталып, заказ алып баштаңыз
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition inline-flex items-center justify-center gap-2"
            >
              <span>🚛</span> Айдоочу катары катталуу
            </Link>
            <a
              href="tel:+996555123456"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition inline-flex items-center justify-center gap-2"
            >
              <span>📞</span> Чалуу
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}