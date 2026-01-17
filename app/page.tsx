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

const vehicles = [
  {
    name: 'Портер',
    capacity: '1.5 тонна',
    dimensions: '2.7м x 1.6м x 1.5м',
    price: '800 сом/саат',
    icon: '🚛',
    features: ['Шаар ичи', 'Тар көчөлөргө кирет', 'Ылдам'],
  },
  {
    name: 'Газель',
    capacity: '2 тонна',
    dimensions: '3м x 2м x 2м',
    price: '1000 сом/саат',
    icon: '🚚',
    features: ['Чоң жүктөр', 'Эмерек ташуу', 'Көлөмдүү'],
  },
  {
    name: 'Самосвал',
    capacity: '5 тонна',
    dimensions: '4м x 2.3м x 0.8м',
    price: '2500 сом/рейс',
    icon: '🚜',
    features: ['Курулуш таштандылары', 'Топурак', 'Өзү төгөт'],
  },
]

const advantages = [
  { icon: '⏰', title: '24/7 иштейбиз', desc: 'Күнү-түнү чалсаңыз болот' },
  { icon: '⚡', title: '30 мүнөттө', desc: 'Тез келебиз' },
  { icon: '💰', title: 'Арзан баа', desc: 'Атаандаштыкка жөндөмдүү' },
  { icon: '✅', title: 'Кепилдик', desc: 'Сапаттуу кызмат' },
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
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-400 transition text-center border-2 border-green-400"
              >
                💬 WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              {advantages.map((item, i) => (
                <span key={i} className="bg-green-700/50 px-4 py-2 rounded-full flex items-center gap-2">
                  <span>{item.icon}</span> {item.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Биздин кызматтар
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Бишкек шаарында мусор чыгаруу, жүк ташуу жана көчүрүү кызматтарын сунуштайбыз
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
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

      {/* Vehicles Section */}
      <section id="vehicles" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Биздин унаалар
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ар кандай жүктөрүңүз үчүн ылайыктуу унаа тандаңыз
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 p-6 rounded-2xl hover:border-green-500 transition"
              >
                <div className="text-6xl mb-4 text-center">{vehicle.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-2">{vehicle.name}</h3>
                <p className="text-green-600 font-bold text-xl text-center mb-4">
                  {vehicle.price}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Сыйымдуулугу:</span>
                    <span className="font-medium">{vehicle.capacity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Өлчөмү:</span>
                    <span className="font-medium">{vehicle.dimensions}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, i) => (
                    <span key={i} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Баалар
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ачык жана түшүнүктүү баалар. Жашыруун төлөмдөр жок!
          </p>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Кызмат</th>
                  <th className="px-6 py-4 text-right">Баасы</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium">Портер (1.5 тонна)</div>
                    <div className="text-sm text-gray-500">Мин. заказ 2 саат</div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-green-600">800 сом/саат</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium">Газель (2 тонна)</div>
                    <div className="text-sm text-gray-500">Мин. заказ 2 саат</div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-green-600">1000 сом/саат</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium">Мусор чыгаруу (Портер)</div>
                    <div className="text-sm text-gray-500">Жүктөө кирет</div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-green-600">1500 сом</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium">Мусор чыгаруу (Газель)</div>
                    <div className="text-sm text-gray-500">Жүктөө кирет</div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-green-600">2500 сом</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium">Самосвал (5 тонна)</div>
                    <div className="text-sm text-gray-500">Курулуш таштандылары</div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-green-600">2500 сом/рейс</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium">Грузчик (1 адам)</div>
                    <div className="text-sm text-gray-500">Жүктөө/түшүрүү</div>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-green-600">500 сом/саат</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-yellow-50 px-6 py-4 text-sm text-yellow-800 border-t">
              ⚠️ Шаар сыртына чыгуу өзүнчө эсептелет. Түн бою 20% кошумча.
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Биз жөнүндө
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Эмне үчүн бизди тандашат?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <div>
                      <strong>5 жылдык тажрыйба</strong>
                      <p className="text-gray-600 text-sm">Бишкекте мусор чыгаруу жана жүк ташуу боюнча</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <div>
                      <strong>Тажрыйбалуу жүктөгүчтөр</strong>
                      <p className="text-gray-600 text-sm">Сынбаган жана тез иштеген команда</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <div>
                      <strong>Өз унааларыбыз</strong>
                      <p className="text-gray-600 text-sm">Портер, Газель, Самосвал - баары бар</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <div>
                      <strong>Ак ниет баалар</strong>
                      <p className="text-gray-600 text-sm">Жашыруун төлөмдөр жок, баары ачык</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-gray-600 mb-6">Ыраазы кардарлар</div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">5+</div>
                      <div className="text-sm text-gray-500">Жылдык тажрыйба</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">10+</div>
                      <div className="text-sm text-gray-500">Унаа</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">24/7</div>
                      <div className="text-sm text-gray-500">Иш убактысы</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">30м</div>
                      <div className="text-sm text-gray-500">Келүү убактысы</div>
                    </div>
                  </div>
                </div>
              </div>
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
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Биз 24/7 иштейбиз. Бекер консультация алыңыз жана заказ бериңиз.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+996555123456"
              className="bg-white text-green-700 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition inline-flex items-center justify-center gap-2"
            >
              <span>📞</span> +996 555 123 456
            </a>
            <a
              href="https://wa.me/996555123456"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition inline-flex items-center justify-center gap-2"
            >
              <span>💬</span> WhatsApp жазуу
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Байланыш
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📞
              </div>
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-gray-400 mb-1">+996 555 123 456</p>
              <p className="text-gray-400">+996 700 123 456</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                💬
              </div>
              <h3 className="text-xl font-bold mb-2">Мессенджерлер</h3>
              <p className="text-gray-400 mb-1">WhatsApp</p>
              <p className="text-gray-400">Telegram: @portertaxi</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📍
              </div>
              <h3 className="text-xl font-bold mb-2">Дарек</h3>
              <p className="text-gray-400 mb-1">Бишкек шаары</p>
              <p className="text-gray-400">Кыргызстан</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            © 2024 Porter Taxi Бишкек. Бардык укуктар корголгон.
          </div>
        </div>
      </section>
    </main>
  )
}