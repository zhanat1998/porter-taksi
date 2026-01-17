import { defineType, defineField } from 'sanity'
import { PlayIcon } from '@sanity/icons'

export const video = defineType({
  name: 'video',
  title: 'Видео',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (ID)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'string',
      options: {
        list: [
          { title: 'Главная страница', value: 'home' },
          { title: 'Вывоз мусора', value: 'garbage' },
          { title: 'Грузоперевозки', value: 'cargo' },
          { title: 'Переезд', value: 'moving' },
          { title: 'Услуги грузчиков', value: 'loaders' },
          { title: 'Уборка квартир', value: 'home-cleaning' },
          { title: 'Уборка офисов', value: 'office-cleaning' },
          { title: 'Уборка после ремонта', value: 'after-repair' },
          { title: 'Мойка окон', value: 'window-cleaning' },
          { title: 'Чистка мебели', value: 'furniture-cleaning' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videoFile',
      title: 'Видео файл',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'poster',
      title: 'Постер (картинка)',
      type: 'image',
      description: 'Показывается пока видео загружается',
    }),
    defineField({
      name: 'isActive',
      title: 'Активно',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'poster',
    },
    prepare({ title, category, media }) {
      const categories: Record<string, string> = {
        home: 'Главная',
        garbage: 'Вывоз мусора',
        cargo: 'Грузоперевозки',
        moving: 'Переезд',
        loaders: 'Грузчики',
        'home-cleaning': 'Уборка квартир',
        'office-cleaning': 'Уборка офисов',
        'after-repair': 'После ремонта',
        'window-cleaning': 'Мойка окон',
        'furniture-cleaning': 'Чистка мебели',
      }
      return {
        title,
        subtitle: categories[category] || category,
        media,
      }
    },
  },
})