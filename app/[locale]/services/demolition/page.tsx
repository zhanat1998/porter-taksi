'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

const demolitionTypes = [
  {
    id: 'house',
    icon: '🏚️',
    title: 'Үй бузуу',
    description: 'Эски үйлөрдү толук бузуу',
    price: '50,000-200,000 сом'
  },
  {
    id: 'walls',
    icon: '🧱',
    title: 'Дубал бузуу',
    description: 'Ички жана сырткы дубалдар',
    price: '5,000-20,000 сом'
  },
  {
    id: 'floor',
    icon: '🪨',
    title: 'Пол бузуу',
    description: 'Бетон, паркет, плитка',
    price: '3,000-15,000 сом'
  },
  {
    id: 'ceiling',
    icon: '🔝',
    title: 'Потолок бузуу',
    description: 'Подвесной, натяжной потолок',
    price: '2,000-8,000 сом'
  },
  {
    id: 'bathroom',
    icon: '🚿',
    title: 'Санузел бузуу',
    description: 'Ванна, душ, туалет',
    price: '5,000-15,000 сом'
  },
  {
    id: 'garage',
    icon: '🏗️',
    title: 'Гараж/Сарай',
    description: 'Чакан курулуштарды бузуу',
    price: '15,000-50,000 сом'
  },
]

const workers = [
  {
    id: 1,
    name: 'Алмаз Жумабеков',
    photo: 'https://randomuser.me/api/portraits/men/61.jpg',
    specialty: 'Үй бузуу',
    experience: '15 жыл',
    rating: 5.0,
    reviews: 189,
    price: '50,000 - 150,000',
    priceType: 'сом',
    description: 'Толук үй бузуу. Команда + техника. Мусор чыгаруу кирет.',
    location: 'Бишкек',
    phone: '+996555611722',
    whatsapp: '996555611722',
    verified: true,
  },
  {
    id: 2,
    name: 'Бакыт Токтогулов',
    photo: 'https://randomuser.me/api/portraits/men/62.jpg',
    specialty: 'Дубал бузуу',
    experience: '10 жыл',
    rating: 4.9,
    reviews: 145,
    price: '6,000 - 15,000',
    priceType: 'сом',
    description: 'Кирпич, бетон дубалдарды бузуу. Тез жана таза.',
    location: 'Бишкек',
    phone: '+996700722833',
    whatsapp: '996700722833',
    verified: true,
  },
  {
    id: 3,
    name: 'Гүлжигит Сатыбалдиев',
    photo: 'https://randomuser.me/api/portraits/men/63.jpg',
    specialty: 'Пол бузуу',
    experience: '8 жыл',
    rating: 4.8,
    reviews: 98,
    price: '4,000 - 12,000',
    priceType: 'сом',
    description: 'Бетон, паркет, плитка. Профессионалдуу жабдуулар.',
    location: 'Бишкек',
    phone: '+996772833944',
    whatsapp: '996772833944',
    verified: true,
  },
  {
    id: 4,
    name: 'Данияр Орозбеков',
    photo: 'https://randomuser.me/api/portraits/men/64.jpg',
    specialty: 'Санузел бузуу',
    experience: '6 жыл',
    rating: 4.7,
    reviews: 67,
    price: '6,000 - 12,000',
    priceType: 'сом',
    description: 'Ванна бөлмөсүн толук бузуу. Сантехника алып салуу.',
    location: 'Бишкек',
    phone: '+996550944055',
    whatsapp: '996550944055',
    verified: false,
  },
  {
    id: 5,
    name: 'Эрлан Касымов',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    specialty: 'Үй бузуу',
    experience: '12 жыл',
    rating: 4.9,
    reviews: 156,
    price: '70,000 - 180,000',
    priceType: 'сом',
    description: 'Чоң үйлөрдү бузуу. Экскаватор менен. Лицензия бар.',
    location: 'Бишкек',
    phone: '+996708055166',
    whatsapp: '996708055166',
    verified: true,
  },
  {
    id: 6,
    name: 'Жаныбек Эсенов',
    photo: 'https://randomuser.me/api/portraits/men/66.jpg',
    specialty: 'Гараж/Сарай',
    experience: '9 жыл',
    rating: 5.0,
    reviews: 112,
    price: '20,000 - 45,000',
    priceType: 'сом',
    description: 'Гараж, сарай, забор бузуу. Мусор чыгаруу кошо.',
    location: 'Бишкек',
    phone: '+996777166277',
    whatsapp: '996777166277',
    verified: true,
  },
  {
    id: 7,
    name: 'Канат Абдыкадыров',
    photo: 'https://randomuser.me/api/portraits/men/67.jpg',
    specialty: 'Потолок бузуу',
    experience: '5 жыл',
    rating: 4.8,
    reviews: 78,
    price: '3,000 - 7,000',
    priceType: 'сом',
    description: 'Подвесной, натяжной потолок. Тез жана таза иштейм.',
    location: 'Бишкек',
    phone: '+996559277388',
    whatsapp: '996559277388',
    verified: true,
  },
  {
    id: 8,
    name: 'Мирлан Кадыров',
    photo: 'https://randomuser.me/api/portraits/men/68.jpg',
    specialty: 'Дубал бузуу',
    experience: '4 жыл',
    rating: 4.6,
    reviews: 45,
    price: '5,000 - 10,000',
    priceType: 'сом',
    description: 'Арзан баада дубал бузуу. Студент командасы.',
    location: 'Бишкек',
    phone: '+996701388499',
    whatsapp: '996701388499',
    verified: false,
  },
  {
    id: 9,
    name: 'Нурбек Токтосунов',
    photo: 'https://randomuser.me/api/portraits/men/69.jpg',
    specialty: 'Пол бузуу',
    experience: '11 жыл',
    rating: 4.9,
    reviews: 134,
    price: '5,000 - 15,000',
    priceType: 'сом',
    description: 'Бардык түрдөгү полдорду бузуу. Тажрыйбалуу.',
    location: 'Бишкек',
    phone: '+996555499500',
    whatsapp: '996555499500',
    verified: true,
  },
  {
    id: 10,
    name: 'Өмүрбек Жумабеков',
    photo: 'https://randomuser.me/api/portraits/men/70.jpg',
    specialty: 'Үй бузуу',
    experience: '18 жыл',
    rating: 5.0,
    reviews: 234,
    price: '80,000 - 200,000',
    priceType: 'сом',
    description: 'VIP демонтаж. Чоң тажрыйба. Кепилдик берем.',
    location: 'Бишкек',
    phone: '+996700500611',
    whatsapp: '996700500611',
    verified: true,
  },
]

