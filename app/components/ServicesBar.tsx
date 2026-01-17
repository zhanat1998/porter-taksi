'use client'

import Link from 'next/link'

const services = [
  { name: 'Вывоз мусора', href: '/services/garbage', icon: '🗑️' },
  { name: 'Грузоперевозки', href: '/services/cargo-kg', icon: '🚛' },
  { name: 'Грузчики', href: '/services/loaders', icon: '💪' },
  { name: 'Клининг', href: '/services/cleaning', icon: '🧹' },
  { name: 'Демонтаж', href: '/services/demolition', icon: '🔨' },
  { name: 'Няня', href: '/services/nanny', icon: '👶' },
  { name: 'Свадьба', href: '/services/marry-me', icon: '💍' },
]

export default function ServicesBar() {
  return (
    <div className="hidden lg:block bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition font-medium text-base"
            >
              <span>{service.icon}</span>
              <span>{service.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}