import { defineType, defineField, defineArrayMember } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Сайт жөндөөлөрү',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Сайттын аты',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Логотип',
      type: 'image',
    }),
    defineField({
      name: 'phone',
      title: 'Телефон',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'additionalPhones',
      title: 'Кошумча телефондор',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
    }),
    defineField({
      name: 'telegram',
      title: 'Telegram',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Дарек',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'workingHours',
      title: 'Иш убактысы',
      type: 'string',
      description: 'Мисалы: 08:00 - 20:00',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Социалдык тармактар',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Платформа',
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'WhatsApp', value: 'whatsapp' },
                  { title: 'Telegram', value: 'telegram' },
                  { title: 'YouTube', value: 'youtube' },
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'Шилтеме',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Кызмат көрсөтүү аймактары',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Бишкек районлору',
    }),
        defineField({
      name: 'defaultSeo',
      title: 'Демейки SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Сайт жөндөөлөрү',
      }
    },
  },
})