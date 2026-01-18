'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

const cleaningTypes = [
  {
    id: 'daily',
    icon: '🏠',
    title: 'Күнүмдүк тазалоо',
    description: 'Үйдү күндө сапаттуу тазалоо',
    price: '1,500-2,500 сом'
  },
  {
    id: 'general',
    icon: '✨',
    title: 'Генералдык тазалоо',
    description: 'Толук терең тазалоо',
    price: '3,000-6,000 сом'
  },
  {
    id: 'after-repair',
    icon: '🔨',
    title: 'Ремонттон кийин',
    description: 'Курулуш чаңын тазалоо',
    price: '4,000-8,000 сом'
  },
  {
    id: 'office',
    icon: '🏢',
    title: 'Офис тазалоо',
    description: 'Офис жана коммерциялык жайлар',
    price: '2,000-5,000 сом'
  },
  {
    id: 'window',
    icon: '🪟',
    title: 'Терезе жуу',
    description: 'Терезе жана айнек тазалоо',
    price: '200-500 сом/даана'
  },
  {
    id: 'furniture',
    icon: '🛋️',
    title: 'Эмерек тазалоо',
    description: 'Диван, килем, матрас',
    price: '800-2,000 сом'
  },
]

const workers = [
  {
    id: 1,
    name: 'Айжамал Токтосунова',
    photo: 'https://randomuser.me/api/portraits/women/41.jpg',
    specialty: 'Генералдык тазалоо',
    experience: '7 жыл',
    rating: 4.9,
    reviews: 145,
    price: '3,500 - 5,000',
    priceType: 'сом',
    description: 'Профессионалдуу жабдуулар менен иштейм. Эко-таза каражаттар.',
    location: 'Бишкек',
    phone: '+996555311422',
    whatsapp: '996555311422',
    verified: true,
  },
  {
    id: 2,
    name: 'Бактыгүл Исаева',
    photo: 'https://randomuser.me/api/portraits/women/42.jpg',
    specialty: 'Күнүмдүк тазалоо',
    experience: '5 жыл',
    rating: 4.8,
    reviews: 89,
    price: '1,500 - 2,000',
    priceType: 'сом',
    description: 'Тез жана сапаттуу. Үй-бүлөлөр үчүн туруктуу кызмат.',
    location: 'Бишкек',
    phone: '+996700422533',
    whatsapp: '996700422533',
    verified: true,
  },
  {
    id: 3,
    name: 'Гүлнара Эсенова',
    photo: 'https://randomuser.me/api/portraits/women/43.jpg',
    specialty: 'Ремонттон кийин',
    experience: '10 жыл',
    rating: 5.0,
    reviews: 178,
    price: '5,000 - 8,000',
    priceType: 'сом',
    description: 'Курулуш чаңын толук тазалайм. Терезе, пол, дубал - баары.',
    location: 'Бишкек',
    phone: '+996772533644',
    whatsapp: '996772533644',
    verified: true,
  },
  {
    id: 4,
    name: 'Дамира Кадырова',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    specialty: 'Офис тазалоо',
    experience: '6 жыл',
    rating: 4.7,
    reviews: 67,
    price: '2,500 - 4,000',
    priceType: 'сом',
    description: 'Офистерге туруктуу кызмат. Таңкы же кечки убакыт.',
    location: 'Бишкек',
    phone: '+996550644755',
    whatsapp: '996550644755',
    verified: false,
  },
  {
    id: 5,
    name: 'Эльмира Жумабаева',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
    specialty: 'Терезе жуу',
    experience: '4 жыл',
    rating: 4.9,
    reviews: 112,
    price: '250 - 400',
    priceType: 'сом/даана',
    description: 'Бийик кат терезелер. Профессионалдуу жабдуулар.',
    location: 'Бишкек',
    phone: '+996708755866',
    whatsapp: '996708755866',
    verified: true,
  },
  {
    id: 6,
    name: 'Жыпаргүл Абдыкадырова',
    photo: 'https://randomuser.me/api/portraits/women/46.jpg',
    specialty: 'Эмерек тазалоо',
    experience: '8 жыл',
    rating: 5.0,
    reviews: 201,
    price: '1,000 - 2,500',
    priceType: 'сом',
    description: 'Диван, кресло, матрас химтазалоо. Так жана жыт кетирүү.',
    location: 'Бишкек',
    phone: '+996777866977',
    whatsapp: '996777866977',
    verified: true,
  },
  {
    id: 7,
    name: 'Канышай Орозова',
    photo: 'https://randomuser.me/api/portraits/women/47.jpg',
    specialty: 'Генералдык тазалоо',
    experience: '9 жыл',
    rating: 4.8,
    reviews: 156,
    price: '4,000 - 6,000',
    priceType: 'сом',
    description: 'VIP үйлөр үчүн. Жогорку сапат кепилдиги.',
    location: 'Бишкек',
    phone: '+996559977088',
    whatsapp: '996559977088',
    verified: true,
  },
  {
    id: 8,
    name: 'Лейла Токтогулова',
    photo: 'https://randomuser.me/api/portraits/women/48.jpg',
    specialty: 'Күнүмдүк тазалоо',
    experience: '3 жыл',
    rating: 4.6,
    reviews: 45,
    price: '1,200 - 1,800',
    priceType: 'сом',
    description: 'Студент кыз. Арзан баада сапаттуу тазалоо.',
    location: 'Бишкек',
    phone: '+996701088199',
    whatsapp: '996701088199',
    verified: false,
  },
  {
    id: 9,
    name: 'Мээрим Сатыбалдиева',
    photo: 'https://randomuser.me/api/portraits/women/49.jpg',
    specialty: 'Ремонттон кийин',
    experience: '12 жыл',
    rating: 4.9,
    reviews: 234,
    price: '6,000 - 10,000',
    priceType: 'сом',
    description: 'Команда менен иштейм. Чоң объекттер, коттедждер.',
    location: 'Бишкек',
    phone: '+996555199200',
    whatsapp: '996555199200',
    verified: true,
  },
  {
    id: 10,
    name: 'Нуржан Касымбекова',
    photo: 'https://randomuser.me/api/portraits/women/50.jpg',
    specialty: 'Офис тазалоо',
    experience: '11 жыл',
    rating: 5.0,
    reviews: 189,
    price: '3,000 - 5,000',
    priceType: 'сом',
    description: 'Чоң офистер, бизнес борборлор. Келишим боюнча иштейм.',
    location: 'Бишкек',
    phone: '+996700200311',
    whatsapp: '996700200311',
    verified: true,
  },
]

