// JSON stringifies selected object properties
export const stringifyData = (
  data: Record<string, unknown>,
  properties: string[] = []
): Record<string, unknown> => {
  const obj = { ...data }
  Object.keys(obj).forEach(function (key) {
    obj[key] = properties.includes(key) ? JSON.stringify(obj[key]) : obj[key]
  })

  return obj
}
