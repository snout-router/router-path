export const GETTING_STARTED_ID = 'snout-router-path-getting-started-t56te'
export const GETTING_STARTED_URL = buildUrl(GETTING_STARTED_ID)

function buildUrl (id) {
  const url = new URL('https://codesandbox.io/')
  url.pathname = `/s/${id}`

  return url.toString()
}
