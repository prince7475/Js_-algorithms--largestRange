function largestRange(array){
    let hashTable = {} // Our hash table will hold all numbers we have visted, for example if we have an array that is [4,3,1,2], if we start at 4 and get the range it will be [1,2,3,4]. Now it will be pointless to go to our next number 3 because it is part of 4 range, the range of 3 can not be longer then 4. If you do not understand this, it will be more clear as we go down the code.
    let longestCount = 0 // longestCount will keep track of the longest range we have
    let result = [] // will hold our result but it will keep changing its value if we find a longer range count
    for (num in array){ // we will go through our array and set all the number inside our hastable to be true, this will be bigO(n) for space or memory
        hashTable[num] = true
    }
    for (currentNum in array) {
        if(hashTable[currentNum]){
            let currentCount = 0 
            hashTable[currentNum] = false
            let left = --currentNum;
            let right = ++currentNum;
            while (array.indexOf(left) > -1){
                hashTable[left] = false
                currentCount++
                left --;
            }
            while(array.indexOf(right) > -1 ){
                hashTable[right] = false
                currentCount++;
                right ++;
            }
            if(currentCount > longestCount){
                longestCount = currentCount;
                result = [++left, --right]
            }
        }
    }
    if (array.length === 1) return [array[0], array[0]]
    return result
}
exports.largestRange = largestRange