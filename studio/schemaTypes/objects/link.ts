import { defineType, defineField } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const link = defineType({
  name: 'link',
  title: 'Шилтеме',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Текст',
      type: 'string',
    }),
    defineField({
      name: 'linkType',
      title: 'Шилтеме түрү',
      type: 'string',
      options: {
        list: [
          { title: 'Ички барак', value: 'internal' },
          { title: 'Тышкы шилтеме', value: 'external' },
          { title: 'Телефон', value: 'phone' },
          { title: 'Email', value: 'email' },
          { title: 'WhatsApp', value: 'whatsapp' },
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'internalLink',
      title: 'Ички барак',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'service' }],
      hidden: ({ parent }) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'externalUrl',
      title: 'Тышкы URL',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'external',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Телефон номери',
      type: 'string',
      hidden: ({ parent }) => parent?.linkType !== 'phone' && parent?.linkType !== 'whatsapp',
    }),
    defineField({
      name: 'emailAddress',
      title: 'Email дареги',
      type: 'string',
      hidden: ({ parent }) => parent?.linkType !== 'email',
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Жаңы терезеде ачуу',
      type: 'boolean',
      initialValue: false,
      hidden: ({ parent }) => parent?.linkType !== 'external',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      linkType: 'linkType',
    },
    prepare({ title, linkType }) {
      const types: Record<string, string> = {
        internal: 'Ички',
        external: 'Тышкы',
        phone: 'Телефон',
        email: 'Email',
        whatsapp: 'WhatsApp',
      }
      return {
        title: title || 'Шилтеме',
        subtitle: types[linkType] || linkType,
      }
    },
  },
})