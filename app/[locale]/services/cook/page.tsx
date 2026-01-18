'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

const cookTypes = [
  {
    id: 'wedding',
    icon: '🎂',
    title: 'Той повары',
    description: 'Үйлөнүү той, юбилей, туулган күн, куран окуу',
    services: ['Тойго тамак', 'Юбилей', 'Туулган күн', 'Куран окуу', 'Кудалык']
  },
  {
    id: 'home',
    icon: '🏠',
    title: 'Үйгө повар',
    description: 'Күнүмдүк тамак даярдоо, үй-бүлөгө повар',
    services: ['Күндөлүк тамак', 'Бир жумалык меню', 'Үй-бүлөгө повар']
  },
  {
    id: 'cafe',
    icon: '☕',
    title: 'Кафе/Ресторан',
    description: 'Ашканага туруктуу же убактылуу повар',
    services: ['Баш повар', 'Жардамчы повар', 'Убактылуу повар']
  },
  {
    id: 'corporate',
    icon: '🏢',
    title: 'Корпоратив',
    description: 'Офис иш-чаралары, бизнес тамактануу',
    services: ['Офис тамагы', 'Бизнес ланч', 'Корпоратив']
  },
  {
    id: 'diet',
    icon: '🥗',
    title: 'Диеталык тамак',
    description: 'ПП тамак, диета, спортчулар үчүн',
    services: ['ПП меню', 'Спорттук тамак', 'Диета', 'Вегетариан']
  },
  {
    id: 'shashlik',
    icon: '🍖',
    title: 'Шашлык мастер',
    description: 'Манты, шашлык, казан тамактары',
    services: ['Шашлык', 'Манты', 'Казан', 'Самса', 'Куурдак']
  },
  {
    id: 'confectioner',
    icon: '🎂',
    title: 'Кондитер',
    description: 'Торт, печенье, выпечка заказга',
    services: ['Той торту', 'Капкейк', 'Печенье', 'Выпечка']
  },
  {
    id: 'national',
    icon: '🥘',
    title: 'Улуттук тамактар',
    description: 'Кыргыз, өзбек, уйгур тамактары',
    services: ['Бешбармак', 'Лагман', 'Плов', 'Ашлям-фу', 'Манты']
  },
]

