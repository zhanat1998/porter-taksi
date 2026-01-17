const services = [
  {
    title: 'Мусор чыгаруу',
    description: 'Курулуш таштандылары, эски эмеректер, тиричилик таштандылары',
    icon: '🗑️',
    price: '1500 сом',
  },
  {
    title: 'Жүк ташуу',
    description: 'Портер, Газель менен жүк ташуу кызматы',
    icon: '🚚',
    price: '800 сом/саат',
  },
  {
    title: 'Көчүрүү',
    description: 'Квартира, офис көчүрүү. Жүктөө жана түшүрүү',
    icon: '📦',
    price: '2000 сом',
  },
  {
    title: 'Грузчик кызматы',
    description: 'Жүктөгүчтөр менен жардам. Күчтүү жана тез',
    icon: '💪',
    price: '500 сом/саат',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Porter Taxi - Бишкек
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-100">
              Мусор чыгаруу жана жүк ташуу кызматы
            </p>
            <p className="text-lg mb-8 text-green-100">
              Тез, сапаттуу жана арзан баада. 24/7 иштейбиз!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+996555123456"
                className="bg-white text-green-700 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition text-center"
              >
                📞 +996 555 123 456
              </a>
              <a
                href="https://wa.me/996555123456"
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-400 transition text-center"
              >
                💬 WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-green-700 px-3 py-1 rounded-full">✓ 24/7 иштейбиз</span>
              <span className="bg-green-700 px-3 py-1 rounded-full">✓ Тез жеткирүү</span>
              <span className="bg-green-700 px-3 py-1 rounded-full">✓ Арзан баа</span>
              <span className="bg-green-700 px-3 py-1 rounded-full">✓ Бүт Бишкек</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Биздин кызматтар
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-green-600 font-bold text-lg">
                  {service.price} ден
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Баалар
          </h2>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Кызмат</th>
                  <th className="px-6 py-4 text-right">Баасы</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Портер (1.5 тонна)</td>
                  <td className="px-6 py-4 text-right font-bold">800 сом/саат</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Газель (2 тонна)</td>
                  <td className="px-6 py-4 text-right font-bold">1000 сом/саат</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Мусор чыгаруу (портер)</td>
                  <td className="px-6 py-4 text-right font-bold">1500 сом</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Мусор чыгаруу (газель)</td>
                  <td className="px-6 py-4 text-right font-bold">2500 сом</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Грузчик (1 адам)</td>
                  <td className="px-6 py-4 text-right font-bold">500 сом/саат</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
              * Минималдуу заказ 2 саат. Шаар сыртына чыгуу өзүнчө.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Азыр чалыңыз!
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Биз 24/7 иштейбиз. Тез жана сапаттуу кызмат кылабыз.
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
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition"
            >
              💬 WhatsApp жазуу
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Porter Taxi</h3>
              <p className="text-gray-400">
                Бишкекте мусор чыгаруу жана жүк ташуу кызматы.
                Тез, сапаттуу жана арзан!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Байланыш</h3>
              <p className="text-gray-400 mb-2">📞 +996 555 123 456</p>
              <p className="text-gray-400 mb-2">📞 +996 700 123 456</p>
              <p className="text-gray-400">📍 Бишкек, Кыргызстан</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Иш убактысы</h3>
              <p className="text-gray-400 mb-2">🕐 24/7 иштейбиз</p>
              <p className="text-gray-400">Дүйшөмбү - Жекшемби</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            © 2024 Porter Taxi Бишкек. Бардык укуктар корголгон.
          </div>
        </div>
      </footer>
    </main>
  )
}