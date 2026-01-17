import { defineType, defineField } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const worker = defineType({
  name: 'worker',
  title: 'Жумушчулар',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Аты-жөнү',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Сүрөтү',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'location',
      title: 'Местоположение',
      type: 'string',
      options: {
        list: [
          { title: '── Бишкек ──', value: 'Бишкек' },
          { title: 'Ленинский район', value: 'Бишкек, Ленинский район' },
          { title: 'Октябрьский район', value: 'Бишкек, Октябрьский район' },
          { title: 'Свердловский район', value: 'Бишкек, Свердловский район' },
          { title: 'Первомайский район', value: 'Бишкек, Первомайский район' },
          { title: '── Чуйская область ──', value: 'Чуйская область' },
          { title: 'Аламудунский район', value: 'Бишкек, Аламудунский район' },
          { title: 'Сокулукский район', value: 'Чуй, Сокулукский район' },
          { title: 'Ысык-Атинский район', value: 'Чуй, Ысык-Атинский район' },
          { title: 'Жайылский район', value: 'Чуй, Жайылский район' },
          { title: 'Московский район', value: 'Чуй, Московский район' },
          { title: 'Кеминский район', value: 'Чуй, Кеминский район' },
          { title: '── Города ──', value: '' },
          { title: 'Токмок', value: 'г. Токмок' },
          { title: 'Кант', value: 'г. Кант' },
          { title: 'Кара-Балта', value: 'г. Кара-Балта' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Тажрыйбасы',
      type: 'string',
      placeholder: '5 жыл',
    }),
    defineField({
      name: 'vehicle',
      title: 'Унаасы / Кызматы',
      type: 'string',
      placeholder: 'Портер (1.5 тонна)',
    }),
    defineField({
      name: 'priceMin',
      title: 'Минималдуу баа (сом)',
      type: 'number',
    }),
    defineField({
      name: 'priceMax',
      title: 'Максималдуу баа (сом)',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Сүрөттөмөсү',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'phone',
      title: 'Телефон номери',
      type: 'string',
      placeholder: '+996555123456',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp номери',
      type: 'string',
      placeholder: '996555123456',
      description: 'Плюс белгисиз жазыңыз',
    }),
    defineField({
      name: 'verified',
      title: 'Текшерилген',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Активдүү',
      type: 'boolean',
      initialValue: true,
      description: 'Сайтта көрсөтүү/көрсөтпөө',
    }),
    defineField({
      name: 'serviceType',
      title: 'Кызмат түрү',
      type: 'string',
      options: {
        list: [
          { title: 'Вывоз мусора', value: 'garbage' },
          { title: 'Клининг', value: 'cleaning' },
          { title: 'Свадьба / Той', value: 'marry-me' },
          { title: 'Грузоперевозки по КР', value: 'cargo-kg' },
          { title: 'Няня', value: 'nanny' },
          { title: 'Грузчики', value: 'loaders' },
          { title: 'Демонтаж', value: 'demolition' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'vehicle',
      media: 'photo',
      verified: 'verified',
    },
    prepare({ title, subtitle, media, verified }) {
      return {
        title: verified ? `${title} ✓` : title,
        subtitle: subtitle || '',
        media,
      }
    },
  },
})