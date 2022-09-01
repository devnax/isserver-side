export const isServer = typeof window === 'undefined'
export const getWindow = isServer ? {} : window
export const getDocument = isServer ? {} : document