export default function CleaningPage() {
  const t = useTranslations()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-500 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🧹</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Клининг кызматтары Бишкекте
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Профессионалдуу тазалоо - үй, офис, ремонттон кийин
          </p>
        </div>
      </section>

      {/* Cleaning Types */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Тазалоо түрлөрү</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cleaningTypes.map((type) => (
              <div
                key={type.id}
                id={type.id}
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-3xl mb-2">{type.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{type.description}</p>
                <p className="text-green-600 font-bold text-sm">{type.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2">Биздин тазалоочулар</h2>
          <p className="text-gray-600 text-center mb-8">Профессионалдуу жана тажрыйбалуу адистер</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workers.map((worker) => (
              <div
                key={worker.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {/* Header with photo */}
                <div className="relative">
                  <div className="h-32 bg-gradient-to-r from-green-400 to-teal-500"></div>
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
                  <p className="text-green-600 text-center font-medium">{worker.specialty}</p>

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
                    <span className="text-2xl font-bold text-green-600">{worker.price}</span>
                    <span className="text-gray-500 text-sm"> {worker.priceType}</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <a
                      href={`tel:${worker.phone}`}
                      className="flex-1 bg-green-600 text-white py-3 rounded-xl font-medium text-center hover:bg-green-700 transition flex items-center justify-center gap-2"
                    >
                      <span>📞</span> Чалуу
                    </a>
                    <a
                      href={`https://wa.me/${worker.whatsapp}`}
                      className="flex-1 bg-emerald-500 text-white py-3 rounded-xl font-medium text-center hover:bg-emerald-600 transition flex items-center justify-center gap-2"
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
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Тазалоочу болуп иштегиңиз келеби?</h2>
          <p className="text-gray-600 mb-6">
            Өзүңүздү катталып, заказ алып баштаңыз
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition inline-flex items-center justify-center gap-2"
            >
              <span>🧹</span> Тазалоочу катары катталуу
            </Link>
            <a
              href="tel:+996555123456"
              className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition inline-flex items-center justify-center gap-2"
            >
              <span>📞</span> Чалуу
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}