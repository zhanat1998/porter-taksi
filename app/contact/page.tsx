import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Байланыш | Porter Taxi Бишкек',
  description: 'Porter Taxi менен байланыш. Телефон, WhatsApp, Telegram. 24/7 иштейбиз!',
}

const contacts = [
  {
    icon: '📞',
    title: 'Телефон',
    items: ['+996 555 123 456', '+996 700 123 456'],
    action: 'tel:+996555123456',
    actionText: 'Чалуу',
    color: 'bg-blue-500',
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    items: ['+996 555 123 456'],
    action: 'https://wa.me/996555123456',
    actionText: 'Жазуу',
    color: 'bg-green-500',
  },
  {
    icon: '✈️',
    title: 'Telegram',
    items: ['@portertaxi'],
    action: 'https://t.me/portertaxi',
    actionText: 'Жазуу',
    color: 'bg-sky-500',
  },
]

const workingAreas = [
  'Бишкек шаары',
  'Чүй областы',
  'Токмок',
  'Кант',
  'Сокулук',
  'Беловодское',
  'Кара-Балта',
  'Шопоков',
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Байланыш</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Биз менен каалаган убакта байланышыңыз. 24/7 иштейбиз!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contacts.map((contact, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
                <div className={`w-20 h-20 ${contact.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-6`}>
                  {contact.icon}
                </div>
                <h2 className="text-xl font-bold mb-4">{contact.title}</h2>
                <div className="space-y-1 mb-6">
                  {contact.items.map((item, j) => (
                    <p key={j} className="text-gray-600 text-lg">{item}</p>
                  ))}
                </div>
                <a
                  href={contact.action}
                  className={`inline-block ${contact.color} text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition`}
                >
                  {contact.actionText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">🕐</span> Иш убактысы
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Дүйшөмбү - Жума</span>
                    <span className="font-bold text-green-600">24 саат</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Ишемби</span>
                    <span className="font-bold text-green-600">24 саат</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Жекшемби</span>
                    <span className="font-bold text-green-600">24 саат</span>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700 font-medium text-center">
                    🌙 Түнкү убакта да иштейбиз!
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">📍</span> Дарек
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <strong className="text-gray-900">Шаар:</strong> Бишкек
                  </p>
                  <p className="text-gray-600">
                    <strong className="text-gray-900">Өлкө:</strong> Кыргызстан
                  </p>
                  <p className="text-gray-600">
                    <strong className="text-gray-900">Кызмат аймагы:</strong> Бишкек жана Чүй областы
                  </p>
                </div>
                <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-700 text-sm">
                    ⚠️ Шаар сыртына чыгууда км боюнча кошумча төлөм
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Кызмат көрсөтүү аймактары</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {workingAreas.map((area, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 px-6 py-3 rounded-full font-medium"
              >
                📍 {area}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6">
            Башка жерлерге да баргыбыз келеби? Чалыңыз - сүйлөшөбүз!
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Азыр заказ бериңиз!</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Бекер консультация. Баа айтабыз жана ылайыктуу убакытты белгилейбиз.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+996555123456"
              className="bg-white text-green-700 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition inline-flex items-center justify-center gap-2"
            >
              <span>📞</span> Чалуу
            </a>
            <a
              href="https://wa.me/996555123456"
              className="border-2 border-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition inline-flex items-center justify-center gap-2"
            >
              <span>💬</span> WhatsApp
            </a>
            <a
              href="https://t.me/portertaxi"
              className="border-2 border-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-500 transition inline-flex items-center justify-center gap-2"
            >
              <span>✈️</span> Telegram
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Көп берилүүчү суроолор</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <details className="bg-white rounded-lg shadow-sm p-6 cursor-pointer">
              <summary className="font-bold">Канча убакытта келесиздер?</summary>
              <p className="mt-4 text-gray-600">Адатта 30-60 мүнөт ичинде келебиз. Шаардын четине 1 саатка чейин кетиши мүмкүн.</p>
            </details>
            <details className="bg-white rounded-lg shadow-sm p-6 cursor-pointer">
              <summary className="font-bold">Төлөө кантип болот?</summary>
              <p className="mt-4 text-gray-600">Накталай төлөй аласыз. Элсом, MBank, О! деньги да кабыл алабыз.</p>
            </details>
            <details className="bg-white rounded-lg shadow-sm p-6 cursor-pointer">
              <summary className="font-bold">Грузчиктер барбы?</summary>
              <p className="mt-4 text-gray-600">Ооба, бизде тажрыйбалуу грузчиктер бар. Өзүнчө заказ кылсаңыз да болот.</p>
            </details>
            <details className="bg-white rounded-lg shadow-sm p-6 cursor-pointer">
              <summary className="font-bold">Түнкү убакта иштейсиздерби?</summary>
              <p className="mt-4 text-gray-600">Ооба, биз 24/7 иштейбиз. Түнкү убакта (22:00-08:00) 20% кошумча акы.</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  )
}