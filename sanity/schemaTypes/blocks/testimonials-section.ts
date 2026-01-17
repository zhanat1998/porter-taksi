import { defineType, defineField, defineArrayMember } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const testimonialsSection = defineType({
  name: 'testimonialsSection',
  title: 'Пикирлер секциясы',
  type: 'object',
  icon: UsersIcon,
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
      name: 'testimonials',
      title: 'Пикирлер',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'testimonial' }],
        }),
      ],
    }),
    defineField({
      name: 'displayStyle',
      title: 'Көрсөтүү стили',
      type: 'string',
      options: {
        list: [
          { title: 'Слайдер', value: 'slider' },
          { title: 'Тор', value: 'grid' },
        ],
        layout: 'radio',
      },
      initialValue: 'slider',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Пикирлер секциясы',
        subtitle: 'Testimonials',
      }
    },
  },
})