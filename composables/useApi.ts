import { useFetch, useRuntimeConfig } from '#imports'

export const useApi: typeof useFetch = (request, options?) => {
  const { public: { API_URL } } = useRuntimeConfig()
  return useFetch(request, { baseURL: API_URL, ...options })
}
