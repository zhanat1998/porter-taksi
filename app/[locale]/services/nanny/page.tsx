'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

const nannyTypes = [
  {
    id: 'hourly',
    icon: '⏰',
    title: '1 саатка',
    description: 'Кыска убакытка балаңызды карап туруу',
    price: '200-400 сом/саат'
  },
  {
    id: 'half-day',
    icon: '🌤️',
    title: 'Жарым күнгө',
    description: '4-5 саатка балаңызды карап туруу',
    price: '800-1,500 сом'
  },
  {
    id: 'full-day',
    icon: '☀️',
    title: 'Бир күнгө',
    description: 'Толук күн балаңызды карап туруу',
    price: '1,500-2,500 сом'
  },
  {
    id: 'night',
    icon: '🌙',
    title: 'Түнкү няня',
    description: 'Түнкү убакта балаңызды карап туруу',
    price: '2,000-3,000 сом'
  },
  {
    id: 'permanent',
    icon: '📅',
    title: 'Туруктуу иш',
    description: 'Үй-бүлөгө туруктуу няня',
    price: '25,000-40,000 сом/ай'
  },
]

const workers = [
  {
    id: 1,
    name: 'Айнура Бекова',
    photo: 'https://randomuser.me/api/portraits/women/21.jpg',
    specialty: 'Туруктуу няня',
    experience: '10 жыл',
    rating: 5.0,
    reviews: 87,
    price: '30,000 - 35,000',
    priceType: 'сом/ай',
    description: 'Педагог билими бар. 0-7 жаштагы балдар менен иштейм. Өнүктүрүү сабактары.',
    location: 'Бишкек',
    phone: '+996555211222',
    whatsapp: '996555211222',
    verified: true,
  },
  {
    id: 2,
    name: 'Бермет Асанова',
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
    specialty: '1 саатка',
    experience: '5 жыл',
    rating: 4.9,
    reviews: 156,
    price: '250 - 350',
    priceType: 'сом/саат',
    description: 'Тез чакырууга даярмын. Бишкектин каалаган жерине барам. Балдарды жакшы көрөм.',
    location: 'Бишкек',
    phone: '+996700322433',
    whatsapp: '996700322433',
    verified: true,
  },
  {
    id: 3,
    name: 'Гүлмира Токтогулова',
    photo: 'https://randomuser.me/api/portraits/women/23.jpg',
    specialty: 'Бир күнгө',
    experience: '8 жыл',
    rating: 4.8,
    reviews: 98,
    price: '1,800 - 2,200',
    priceType: 'сом/күн',
    description: 'Медициналык билими бар. Ымыркайлар менен иштейм. Биринчи жардам көрсөтө алам.',
    location: 'Бишкек',
    phone: '+996772433544',
    whatsapp: '996772433544',
    verified: true,
  },
  {
    id: 4,
    name: 'Динара Эсенбекова',
    photo: 'https://randomuser.me/api/portraits/women/24.jpg',
    specialty: 'Түнкү няня',
    experience: '6 жыл',
    rating: 4.7,
    reviews: 45,
    price: '2,000 - 2,500',
    priceType: 'сом/түн',
    description: 'Түнкү убакта балдарды карап турам. Тыныч жана жоопкерчиликтүү.',
    location: 'Бишкек',
    phone: '+996550544655',
    whatsapp: '996550544655',
    verified: false,
  },
  {
    id: 5,
    name: 'Элнура Жумабаева',
    photo: 'https://randomuser.me/api/portraits/women/25.jpg',
    specialty: 'Жарым күнгө',
    experience: '4 жыл',
    rating: 4.9,
    reviews: 67,
    price: '1,000 - 1,300',
    priceType: 'сом',
    description: 'Таңкы же түштөн кийинки убакытта иштейм. Балдарга англис тили үйрөтөм.',
    location: 'Бишкек',
    phone: '+996708655766',
    whatsapp: '996708655766',
    verified: true,
  },
  {
    id: 6,
    name: 'Жыпара Сатыбалдиева',
    photo: 'https://randomuser.me/api/portraits/women/26.jpg',
    specialty: 'Туруктуу няня',
    experience: '15 жыл',
    rating: 5.0,
    reviews: 134,
    price: '35,000 - 45,000',
    priceType: 'сом/ай',
    description: 'VIP үй-бүлөлөр үчүн. Европа стандарттары. Тил билүү: орус, кыргыз, англис.',
    location: 'Бишкек',
    phone: '+996777766877',
    whatsapp: '996777766877',
    verified: true,
  },
  {
    id: 7,
    name: 'Канышай Орозова',
    photo: 'https://randomuser.me/api/portraits/women/27.jpg',
    specialty: 'Бир күнгө',
    experience: '7 жыл',
    rating: 4.8,
    reviews: 89,
    price: '1,500 - 2,000',
    priceType: 'сом/күн',
    description: 'Оюндар, тарбия, тамактандыруу. 2-10 жаштагы балдар менен иштейм.',
    location: 'Бишкек',
    phone: '+996559877988',
    whatsapp: '996559877988',
    verified: true,
  },
  {
    id: 8,
    name: 'Лейла Абдыкадырова',
    photo: 'https://randomuser.me/api/portraits/women/28.jpg',
    specialty: '1 саатка',
    experience: '3 жыл',
    rating: 4.6,
    reviews: 34,
    price: '200 - 300',
    priceType: 'сом/саат',
    description: 'Студент кыз. Жумуш убактысы ийкемдүү. Балдар менен оюн ойнойм.',
    location: 'Бишкек',
    phone: '+996701988099',
    whatsapp: '996701988099',
    verified: false,
  },
  {
    id: 9,
    name: 'Махабат Турсунова',
    photo: 'https://randomuser.me/api/portraits/women/29.jpg',
    specialty: 'Туруктуу няня',
    experience: '12 жыл',
    rating: 4.9,
    reviews: 178,
    price: '28,000 - 32,000',
    priceType: 'сом/ай',
    description: 'Тажрыйбалуу эне. 3 баланы өстүргөм. Тамак даярдайм, үйдү тазалайм.',
    location: 'Бишкек',
    phone: '+996555099100',
    whatsapp: '996555099100',
    verified: true,
  },
  {
    id: 10,
    name: 'Назгүл Касымбекова',
    photo: 'https://randomuser.me/api/portraits/women/30.jpg',
    specialty: 'Түнкү няня',
    experience: '9 жыл',
    rating: 5.0,
    reviews: 67,
    price: '2,500 - 3,000',
    priceType: 'сом/түн',
    description: 'Түнкү смена адиси. Ымыркайлар менен тажрыйба. Медбике билими бар.',
    location: 'Бишкек',
    phone: '+996700100211',
    whatsapp: '996700100211',
    verified: true,
  },
]

