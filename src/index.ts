export const isServer = typeof window === 'undefined'
export const getWindow = isServer ? {} : window