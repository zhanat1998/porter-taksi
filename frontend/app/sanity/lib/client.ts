import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '74d2fdc4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})