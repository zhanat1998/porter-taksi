import { defineType, defineField } from 'sanity'
import { BellIcon } from '@sanity/icons'

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'Чакырык блогу (CTA)',
  type: 'object',
  icon: BellIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Аталышы',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Текст',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Телефон номери',
      type: 'string',
    }),
    defineField({
      name: 'primaryButton',
      title: 'Башкы баскыч',
      type: 'link',
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Кошумча баскыч',
      type: 'link',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Фон сүрөтү',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Фон түсү',
      type: 'string',
      options: {
        list: [
          { title: 'Жашыл', value: 'green' },
          { title: 'Көк', value: 'blue' },
          { title: 'Кара', value: 'dark' },
          { title: 'Ак', value: 'light' },
        ],
      },
      hidden: ({ parent }) => !!parent?.backgroundImage,
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title: title || 'CTA блогу',
        subtitle: 'Call to Action',
        media,
      }
    },
  },
})