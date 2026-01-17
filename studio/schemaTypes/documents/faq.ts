import { defineType, defineField } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export const faq = defineType({
  name: 'faq',
  title: 'Көп берилүүчү суроолор',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'question',
      title: 'Суроо',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Жооп',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'string',
      options: {
        list: [
          { title: 'Жалпы', value: 'general' },
          { title: 'Баалар', value: 'pricing' },
          { title: 'Кызматтар', value: 'services' },
          { title: 'Төлөө', value: 'payment' },
          { title: 'Жеткирүү', value: 'delivery' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'order',
      title: 'Тартип',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Тартип боюнча',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'question',
      category: 'category',
    },
    prepare({ title, category }) {
      const categories: Record<string, string> = {
        general: 'Жалпы',
        pricing: 'Баалар',
        services: 'Кызматтар',
        payment: 'Төлөө',
        delivery: 'Жеткирүү',
      }
      return {
        title,
        subtitle: categories[category] || category,
      }
    },
  },
})