export default function DemolitionPage() {
  const t = useTranslations()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-600 to-amber-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🔨</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Демонтаж кызматтары Бишкекте
          </h1>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
            Үй, дубал, пол, потолок - профессионалдуу бузуу жана алып салуу
          </p>
        </div>
      </section>

      {/* Demolition Types */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Демонтаж түрлөрү</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {demolitionTypes.map((type) => (
              <div
                key={type.id}
                id={type.id}
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-3xl mb-2">{type.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{type.description}</p>
                <p className="text-yellow-600 font-bold text-sm">{type.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2">Биздин усталар</h2>
          <p className="text-gray-600 text-center mb-8">Профессионалдуу демонтаж адистери</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workers.map((worker) => (
              <div
                key={worker.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {/* Header with photo */}
                <div className="relative">
                  <div className="h-32 bg-gradient-to-r from-yellow-500 to-amber-600"></div>
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
                  <p className="text-yellow-600 text-center font-medium">{worker.specialty}</p>

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
                    <span className="text-2xl font-bold text-yellow-600">{worker.price}</span>
                    <span className="text-gray-500 text-sm"> {worker.priceType}</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <a
                      href={`tel:${worker.phone}`}
                      className="flex-1 bg-yellow-600 text-white py-3 rounded-xl font-medium text-center hover:bg-yellow-700 transition flex items-center justify-center gap-2"
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
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Демонтажчы болуп иштегиңиз келеби?</h2>
          <p className="text-gray-600 mb-6">
            Өзүңүздү катталып, заказ алып баштаңыз
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-yellow-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-700 transition inline-flex items-center justify-center gap-2"
            >
              <span>🔨</span> Демонтажчы катары катталуу
            </Link>
            <a
              href="tel:+996555123456"
              className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-700 transition inline-flex items-center justify-center gap-2"
            >
              <span>📞</span> Чалуу
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}