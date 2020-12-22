export default function productFilter(filterData, list) {

  const excludeKeys = ["id", "price", "imgUrl"];
  let filteredList = list.filter(item => {
    let matched = true
    Object.keys(item).some(key => {
      if (!excludeKeys.includes(key)) {
        let itemValue = item[key].toString().toLowerCase()
        let filterDataValue = filterData[key].toString().toLowerCase()
        if (!itemValue.includes(filterDataValue)) {
          matched = false
        }
      } else if (key == "price") {
        let min = filterData.min
        let max = filterData.max
        if (min != '' && max == '' && item[key] < min)
          matched = false
        if (min == '' && max != '' && item[key] > max) matched = false
        if (min != '' && max != '' && (item[key] < min || item[key] > max)) matched = false
      }
    })
    if (matched) {
      return item
    }
  })
  console.log(filteredList)
  return (
    filteredList
  )
}