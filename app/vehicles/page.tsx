import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Унаалар | Porter Taxi Бишкек',
  description: 'Портер, Газель, Самосвал - жүк ташуу үчүн ар кандай унаалар. Өлчөмдөрү жана баалары.',
}

const vehicles = [
  {
    name: 'Портер',
    type: 'Жеңил жүктөр үчүн',
    capacity: '1.5 тонна',
    volume: '6 куб.м',
    dimensions: {
      length: '2.7м',
      width: '1.6м',
      height: '1.5м',
    },
    price: '800 сом/саат',
    icon: '🚛',
    features: [
      'Шаар ичинде ыңгайлуу',
      'Тар көчөлөргө кирет',
      'Тез жана мобилдүү',
      'Кичине жүктөр үчүн',
    ],
    bestFor: ['Кичине көчүрүү', 'Бир нече буюм', 'Тар көчөлөр', 'Тез жеткирүү'],
  },
  {
    name: 'Газель',
    type: 'Орто жүктөр үчүн',
    capacity: '2 тонна',
    volume: '12 куб.м',
    dimensions: {
      length: '3м',
      width: '2м',
      height: '2м',
    },
    price: '1000 сом/саат',
    icon: '🚚',
    features: [
      'Чоң жүктөр үчүн',
      'Эмерек ташууга ылайык',
      'Кең жана бийик',
      'Көчүрүү үчүн идеал',
    ],
    bestFor: ['Квартира көчүрүү', 'Эмерек ташуу', 'Чоң жүктөр', 'Техника'],
  },
  {
    name: 'Газель Узун',
    type: 'Чоң жүктөр үчүн',
    capacity: '3 тонна',
    volume: '18 куб.м',
    dimensions: {
      length: '4м',
      width: '2м',
      height: '2.2м',
    },
    price: '1200 сом/саат',
    icon: '🚚',
    features: [
      'Эң чоң жүктөр',
      'Узун буюмдар үчүн',
      'Көп жүк сыят',
      'Бир рейсте көп ташыйт',
    ],
    bestFor: ['Чоң көчүрүү', 'Узун материалдар', 'Офис көчүрүү', 'Көп жүк'],
  },
  {
    name: 'Самосвал 5т',
    type: 'Курулуш таштандылары',
    capacity: '5 тонна',
    volume: '4 куб.м',
    dimensions: {
      length: '4м',
      width: '2.3м',
      height: '0.8м',
    },
    price: '2500 сом/рейс',
    icon: '🚜',
    features: [
      'Өзү төгөт',
      'Оор жүктөр үчүн',
      'Курулуш таштандылары',
      'Топурак ташуу',
    ],
    bestFor: ['Курулуш таштандылары', 'Топурак', 'Кум, шагыл', 'Ремонт калдыктары'],
  },
  {
    name: 'Самосвал 10т',
    type: 'Чоң көлөмдөгү жүктөр',
    capacity: '10 тонна',
    volume: '8 куб.м',
    dimensions: {
      length: '5м',
      width: '2.3м',
      height: '1м',
    },
    price: '4000 сом/рейс',
    icon: '🚜',
    features: [
      'Эң чоң сыйымдуулук',
      'Көп таштанды үчүн',
      'Курулуш объекттери',
      'Бир рейсте көп',
    ],
    bestFor: ['Чоң курулуш', 'Көп таштанды', 'Өндүрүш', 'Коммерциялык'],
  },
]

export default function VehiclesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Биздин унаалар</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Жүгүңүзгө ылайыктуу унаа тандаңыз. Баары жакшы абалда жана таза.
          </p>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-green-500 transition"
              >
                <div className="md:flex">
                  {/* Left - Icon & Basic Info */}
                  <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col items-center justify-center">
                    <div className="text-8xl mb-4">{vehicle.icon}</div>
                    <h2 className="text-2xl font-bold text-center">{vehicle.name}</h2>
                    <p className="text-gray-500 text-center">{vehicle.type}</p>
                    <div className="mt-4 text-3xl font-bold text-green-600">{vehicle.price}</div>
                  </div>

                  {/* Right - Details */}
                  <div className="md:w-2/3 p-8">
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      {/* Specs */}
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">Мүнөздөмөлөр</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Сыйымдуулугу:</span>
                            <span className="font-medium">{vehicle.capacity}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Көлөмү:</span>
                            <span className="font-medium">{vehicle.volume}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Узундугу:</span>
                            <span className="font-medium">{vehicle.dimensions.length}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Туурасы:</span>
                            <span className="font-medium">{vehicle.dimensions.width}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Бийиктиги:</span>
                            <span className="font-medium">{vehicle.dimensions.height}</span>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">Өзгөчөлүктөрү</h3>
                        <ul className="space-y-2">
                          {vehicle.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <span className="text-green-500">✓</span>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Best For */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">Эң жакшы:</h3>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.bestFor.map((item, i) => (
                          <span
                            key={i}
                            className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:+996555123456"
                        className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition text-center"
                      >
                        📞 Заказ берүү
                      </a>
                      <a
                        href="https://wa.me/996555123456"
                        className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition text-center"
                      >
                        💬 WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Choose */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Кайсы унаа керек экенин билбейсизби?</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Чалыңыз - жүгүңүздүн көлөмүн сүрөттөп бериңиз, биз эң ылайыктуу унааны сунуштайбыз.
          </p>
          <a
            href="tel:+996555123456"
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition"
          >
            📞 Бекер консультация
          </a>
        </div>
      </section>
    </main>
  )
}