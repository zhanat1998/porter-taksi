'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

const loaderTypes = [
  {
    id: 'moving',
    icon: '🏠',
    title: 'Көчүрүү',
    description: 'Квартира, офис көчүрүү',
    price: '500-1,000 сом/саат'
  },
  {
    id: 'furniture',
    icon: '🪑',
    title: 'Эмерек',
    description: 'Оор эмеректерди көтөрүү',
    price: '1,000-3,000 сом'
  },
  {
    id: 'piano',
    icon: '🎹',
    title: 'Пианино/Сейф',
    description: 'Өтө оор буюмдарды ташуу',
    price: '3,000-8,000 сом'
  },
  {
    id: 'construction',
    icon: '🏗️',
    title: 'Курулуш',
    description: 'Материал жүктөө/түшүрүү',
    price: '400-800 сом/саат'
  },
  {
    id: 'loading',
    icon: '📦',
    title: 'Жүк жүктөө',
    description: 'Машинага жүктөө кызматы',
    price: '500-1,500 сом'
  },
  {
    id: 'unloading',
    icon: '🚛',
    title: 'Жүк түшүрүү',
    description: 'Машинадан түшүрүү кызматы',
    price: '500-1,500 сом'
  },
]

const workers = [
  {
    id: 1,
    name: 'Азамат Токтогулов',
    photo: 'https://randomuser.me/api/portraits/men/31.jpg',
    specialty: 'Көчүрүү',
    experience: '8 жыл',
    rating: 4.9,
    reviews: 234,
    price: '600 - 900',
    priceType: 'сом/саат',
    description: '2 кишилик бригада. Квартира, офис көчүрүүдө чоң тажрыйба.',
    location: 'Бишкек',
    phone: '+996555411522',
    whatsapp: '996555411522',
    verified: true,
  },
  {
    id: 2,
    name: 'Бакыт Орозбеков',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    specialty: 'Пианино/Сейф',
    experience: '12 жыл',
    rating: 5.0,
    reviews: 156,
    price: '4,000 - 7,000',
    priceType: 'сом',
    description: 'Пианино, сейф, тоңузгуч. Атайын жабдуулар менен иштейм.',
    location: 'Бишкек',
    phone: '+996700522633',
    whatsapp: '996700522633',
    verified: true,
  },
  {
    id: 3,
    name: 'Гүлжигит Эсенов',
    photo: 'https://randomuser.me/api/portraits/men/33.jpg',
    specialty: 'Эмерек',
    experience: '6 жыл',
    rating: 4.8,
    reviews: 98,
    price: '1,500 - 2,500',
    priceType: 'сом',
    description: 'Шкаф, диван, кровать. Кылдаттык менен ташыйм.',
    location: 'Бишкек',
    phone: '+996772633744',
    whatsapp: '996772633744',
    verified: true,
  },
  {
    id: 4,
    name: 'Данияр Кадыров',
    photo: 'https://randomuser.me/api/portraits/men/34.jpg',
    specialty: 'Курулуш',
    experience: '10 жыл',
    rating: 4.7,
    reviews: 78,
    price: '500 - 700',
    priceType: 'сом/саат',
    description: 'Курулуш материалдары. Кирпич, цемент, ж.б.',
    location: 'Бишкек',
    phone: '+996550744855',
    whatsapp: '996550744855',
    verified: false,
  },
  {
    id: 5,
    name: 'Эрлан Жумабеков',
    photo: 'https://randomuser.me/api/portraits/men/35.jpg',
    specialty: 'Жүк жүктөө',
    experience: '5 жыл',
    rating: 4.9,
    reviews: 112,
    price: '800 - 1,200',
    priceType: 'сом',
    description: 'Тез жана сапаттуу жүктөө. Бригада менен иштейм.',
    location: 'Бишкек',
    phone: '+996708855966',
    whatsapp: '996708855966',
    verified: true,
  },
  {
    id: 6,
    name: 'Жаныбек Сатыбалдиев',
    photo: 'https://randomuser.me/api/portraits/men/36.jpg',
    specialty: 'Көчүрүү',
    experience: '15 жыл',
    rating: 5.0,
    reviews: 312,
    price: '700 - 1,000',
    priceType: 'сом/саат',
    description: '4 кишилик бригада. VIP көчүрүү. Эмерек чечип-курап беребиз.',
    location: 'Бишкек',
    phone: '+996777966077',
    whatsapp: '996777966077',
    verified: true,
  },
  {
    id: 7,
    name: 'Канат Орозов',
    photo: 'https://randomuser.me/api/portraits/men/37.jpg',
    specialty: 'Пианино/Сейф',
    experience: '9 жыл',
    rating: 4.8,
    reviews: 89,
    price: '3,500 - 6,000',
    priceType: 'сом',
    description: 'Оор жүктөр боюнча адис. Сейф, банкомат, оборудование.',
    location: 'Бишкек',
    phone: '+996559077188',
    whatsapp: '996559077188',
    verified: true,
  },
  {
    id: 8,
    name: 'Мирлан Токтогулов',
    photo: 'https://randomuser.me/api/portraits/men/38.jpg',
    specialty: 'Эмерек',
    experience: '4 жыл',
    rating: 4.6,
    reviews: 45,
    price: '1,000 - 2,000',
    priceType: 'сом',
    description: 'Жаш жана күчтүү. Каалаган оор жүктү көтөрөм.',
    location: 'Бишкек',
    phone: '+996701188299',
    whatsapp: '996701188299',
    verified: false,
  },
  {
    id: 9,
    name: 'Нурбек Касымов',
    photo: 'https://randomuser.me/api/portraits/men/39.jpg',
    specialty: 'Курулуш',
    experience: '11 жыл',
    rating: 4.9,
    reviews: 167,
    price: '600 - 800',
    priceType: 'сом/саат',
    description: 'Курулуш аянтчаларда иштейм. Команда менен.',
    location: 'Бишкек',
    phone: '+996555299300',
    whatsapp: '996555299300',
    verified: true,
  },
  {
    id: 10,
    name: 'Өмүрбек Сыдыков',
    photo: 'https://randomuser.me/api/portraits/men/40.jpg',
    specialty: 'Жүк түшүрүү',
    experience: '7 жыл',
    rating: 5.0,
    reviews: 134,
    price: '700 - 1,000',
    priceType: 'сом',
    description: 'Контейнер, фура түшүрүү. Тез жана этият.',
    location: 'Бишкек',
    phone: '+996700300411',
    whatsapp: '996700300411',
    verified: true,
  },
]

