import { defineType, defineField } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Пикирлер',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'author',
      title: 'Автор',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Сүрөт',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'rating',
      title: 'Баалоо',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5],
      },
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: 'text',
      title: 'Пикир тексти',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'service',
      title: 'Кызмат',
      type: 'reference',
      to: [{ type: 'service' }],
    }),
    defineField({
      name: 'date',
      title: 'Күнү',
      type: 'date',
    }),
    defineField({
      name: 'isPublished',
      title: 'Жарыяланган',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'author',
      rating: 'rating',
      media: 'avatar',
      text: 'text',
    },
    prepare({ title, rating, media, text }) {
      const stars = '★'.repeat(rating || 0) + '☆'.repeat(5 - (rating || 0))
      return {
        title,
        subtitle: `${stars} - ${text?.slice(0, 50)}...`,
        media,
      }
    },
  },
})