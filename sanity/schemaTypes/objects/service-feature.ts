import { defineType, defineField } from 'sanity'

export const serviceFeature = defineType({
  name: 'serviceFeature',
  title: 'Кызматтын өзгөчөлүгү',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Аталышы',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Сүрөттөмө',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'icon',
      title: 'Иконка',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
})