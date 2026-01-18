'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

const garbageTypes = [
  {
    id: 'construction',
    icon: '🏗️',
    title: 'Курулуш мусору',
    description: 'Кирпич, бетон, цемент калдыктары',
    price: '2,000-5,000 сом'
  },
  {
    id: 'furniture',
    icon: '🪑',
    title: 'Эски эмерек',
    description: 'Диван, шкаф, стол, стулья',
    price: '1,500-4,000 сом'
  },
  {
    id: 'household',
    icon: '🗑️',
    title: 'Үй мусору',
    description: 'Үй-түрмүш калдыктары',
    price: '1,000-2,500 сом'
  },
  {
    id: 'garden',
    icon: '🌳',
    title: 'Бак калдыктары',
    description: 'Бутактар, жалбырактар, чөп',
    price: '1,500-3,000 сом'
  },
  {
    id: 'appliances',
    icon: '📺',
    title: 'Эски техника',
    description: 'Тоңузгуч, кир жуугуч, телевизор',
    price: '1,000-2,000 сом'
  },
  {
    id: 'mixed',
    icon: '📦',
    title: 'Аралаш мусор',
    description: 'Ар түрдүү калдыктар',
    price: '1,500-4,000 сом'
  },
]

const workers = [
  {
    id: 1,
    name: 'Алмаз Токтосунов',
    photo: 'https://randomuser.me/api/portraits/men/51.jpg',
    specialty: 'Курулуш мусору',
    vehicle: 'Самосвал 5т',
    experience: '10 жыл',
    rating: 4.9,
    reviews: 267,
    price: '3,000 - 5,000',
    priceType: 'сом/рейс',
    description: 'Курулуш таштандылары. Самосвал менен тез чыгарам.',
    location: 'Бишкек',
    phone: '+996555511622',
    whatsapp: '996555511622',
    verified: true,
  },
  {
    id: 2,
    name: 'Бекболот Эсенов',
    photo: 'https://randomuser.me/api/portraits/men/52.jpg',
    specialty: 'Эски эмерек',
    vehicle: 'Портер',
    experience: '7 жыл',
    rating: 4.8,
    reviews: 189,
    price: '1,500 - 3,000',
    priceType: 'сом',
    description: 'Эски эмеректерди чыгарам. Грузчик кирет баага.',
    location: 'Бишкек',
    phone: '+996700622733',
    whatsapp: '996700622733',
    verified: true,
  },
  {
    id: 3,
    name: 'Гүлжигит Кадыров',
    photo: 'https://randomuser.me/api/portraits/men/53.jpg',
    specialty: 'Үй мусору',
    vehicle: 'Портер',
    experience: '5 жыл',
    rating: 4.7,
    reviews: 134,
    price: '1,000 - 2,000',
    priceType: 'сом',
    description: 'Үй мусорун тез чыгарам. 30 мүнөт ичинде келем.',
    location: 'Бишкек',
    phone: '+996772733844',
    whatsapp: '996772733844',
    verified: true,
  },
  {
    id: 4,
    name: 'Данияр Орозов',
    photo: 'https://randomuser.me/api/portraits/men/54.jpg',
    specialty: 'Бак калдыктары',
    vehicle: 'Газель',
    experience: '6 жыл',
    rating: 4.6,
    reviews: 78,
    price: '1,500 - 2,500',
    priceType: 'сом',
    description: 'Бак-дарак калдыктары. Үй участокторун тазалайм.',
    location: 'Бишкек',
    phone: '+996550844955',
    whatsapp: '996550844955',
    verified: false,
  },
  {
    id: 5,
    name: 'Эрмек Жумабеков',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
    specialty: 'Курулуш мусору',
    vehicle: 'Самосвал 10т',
    experience: '12 жыл',
    rating: 5.0,
    reviews: 312,
    price: '5,000 - 8,000',
    priceType: 'сом/рейс',
    description: 'Чоң көлөмдөгү мусор. Самосвал 10 тонна.',
    location: 'Бишкек',
    phone: '+996708955066',
    whatsapp: '996708955066',
    verified: true,
  },
  {
    id: 6,
    name: 'Жанболот Сатыбалдиев',
    photo: 'https://randomuser.me/api/portraits/men/56.jpg',
    specialty: 'Аралаш мусор',
    vehicle: 'Газель',
    experience: '8 жыл',
    rating: 4.9,
    reviews: 198,
    price: '2,000 - 3,500',
    priceType: 'сом',
    description: 'Каалаган мусорду чыгарам. Тез жана арзан.',
    location: 'Бишкек',
    phone: '+996777066177',
    whatsapp: '996777066177',
    verified: true,
  },
  {
    id: 7,
    name: 'Канат Токтогулов',
    photo: 'https://randomuser.me/api/portraits/men/57.jpg',
    specialty: 'Эски техника',
    vehicle: 'Портер',
    experience: '4 жыл',
    rating: 4.8,
    reviews: 67,
    price: '1,000 - 1,800',
    priceType: 'сом',
    description: 'Эски техникаларды чыгарам. Тоңузгуч, кир жуугуч.',
    location: 'Бишкек',
    phone: '+996559177288',
    whatsapp: '996559177288',
    verified: true,
  },
  {
    id: 8,
    name: 'Мирлан Исаков',
    photo: 'https://randomuser.me/api/portraits/men/58.jpg',
    specialty: 'Үй мусору',
    vehicle: 'Портер',
    experience: '3 жыл',
    rating: 4.5,
    reviews: 45,
    price: '800 - 1,500',
    priceType: 'сом',
    description: 'Арзан баада мусор чыгарам. Студент.',
    location: 'Бишкек',
    phone: '+996701288399',
    whatsapp: '996701288399',
    verified: false,
  },
  {
    id: 9,
    name: 'Нурбек Абдыкадыров',
    photo: 'https://randomuser.me/api/portraits/men/59.jpg',
    specialty: 'Курулуш мусору',
    vehicle: 'Самосвал 5т',
    experience: '9 жыл',
    rating: 4.9,
    reviews: 234,
    price: '3,500 - 5,500',
    priceType: 'сом/рейс',
    description: 'Курулуш аянтчаларынан мусор. Келишим боюнча.',
    location: 'Бишкек',
    phone: '+996555399400',
    whatsapp: '996555399400',
    verified: true,
  },
  {
    id: 10,
    name: 'Өмүрбек Касымов',
    photo: 'https://randomuser.me/api/portraits/men/60.jpg',
    specialty: 'Эски эмерек',
    vehicle: 'Газель',
    experience: '11 жыл',
    rating: 5.0,
    reviews: 278,
    price: '2,000 - 4,000',
    priceType: 'сом',
    description: 'Эски эмеректерди толук чыгарам. Чечип-ташып беребиз.',
    location: 'Бишкек',
    phone: '+996700400511',
    whatsapp: '996700400511',
    verified: true,
  },
]

