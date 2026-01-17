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