export default function LoadersPage() {
  const t = useTranslations()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">💪</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Грузчик кызматтары Бишкекте
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Күчтүү жана тажрыйбалуу грузчиктер - каалаган жүктү ташыйбыз
          </p>
        </div>
      </section>

      {/* Loader Types */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Грузчик түрлөрү</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loaderTypes.map((type) => (
              <div
                key={type.id}
                id={type.id}
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-3xl mb-2">{type.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{type.description}</p>
                <p className="text-red-600 font-bold text-sm">{type.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2">Биздин грузчиктер</h2>
          <p className="text-gray-600 text-center mb-8">Күчтүү жана жоопкерчиликтүү адистер</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workers.map((worker) => (
              <div
                key={worker.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {/* Header with photo */}
                <div className="relative">
                  <div className="h-32 bg-gradient-to-r from-red-400 to-orange-500"></div>
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
                  <p className="text-red-600 text-center font-medium">{worker.specialty}</p>

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
                    <span className="text-2xl font-bold text-red-600">{worker.price}</span>
                    <span className="text-gray-500 text-sm"> {worker.priceType}</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <a
                      href={`tel:${worker.phone}`}
                      className="flex-1 bg-red-600 text-white py-3 rounded-xl font-medium text-center hover:bg-red-700 transition flex items-center justify-center gap-2"
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
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Грузчик болуп иштегиңиз келеби?</h2>
          <p className="text-gray-600 mb-6">
            Өзүңүздү катталып, заказ алып баштаңыз
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition inline-flex items-center justify-center gap-2"
            >
              <span>💪</span> Грузчик катары катталуу
            </Link>
            <a
              href="tel:+996555123456"
              className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition inline-flex items-center justify-center gap-2"
            >
              <span>📞</span> Чалуу
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}