export default function NannyPage() {
  const t = useTranslations()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-500 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">👶</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Няня кызматтары Бишкекте
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Балаңыздын коопсуздугу жана өнүгүүсү биздин приоритетибиз
          </p>
        </div>
      </section>

      {/* Nanny Types */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Няня түрлөрү</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {nannyTypes.map((type) => (
              <div
                key={type.id}
                id={type.id}
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer text-center"
              >
                <div className="text-3xl mb-2">{type.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{type.description}</p>
                <p className="text-purple-600 font-bold text-sm">{type.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2">Биздин нянялар</h2>
          <p className="text-gray-600 text-center mb-8">Текшерилген жана тажрыйбалуу адистер</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workers.map((worker) => (
              <div
                key={worker.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {/* Header with photo */}
                <div className="relative">
                  <div className="h-32 bg-gradient-to-r from-purple-400 to-pink-500"></div>
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
                  <p className="text-purple-600 text-center font-medium">{worker.specialty}</p>

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
                    <span className="text-2xl font-bold text-purple-600">{worker.price}</span>
                    <span className="text-gray-500 text-sm"> {worker.priceType}</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <a
                      href={`tel:${worker.phone}`}
                      className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-medium text-center hover:bg-purple-700 transition flex items-center justify-center gap-2"
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
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Няня болуп иштегиңиз келеби?</h2>
          <p className="text-gray-600 mb-6">
            Өзүңүздү катталып, иш таап баштаңыз
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-600 transition inline-flex items-center justify-center gap-2"
            >
              <span>👶</span> Няня катары катталуу
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