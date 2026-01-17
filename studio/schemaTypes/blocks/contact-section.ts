import { defineType, defineField } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const contactSection = defineType({
  name: 'contactSection',
  title: 'Байланыш секциясы',
  type: 'object',
  icon: EnvelopeIcon,
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
      name: 'showMap',
      title: 'Картаны көрсөтүү',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'mapLocation',
      title: 'Карта координаталары',
      type: 'object',
      fields: [
        defineField({ name: 'lat', title: 'Latitude', type: 'number' }),
        defineField({ name: 'lng', title: 'Longitude', type: 'number' }),
      ],
      hidden: ({ parent }) => !parent?.showMap,
    }),
    defineField({
      name: 'showContactForm',
      title: 'Форманы көрсөтүү',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showWorkingHours',
      title: 'Иш убактысын көрсөтүү',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showSocialLinks',
      title: 'Соц. тармактарды көрсөтүү',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Байланыш секциясы',
        subtitle: 'Contact Section',
      }
    },
  },
})