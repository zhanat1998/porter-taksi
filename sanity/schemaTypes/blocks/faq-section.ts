import { defineType, defineField, defineArrayMember } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export const faqSection = defineType({
  name: 'faqSection',
  title: 'FAQ секциясы',
  type: 'object',
  icon: HelpCircleIcon,
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
      name: 'faqs',
      title: 'Суроолор',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'faq' }],
        }),
      ],
    }),
    defineField({
      name: 'filterByCategory',
      title: 'Категория боюнча чыпкалоо',
      type: 'string',
      options: {
        list: [
          { title: 'Баары', value: 'all' },
          { title: 'Жалпы', value: 'general' },
          { title: 'Баалар', value: 'pricing' },
          { title: 'Кызматтар', value: 'services' },
          { title: 'Төлөө', value: 'payment' },
          { title: 'Жеткирүү', value: 'delivery' },
        ],
      },
      initialValue: 'all',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'FAQ секциясы',
        subtitle: 'FAQ Section',
      }
    },
  },
})