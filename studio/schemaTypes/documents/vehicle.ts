import { defineType, defineField } from 'sanity'
import { TransferIcon } from '@sanity/icons'

export const vehicle = defineType({
  name: 'vehicle',
  title: 'Унаалар',
  type: 'document',
  icon: TransferIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Унаанын аты',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Түрү',
      type: 'string',
      options: {
        list: [
          { title: 'Газель', value: 'gazel' },
          { title: 'Портер', value: 'porter' },
          { title: 'Самосвал', value: 'dump_truck' },
          { title: 'Контейнеровоз', value: 'container' },
          { title: 'Мусоровоз', value: 'garbage_truck' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Сүрөт',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'capacity',
      title: 'Сыйымдуулугу',
      type: 'string',
      description: 'Мисалы: 1.5 тонна, 3 куб.м',
    }),
    defineField({
      name: 'dimensions',
      title: 'Өлчөмдөрү',
      type: 'object',
      fields: [
        defineField({ name: 'length', title: 'Узундугу (м)', type: 'number' }),
        defineField({ name: 'width', title: 'Туурасы (м)', type: 'number' }),
        defineField({ name: 'height', title: 'Бийиктиги (м)', type: 'number' }),
      ],
    }),
    defineField({
      name: 'pricePerHour',
      title: 'Саатына баасы (сом)',
      type: 'number',
    }),
    defineField({
      name: 'minOrderHours',
      title: 'Минималдуу заказ (саат)',
      type: 'number',
      initialValue: 2,
    }),
    defineField({
      name: 'description',
      title: 'Сүрөттөмө',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'isAvailable',
      title: 'Жеткиликтүү',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      type: 'type',
      media: 'image',
      price: 'pricePerHour',
    },
    prepare({ title, type, media, price }) {
      const typeLabels: Record<string, string> = {
        gazel: 'Газель',
        porter: 'Портер',
        dump_truck: 'Самосвал',
        container: 'Контейнеровоз',
        garbage_truck: 'Мусоровоз',
      }
      return {
        title,
        subtitle: `${typeLabels[type] || type} • ${price} сом/саат`,
        media,
      }
    },
  },
})