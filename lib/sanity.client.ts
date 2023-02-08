import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sn1v1t2b' // "pv8y60vp"
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production' // "production"
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2021-11-03' // "2022-11-16"

export const client = createClient({ projectId, dataset, apiVersion })
