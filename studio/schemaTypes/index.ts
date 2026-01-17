// Documents
import { service } from './documents/service'
import { vehicle } from './documents/vehicle'
import { pricing } from './documents/pricing'
import { testimonial } from './documents/testimonial'
import { faq } from './documents/faq'
import { page } from './documents/page'
import { siteSettings } from './documents/siteSettings'

// Objects
import { seo } from './objects/seo'
import { serviceFeature } from './objects/service-feature'
import { link } from './objects/link'

// Blocks
import { hero } from './blocks/hero'
import { servicesGrid } from './blocks/services-grid'
import { pricingTable } from './blocks/pricing-table'
import { testimonialsSection } from './blocks/testimonials-section'
import { faqSection } from './blocks/faq-section'
import { ctaBlock } from './blocks/cta-block'
import { contactSection } from './blocks/contact-section'
import { textBlock } from './blocks/text-block'

export const schemaTypes = [
  // Documents
  service,
  vehicle,
  pricing,
  testimonial,
  faq,
  page,
  siteSettings,

  // Objects
  seo,
  serviceFeature,
  link,

  // Blocks
  hero,
  servicesGrid,
  pricingTable,
  testimonialsSection,
  faqSection,
  ctaBlock,
  contactSection,
  textBlock,
]