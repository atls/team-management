export const getUniqueItems = (allDataArray) => {
  const filterKey = 'id'
  const uniqueDataArray = [
    ...new Map(allDataArray.map((allDataItem) => [allDataItem[filterKey], allDataItem])).values(),
  ]
  return uniqueDataArray
}
