import { defineType, defineField, defineArrayMember } from 'sanity'
import { CreditCardIcon } from '@sanity/icons'

export const pricingTable = defineType({
  name: 'pricingTable',
  title: 'Баалар таблицасы',
  type: 'object',
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Аталышы',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Кошумча текст',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'pricingItems',
      title: 'Баа пункттары',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'pricing' }],
        }),
      ],
    }),
    defineField({
      name: 'showVehicles',
      title: 'Унааларды көрсөтүү',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'note',
      title: 'Эскертүү',
      type: 'text',
      rows: 2,
      description: 'Баалардын астында көрсөтүлөт',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Баалар таблицасы',
        subtitle: 'Pricing Table',
      }
    },
  },
})