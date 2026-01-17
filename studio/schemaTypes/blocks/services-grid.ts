import { defineType, defineField, defineArrayMember } from 'sanity'
import { ThLargeIcon } from '@sanity/icons'

export const servicesGrid = defineType({
  name: 'servicesGrid',
  title: 'Кызматтар тору',
  type: 'object',
  icon: ThLargeIcon,
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
      name: 'services',
      title: 'Кызматтар',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'service' }],
        }),
      ],
    }),
    defineField({
      name: 'showAllLink',
      title: 'Баарын көрүү шилтемеси',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'columns',
      title: 'Мамычалар саны',
      type: 'number',
      options: {
        list: [2, 3, 4],
      },
      initialValue: 3,
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Кызматтар тору',
        subtitle: 'Services Grid',
      }
    },
  },
})