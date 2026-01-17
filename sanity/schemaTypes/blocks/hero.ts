import { defineType, defineField } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'

export const hero = defineType({
  name: 'hero',
  title: 'Hero секция',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Башкы аталыш',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Кошумча текст',
      type: 'text',
      rows: 2,
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
      name: 'phoneNumber',
      title: 'Телефон номери',
      type: 'string',
      description: 'Чоң көрсөтүлүүчү номер',
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
      name: 'features',
      title: 'Кыска артыкчылыктар',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Мисалы: "24/7 иштейбиз", "Тез жеткирүү"',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Hero секция',
        subtitle: 'Hero блок',
        media,
      }
    },
  },
})