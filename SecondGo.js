function largestRange(array){
    let hash = {}
    let longestRange = -Infinity
    let result = []
    for (num in array){
        hash[num] = true
    }
    for(let i = 0; i < array.length; i ++){
        let num = array[i]
        let currentRange = 0
        if(hash[num]){
            hash[num]= false
            let left = num - 1 
            let right = num + 1
            while(array.indexOf(left) > -1){
                currentRange ++;
                hash[left] = false
                left--;
            }
            while (array.indexOf(right) > -1){
                currentRange++;
                hash[right]= false
                right++;
            }
            if(currentRange > longestRange){
                longestRange = currentRange
                result = [(left + 1),(right - 1)]
            }
        }
    }
    if (array.length === 1) return [array[0],array[0]]
    return result
    
}

exports.largestRange = largestRange