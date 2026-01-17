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
          // Главная страница - подкатегории
          { title: '🏠 Главная: Вывоз мусора', value: 'home-garbage' },
          { title: '🏠 Главная: Клининг', value: 'home-cleaning' },
          { title: '🏠 Главная: Предложение руки (Marry Me)', value: 'home-marry-me' },
          { title: '🏠 Главная: Грузоперевозки по КР', value: 'home-cargo-kg' },
          { title: '🏠 Главная: Няня', value: 'home-nanny' },
          { title: '🏠 Главная: Грузчики', value: 'home-loaders' },
          { title: '🏠 Главная: Демонтаж дома', value: 'home-demolition' },
          // Страницы услуг
          { title: '📄 Страница: Вывоз мусора', value: 'page-garbage' },
          { title: '📄 Страница: Клининг', value: 'page-cleaning' },
          { title: '📄 Страница: Грузоперевозки', value: 'page-cargo' },
          { title: '📄 Страница: Переезд', value: 'page-moving' },
          { title: '📄 Страница: Услуги грузчиков', value: 'page-loaders' },
          { title: '📄 Страница: Уборка квартир', value: 'page-home-cleaning' },
          { title: '📄 Страница: Уборка офисов', value: 'page-office-cleaning' },
          { title: '📄 Страница: Уборка после ремонта', value: 'page-after-repair' },
          { title: '📄 Страница: Мойка окон', value: 'page-window-cleaning' },
          { title: '📄 Страница: Чистка мебели', value: 'page-furniture-cleaning' },
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
        // Главная страница
        'home-garbage': '🏠 Главная: Вывоз мусора',
        'home-cleaning': '🏠 Главная: Клининг',
        'home-marry-me': '🏠 Главная: Marry Me',
        'home-cargo-kg': '🏠 Главная: Грузоперевозки по КР',
        'home-nanny': '🏠 Главная: Няня',
        'home-loaders': '🏠 Главная: Грузчики',
        'home-demolition': '🏠 Главная: Демонтаж дома',
        // Страницы услуг
        'page-garbage': '📄 Вывоз мусора',
        'page-cleaning': '📄 Клининг',
        'page-cargo': '📄 Грузоперевозки',
        'page-moving': '📄 Переезд',
        'page-loaders': '📄 Грузчики',
        'page-home-cleaning': '📄 Уборка квартир',
        'page-office-cleaning': '📄 Уборка офисов',
        'page-after-repair': '📄 После ремонта',
        'page-window-cleaning': '📄 Мойка окон',
        'page-furniture-cleaning': '📄 Чистка мебели',
      }
      return {
        title,
        subtitle: categories[category] || category,
        media,
      }
    },
  },
})