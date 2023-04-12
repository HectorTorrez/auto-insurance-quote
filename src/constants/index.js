export const brands = [
  { id: 1, name: 'European' },
  { id: 2, name: 'American' },
  { id: 3, name: 'Asian' }
]

const yearMax = new Date().getFullYear()

export const years = Array.from({ length: 30 }, (v, k) => yearMax - k)

export const plans = [
  { id: 1, name: 'Basic' },
  { id: 2, name: 'Complent' },
]