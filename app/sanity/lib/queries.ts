// Кызматтар
export const SERVICES_QUERY = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  slug,
  description,
  icon,
  image,
  basePrice,
  priceUnit,
  isPopular
}`

export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  icon,
  image,
  features[] {
    _key,
    title,
    description,
    icon
  },
  basePrice,
  priceUnit,
  content,
  seo
}`

// Унаалар
export const VEHICLES_QUERY = `*[_type == "vehicle" && isAvailable == true] {
  _id,
  name,
  type,
  image,
  capacity,
  dimensions,
  pricePerHour,
  minOrderHours,
  description
}`

// Баалар
export const PRICING_QUERY = `*[_type == "pricing" && isActive == true] {
  _id,
  title,
  service->{
    _id,
    title,
    slug
  },
  vehicle->{
    _id,
    name,
    type
  },
  priceItems[] {
    _key,
    name,
    price,
    unit,
    note
  },
  notes
}`

// Пикирлер
export const TESTIMONIALS_QUERY = `*[_type == "testimonial" && isPublished == true] | order(date desc) {
  _id,
  author,
  avatar,
  rating,
  text,
  service->{
    _id,
    title
  },
  date
}`

// FAQ
export const FAQ_QUERY = `*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer,
  category
}`

export const FAQ_BY_CATEGORY_QUERY = `*[_type == "faq" && category == $category] | order(order asc) {
  _id,
  question,
  answer,
  category
}`

// Барактар
export const PAGE_BY_SLUG_QUERY = `*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  pageBuilder[] {
    _key,
    _type,
    heading,
    subheading,
    ...
  },
  seo
}`

// Сайт жөндөөлөрү
export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  siteName,
  logo,
  phone,
  additionalPhones,
  whatsapp,
  telegram,
  email,
  address,
  workingHours,
  socialLinks[] {
    _key,
    platform,
    url
  },
  serviceAreas,
  defaultSeo
}`

// Видео
export const VIDEO_BY_CATEGORY_QUERY = `*[_type == "video" && category == $category && isActive == true][0] {
  _id,
  title,
  "videoUrl": videoFile.asset->url,
  "posterUrl": poster.asset->url
}`

// Бардык видеолор категория боюнча
export const VIDEOS_BY_CATEGORY_QUERY = `*[_type == "video" && category == $category && isActive == true] | order(_createdAt asc) {
  _id,
  title,
  "videoUrl": videoFile.asset->url,
  "posterUrl": poster.asset->url
}`

// Бардык активдүү видеолор (башкы бет үчүн)
export const ALL_ACTIVE_VIDEOS_QUERY = `*[_type == "video" && isActive == true] {
  _id,
  title,
  category,
  "videoUrl": videoFile.asset->url,
  "posterUrl": poster.asset->url
}`

// Жумушчулар (категория боюнча)
export const WORKERS_BY_SERVICE_QUERY = `*[_type == "worker" && isActive == true && serviceType == $serviceType] | order(_createdAt desc) {
  _id,
  name,
  "photoUrl": photo.asset->url,
  location,
  experience,
  vehicle,
  priceMin,
  priceMax,
  description,
  phone,
  whatsapp,
  verified
}`

// Бардык активдүү жумушчулар
export const ALL_WORKERS_QUERY = `*[_type == "worker" && isActive == true] | order(_createdAt desc) {
  _id,
  name,
  "photoUrl": photo.asset->url,
  location,
  experience,
  vehicle,
  priceMin,
  priceMax,
  description,
  phone,
  whatsapp,
  verified,
  serviceType
}`