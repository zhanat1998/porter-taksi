import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Кызматтар | Porter Taxi Бишкек',
  description: 'Мусор чыгаруу, жүк ташуу, көчүрүү, грузчик кызматтары Бишкекте. Тез жана сапаттуу!',
}

const services = [
  {
    title: 'Мусор чыгаруу',
    description: 'Курулуш таштандылары, эски эмеректер, тиричилик таштандылары. Тез жана таза иштейбиз.',
    icon: '🗑️',
    price: '1500 сом',
    features: ['Курулуш таштандылары', 'Эски эмеректер', 'Тиричилик таштандылары', 'Бак-дарак калдыктары'],
  },
  {
    title: 'Жүк ташуу',
    description: 'Портер, Газель менен жүк ташуу кызматы. Шаар ичи жана шаар сыртына.',
    icon: '🚚',
    price: '800 сом/саат',
    features: ['Шаар ичинде', 'Шаар сыртына', 'Курулуш материалдары', 'Тамак-аш жеткирүү'],
  },
  {
    title: 'Көчүрүү',
    description: 'Квартира, офис көчүрүү. Этияттык менен жүктөө жана түшүрүү.',
    icon: '📦',
    price: '2000 сом',
    features: ['Квартира көчүрүү', 'Офис көчүрүү', 'Эмерек ташуу', 'Техника ташуу'],
  },
  {
    title: 'Грузчик кызматы',
    description: 'Тажрыйбалуу жүктөгүчтөр. Оор жүктөрдү этияттык менен ташыйбыз.',
    icon: '💪',
    price: '500 сом/саат',
    features: ['Жүктөө/түшүрүү', 'Кат боюнча көтөрүү', 'Эмерек чечүү/жыйноо', 'Оор жүктөр'],
  },
  {
    title: 'Курулуш таштандылары',
    description: 'Ремонттон кийинки таштандыларды тез чыгарабыз. Самосвал менен.',
    icon: '🚜',
    price: '2500 сом',
    features: ['Кирпич, бетон', 'Эски плитка', 'Курулуш калдыктары', 'Топурак'],
  },
  {
    title: 'Эмерек ташуу',
    description: 'Диван, шкаф, тошок жана башка эмеректерди этияттык менен ташыйбыз.',
    icon: '🛋️',
    price: '1500 сом',
    features: ['Диван, кресло', 'Шкаф, комод', 'Тошок', 'Столдор'],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Биздин кызматтар</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Бишкек шаарында мусор чыгаруу, жүк ташуу жана көчүрүү боюнча толук кызмат
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition hover:border-green-500"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-4">
                  <span className="text-green-600 font-bold text-2xl">{service.price}</span>
                  <span className="text-gray-500 text-sm"> ден баштап</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:+996555123456"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-medium hover:bg-green-700 transition"
                >
                  Заказ берүү
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Кызмат керекпи?</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Азыр чалыңыз же WhatsApp жазыңыз. Биз 24/7 иштейбиз!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+996555123456"
              className="bg-white text-green-700 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition"
            >
              📞 +996 555 123 456
            </a>
            <a
              href="https://wa.me/996555123456"
              className="border-2 border-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}