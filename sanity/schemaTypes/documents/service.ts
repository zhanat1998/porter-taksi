import { defineType, defineField } from 'sanity'
import { PackageIcon } from '@sanity/icons'

export const service = defineType({
  name: 'service',
  title: 'Кызматтар',
  type: 'document',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Аталышы',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Кыскача сүрөттөмө',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Иконка',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image',
      title: 'Сүрөт',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'features',
      title: 'Өзгөчөлүктөрү',
      type: 'array',
      of: [{ type: 'serviceFeature' }],
    }),
    defineField({
      name: 'basePrice',
      title: 'Баштапкы баа (сом)',
      type: 'number',
    }),
    defineField({
      name: 'priceUnit',
      title: 'Баа бирдиги',
      type: 'string',
      options: {
        list: [
          { title: 'Саат', value: 'hour' },
          { title: 'Рейс', value: 'trip' },
          { title: 'Тонна', value: 'ton' },
          { title: 'Куб метр', value: 'm3' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'isPopular',
      title: 'Популярдуу кызмат',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Тартип',
      type: 'number',
      description: 'Тизмеде көрсөтүү тартиби',
    }),
    defineField({
      name: 'content',
      title: 'Толук мазмуну',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
      price: 'basePrice',
    },
    prepare({ title, media, price }) {
      return {
        title,
        subtitle: price ? `${price} сом` : '',
        media,
      }
    },
  },
})