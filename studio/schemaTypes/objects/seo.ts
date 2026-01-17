import { defineType, defineField } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: '60 символдон ашпасын',
      validation: (rule) => rule.max(60).warning('60 символдон ашып кетти'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: '160 символдон ашпасын',
      validation: (rule) => rule.max(160).warning('160 символдон ашып кетти'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Социалдык сүрөт',
      type: 'image',
      description: 'Facebook/Twitter үчүн сүрөт (1200x630)',
    }),
    defineField({
      name: 'noIndex',
      title: 'Индекстебөө',
      type: 'boolean',
      description: 'Бул баракты Google издөөдөн жашыруу',
      initialValue: false,
    }),
  ],
})