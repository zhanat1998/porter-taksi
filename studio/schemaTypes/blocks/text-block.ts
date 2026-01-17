import { defineType, defineField } from 'sanity'
import { TextIcon } from '@sanity/icons'

export const textBlock = defineType({
  name: 'textBlock',
  title: 'Текст блогу',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Аталышы',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Мазмуну',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'alignment',
      title: 'Тегиздөө',
      type: 'string',
      options: {
        list: [
          { title: 'Солго', value: 'left' },
          { title: 'Ортого', value: 'center' },
          { title: 'Оңго', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Фон түсү',
      type: 'string',
      options: {
        list: [
          { title: 'Ак', value: 'white' },
          { title: 'Боз', value: 'gray' },
          { title: 'Ачык көк', value: 'light-blue' },
        ],
      },
      initialValue: 'white',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Текст блогу',
        subtitle: 'Text Block',
      }
    },
  },
})