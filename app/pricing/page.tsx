import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Баалар | Porter Taxi Бишкек',
  description: 'Мусор чыгаруу жана жүк ташуу баалары. Ачык жана түшүнүктүү. Жашыруун төлөмдөр жок!',
}

const pricingCategories = [
  {
    title: 'Жүк ташуу',
    icon: '🚚',
    items: [
      { name: 'Портер (1.5 тонна)', price: '800 сом/саат', note: 'Мин. 2 саат' },
      { name: 'Газель (2 тонна)', price: '1000 сом/саат', note: 'Мин. 2 саат' },
      { name: 'Газель узун (3 тонна)', price: '1200 сом/саат', note: 'Мин. 2 саат' },
      { name: 'Шаар сыртына', price: '+15 сом/км', note: 'Бишкектен тышкары' },
    ],
  },
  {
    title: 'Мусор чыгаруу',
    icon: '🗑️',
    items: [
      { name: 'Портер менен', price: '1500 сом', note: 'Жүктөө кирет' },
      { name: 'Газель менен', price: '2500 сом', note: 'Жүктөө кирет' },
      { name: 'Самосвал (5т)', price: '2500 сом/рейс', note: 'Курулуш таштандылары' },
      { name: 'Самосвал (10т)', price: '4000 сом/рейс', note: 'Курулуш таштандылары' },
    ],
  },
  {
    title: 'Грузчик кызматы',
    icon: '💪',
    items: [
      { name: '1 грузчик', price: '500 сом/саат', note: 'Мин. 2 саат' },
      { name: '2 грузчик', price: '900 сом/саат', note: 'Мин. 2 саат' },
      { name: '3 грузчик', price: '1300 сом/саат', note: 'Мин. 2 саат' },
      { name: 'Пианино/сейф', price: 'Келишим', note: 'Өзүнчө баа' },
    ],
  },
  {
    title: 'Көчүрүү',
    icon: '📦',
    items: [
      { name: '1-бөлмөлүү квартира', price: '3000 сом', note: 'Портер + 2 грузчик' },
      { name: '2-бөлмөлүү квартира', price: '5000 сом', note: 'Газель + 2 грузчик' },
      { name: '3-бөлмөлүү квартира', price: '7000 сом', note: 'Газель + 3 грузчик' },
      { name: 'Офис көчүрүү', price: 'Келишим', note: 'Көлөмүнө жараша' },
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Баалар</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Ачык жана түшүнүктүү баалар. Жашыруун төлөмдөр жок!
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {pricingCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white px-6 py-4 flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-xl font-bold">{category.title}</h2>
                </div>
                <div className="divide-y">
                  {category.items.map((item, i) => (
                    <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.note}</div>
                      </div>
                      <div className="text-green-600 font-bold text-lg">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="font-bold text-yellow-800 mb-4">⚠️ Маанилүү маалымат:</h3>
            <ul className="space-y-2 text-yellow-800">
              <li>• Түнкү убакта (22:00 - 08:00) кызматтар 20% кымбат</li>
              <li>• Шаар сыртына чыгууда км боюнча кошумча төлөм</li>
              <li>• Оор жүктөр (пианино, сейф) үчүн өзүнчө баа</li>
              <li>• Кат боюнча көтөрүү/түшүрүү кошумча акы</li>
              <li>• Бекер консультация алуу үчүн чалыңыз</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Так баа билгиңиз келеби?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Бекер консультация алыңыз. Жүгүңүздүн көлөмүн айтыңыз - так баа айтабыз.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+996555123456"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition"
            >
              📞 +996 555 123 456
            </a>
            <a
              href="https://wa.me/996555123456"
              className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}