const workers = [
  {
    id: 1,
    name: 'Айгүл Асанова',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg',
    specialty: 'Той повары',
    experience: '8 жыл',
    rating: 4.9,
    reviews: 124,
    price: '8,000 - 12,000',
    description: 'Кыргыз жана европа тамактары. 500+ той өткөрдүм. Бешбармак, плов, манты - баары.',
    location: 'Бишкек',
    phone: '+996555111222',
    whatsapp: '996555111222',
    verified: true,
  },
  {
    id: 2,
    name: 'Бакыт Эсенов',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
    specialty: 'Шашлык мастер',
    experience: '12 жыл',
    rating: 5.0,
    reviews: 89,
    price: '5,000 - 8,000',
    description: 'Шашлык, казан тамактары, куурдак. Тойлорго, корпоративдерге. Өзүмдүн жабдуум бар.',
    location: 'Бишкек',
    phone: '+996700222333',
    whatsapp: '996700222333',
    verified: true,
  },
  {
    id: 3,
    name: 'Гүлзат Токтосунова',
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
    specialty: 'Кондитер',
    experience: '6 жыл',
    rating: 4.8,
    reviews: 156,
    price: '2,500 - 8,000',
    description: 'Той торттору, капкейктер, макаронс. Заказга 2 күн мурун билдириңиз.',
    location: 'Бишкек',
    phone: '+996772333444',
    whatsapp: '996772333444',
    verified: true,
  },
  {
    id: 4,
    name: 'Азамат Жумабеков',
    photo: 'https://randomuser.me/api/portraits/men/4.jpg',
    specialty: 'Үйгө повар',
    experience: '5 жыл',
    rating: 4.7,
    reviews: 67,
    price: '1,500 - 2,500',
    description: 'Күнүмдүк тамак даярдоо. Үй-бүлөлөргө жумалык меню. Саламаттык тамактар.',
    location: 'Бишкек',
    phone: '+996550444555',
    whatsapp: '996550444555',
    verified: false,
  },
  {
    id: 5,
    name: 'Нургүл Сатыбалдиева',
    photo: 'https://randomuser.me/api/portraits/women/5.jpg',
    specialty: 'Диеталык тамак',
    experience: '4 жыл',
    rating: 4.9,
    reviews: 43,
    price: '2,000 - 3,500',
    description: 'ПП меню, спортчулар үчүн тамак. Калория эсептөө. Жеке меню түзүү.',
    location: 'Бишкек',
    phone: '+996708555666',
    whatsapp: '996708555666',
    verified: true,
  },
  {
    id: 6,
    name: 'Талант Орозбаев',
    photo: 'https://randomuser.me/api/portraits/men/6.jpg',
    specialty: 'Улуттук тамактар',
    experience: '15 жыл',
    rating: 5.0,
    reviews: 201,
    price: '6,000 - 10,000',
    description: 'Кыргыз улуттук тамактары. Бешбармак, куурдак, боорсок. VIP тойлор.',
    location: 'Бишкек',
    phone: '+996777666777',
    whatsapp: '996777666777',
    verified: true,
  },
  {
    id: 7,
    name: 'Айжан Маматова',
    photo: 'https://randomuser.me/api/portraits/women/7.jpg',
    specialty: 'Кафе/Ресторан',
    experience: '10 жыл',
    rating: 4.8,
    reviews: 78,
    price: '25,000 - 40,000',
    description: 'Баш повар тажрыйбасы. Европа, азия ашканасы. Меню иштеп чыгуу.',
    location: 'Бишкек',
    phone: '+996559777888',
    whatsapp: '996559777888',
    verified: true,
  },
  {
    id: 8,
    name: 'Эрлан Касымов',
    photo: 'https://randomuser.me/api/portraits/men/8.jpg',
    specialty: 'Корпоратив',
    experience: '7 жыл',
    rating: 4.6,
    reviews: 34,
    price: '3,000 - 5,000',
    description: 'Офис тамагы, бизнес ланчтар. Кейтеринг кызматы. 50-200 кишиге.',
    location: 'Бишкек',
    phone: '+996701888999',
    whatsapp: '996701888999',
    verified: false,
  },
  {
    id: 9,
    name: 'Жазгүл Абдыкеримова',
    photo: 'https://randomuser.me/api/portraits/women/9.jpg',
    specialty: 'Той повары',
    experience: '9 жыл',
    rating: 4.9,
    reviews: 167,
    price: '7,000 - 11,000',
    description: 'Өзбек жана уйгур тамактары. Плов, лагман, манты. Чоң тойлорго.',
    location: 'Бишкек',
    phone: '+996555999000',
    whatsapp: '996555999000',
    verified: true,
  },
  {
    id: 10,
    name: 'Марат Сыдыков',
    photo: 'https://randomuser.me/api/portraits/men/10.jpg',
    specialty: 'Шашлык мастер',
    experience: '20 жыл',
    rating: 5.0,
    reviews: 312,
    price: '6,000 - 10,000',
    description: 'Шашлык устасы. Кой, уй, тоок эти. Казан тамактары. Легендарлуу даам!',
    location: 'Бишкек',
    phone: '+996700000111',
    whatsapp: '996700000111',
    verified: true,
  },
]

export default function CookPage() {
  const t = useTranslations()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">👨‍🍳</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Повар кызматтары Бишкекте
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Тойго, үйгө, кафеге - каалаган тамакты даярдап беребиз
          </p>
        </div>
      </section>

      {/* Cook Types */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Повар түрлөрү</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cookTypes.map((type) => (
              <div
                key={type.id}
                id={type.id}
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-3xl mb-2">{type.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2">Биздин поварлар</h2>
          <p className="text-gray-600 text-center mb-8">Тажрыйбалуу жана текшерилген адистер</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workers.map((worker) => (
              <div
                key={worker.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {/* Header with photo */}
                <div className="relative">
                  <div className="h-32 bg-gradient-to-r from-orange-400 to-red-500"></div>
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
                  <p className="text-orange-600 text-center font-medium">{worker.specialty}</p>

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
                    <span className="text-2xl font-bold text-orange-600">{worker.price}</span>
                    <span className="text-gray-500 text-sm"> сом/күн</span>
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
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Повар болуп иштегиңиз келеби?</h2>
          <p className="text-gray-600 mb-6">
            Өзүңүздү катталып, заказ алып баштаңыз
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition inline-flex items-center justify-center gap-2"
            >
              <span>👨‍🍳</span> Повар катары катталуу
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

      {/* Prices */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Болжолдуу баалар</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center shadow">
              <div className="text-3xl mb-2">🎂</div>
              <h3 className="font-bold mb-2">Той повары</h3>
              <p className="text-2xl font-bold text-orange-600">5,000 - 15,000 с</p>
              <p className="text-gray-500 text-sm">1 күнгө</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-bold mb-2">Үйгө повар</h3>
              <p className="text-2xl font-bold text-orange-600">1,500 - 3,000 с</p>
              <p className="text-gray-500 text-sm">1 күнгө</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow">
              <div className="text-3xl mb-2">🎂</div>
              <h3 className="font-bold mb-2">Той торту</h3>
              <p className="text-2xl font-bold text-orange-600">2,000 - 10,000 с</p>
              <p className="text-gray-500 text-sm">1 кг</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}