export default function GarbagePage() {
  const t = useTranslations()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-700 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🗑️</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Мусор чыгаруу Бишкекте
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Курулуш мусору, эски эмерек, үй калдыктары - баарын чыгарабыз
          </p>
        </div>
      </section>

      {/* Garbage Types */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Мусор түрлөрү</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {garbageTypes.map((type) => (
              <div
                key={type.id}
                id={type.id}
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-3xl mb-2">{type.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{type.description}</p>
                <p className="text-gray-700 font-bold text-sm">{type.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2">Биздин айдоочулар</h2>
          <p className="text-gray-600 text-center mb-8">Тажрыйбалуу жана тез кызмат</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workers.map((worker) => (
              <div
                key={worker.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {/* Header with photo */}
                <div className="relative">
                  <div className="h-32 bg-gradient-to-r from-gray-600 to-gray-800"></div>
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
                  <p className="text-gray-600 text-center font-medium">{worker.specialty}</p>
                  <p className="text-blue-600 text-center text-sm">{worker.vehicle}</p>

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
                    <span className="text-2xl font-bold text-gray-700">{worker.price}</span>
                    <span className="text-gray-500 text-sm"> {worker.priceType}</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <a
                      href={`tel:${worker.phone}`}
                      className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-medium text-center hover:bg-gray-800 transition flex items-center justify-center gap-2"
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
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Мусор чыгаруу кызматында иштегиңиз келеби?</h2>
          <p className="text-gray-600 mb-6">
            Өзүңүздү катталып, заказ алып баштаңыз
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition inline-flex items-center justify-center gap-2"
            >
              <span>🚛</span> Айдоочу катары катталуу
            </Link>
            <a
              href="tel:+996555123456"
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition inline-flex items-center justify-center gap-2"
            >
              <span>📞</span> Чалуу
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}