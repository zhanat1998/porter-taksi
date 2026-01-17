import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Биз жөнүндө | Porter Taxi Бишкек',
  description: 'Porter Taxi - Бишкекте мусор чыгаруу жана жүк ташуу боюнча 5 жылдан ашык тажрыйба.',
}

const stats = [
  { value: '5+', label: 'Жылдык тажрыйба' },
  { value: '1000+', label: 'Ыраазы кардарлар' },
  { value: '10+', label: 'Унаа' },
  { value: '24/7', label: 'Иш убактысы' },
]

const team = [
  { icon: '👨‍💼', title: 'Тажрыйбалуу айдоочулар', desc: 'Шаарды жакшы билишет, тез жеткиришет' },
  { icon: '💪', title: 'Күчтүү грузчиктер', desc: 'Оор жүктөрдү этияттык менен ташышат' },
  { icon: '📞', title: 'Операторлор', desc: '24/7 байланышта, тез жооп беришет' },
]

const values = [
  {
    icon: '⏰',
    title: 'Убакытты баалайбыз',
    desc: 'Дайыма убагында келебиз. Күтүүгө убакыт жок.',
  },
  {
    icon: '💯',
    title: 'Сапат',
    desc: 'Жүктөрүңүздү этияттык менен ташыйбыз.',
  },
  {
    icon: '💰',
    title: 'Ак ниет баалар',
    desc: 'Жашыруун төлөмдөр жок. Айтылган баа - акыркы баа.',
  },
  {
    icon: '🤝',
    title: 'Ишеним',
    desc: '5 жылдан бери кардарларыбыз бизге ишенишет.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Биз жөнүндө</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Porter Taxi - Бишкекте ишенимдүү жүк ташуу жана мусор чыгаруу кызматы
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-green-50 rounded-2xl">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Биздин тарых</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-4">
                <strong>Porter Taxi</strong> 2019-жылы Бишкекте негизделген. Биз кичинекей компания
                катары баштап, бүгүн шаардагы эң ишенимдүү жүк ташуу жана мусор чыгаруу
                кызматтарынын бирине айландык.
              </p>
              <p className="mb-4">
                Биздин максат - кардарларыбызга тез, сапаттуу жана арзан кызмат көрсөтүү.
                Биз ар бир кардарды баалайбыз жана алардын ыраазычылыгы биз үчүн эң маанилүү.
              </p>
              <p>
                Бүгүнкү күндө биздин командада 10дон ашык тажрыйбалуу адистер иштешет,
                ал эми унаа паркыбызда Портер, Газель жана Самосвал бар. Биз 24/7 иштейбиз
                жана дайыма жардам берүүгө даярбыз!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Биздин баалуулуктар</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Биздин команда</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{member.title}</h3>
                <p className="text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Эмне үчүн бизди тандашат?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Тажрыйба</h3>
                <p className="text-green-100">5 жылдан ашык жүк ташуу тажрыйбасы</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Ишеним</h3>
                <p className="text-green-100">1000+ ыраазы кардар</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Тездик</h3>
                <p className="text-green-100">30 мүнөт ичинде келебиз</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">✓</span>
              <div>
                <h3 className="font-bold mb-1">Баа</h3>
                <p className="text-green-100">Атаандаштыкка жөндөмдүү баалар</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Биз менен иштешкиңиз келеби?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Азыр чалыңыз же WhatsApp жазыңыз. Биз 24/7 байланышта!
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
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}