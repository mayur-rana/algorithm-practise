function binarySearch (numList, key) {
    let midIdx = Math.floor(numList.length/2)
    let midVal = numList[midIdx]

    if (midVal === key) return true
    else if (midVal < key && numList.length > 1) {
        return binarySearch(numList.splice(midIdx, numList.length), key)
    }
    else if (midVal > key && numList.length > 1) {
        return binarySearch(numList.splice(0, midIdx), key)
    }
    else return false
}

console.log(binarySearch([2, 3, 6, 9, 14, 15, 20, 31, 34, 35, 37, 39, 44, 48, 52], 39))