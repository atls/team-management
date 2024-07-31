import type { GetUniqueItemsType } from './get-unique-items.interfaces.js'

export const getUniqueItems: GetUniqueItemsType = (allDataArray) => {
  const filterKey = 'id'
  const uniqueDataArray = [
    ...new Map(allDataArray.map((allDataItem) => [allDataItem[filterKey], allDataItem])).values(),
  ]
  return uniqueDataArray
}
