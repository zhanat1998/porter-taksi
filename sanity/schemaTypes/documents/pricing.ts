import { defineType, defineField, defineArrayMember } from 'sanity'
import { CreditCardIcon } from '@sanity/icons'

export const pricing = defineType({
  name: 'pricing',
  title: 'Баалар',
  type: 'document',
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Аталышы',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'service',
      title: 'Кызмат',
      type: 'reference',
      to: [{ type: 'service' }],
    }),
    defineField({
      name: 'vehicle',
      title: 'Унаа',
      type: 'reference',
      to: [{ type: 'vehicle' }],
    }),
    defineField({
      name: 'priceItems',
      title: 'Баа тизмеси',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Аталышы',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'price',
              title: 'Баасы (сом)',
              type: 'number',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'unit',
              title: 'Бирдиги',
              type: 'string',
              options: {
                list: [
                  { title: 'саат', value: 'hour' },
                  { title: 'рейс', value: 'trip' },
                  { title: 'тонна', value: 'ton' },
                  { title: 'куб.м', value: 'm3' },
                  { title: 'даана', value: 'piece' },
                ],
              },
            }),
            defineField({
              name: 'note',
              title: 'Эскертүү',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              price: 'price',
              unit: 'unit',
            },
            prepare({ title, price, unit }) {
              return {
                title,
                subtitle: `${price} сом/${unit || ''}`,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'notes',
      title: 'Кошумча маалымат',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'isActive',
      title: 'Активдүү',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      service: 'service.title',
    },
    prepare({ title, service }) {
      return {
        title,
        subtitle: service,
      }
    },
  },
})