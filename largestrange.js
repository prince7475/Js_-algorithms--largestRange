function largestRange(array){
    let hashTable = {} // Our hash table will hold all numbers we have visted, for example if we have an array that is [4,3,1,2], if we start at 4 and get the range it will be [1,2,3,4]. Now it will be pointless to go to our next number 3 because it is part of 4 range, the range of 3 can not be longer then 4. If you do not understand this, it will be more clear as we go down the code.
    let longestCount = 0 // longestCount will keep track of the longest range we have
    let result = [] // will hold our result but it will keep changing its value if we find a longer range count
    for (num in array){ // we will go through our array and set all the number inside our hastable to be true, this will be bigO(n) for space or memory
        hashTable[num] = true
    }
    for (currentNum in array) { // we will loop again, this time we are going to find our range
        if(hashTable[currentNum]){ // we will check if the current number we are looking for is true in our hashTable, if it is we know that it is not already part of another number's range
            let currentCount = 0 // we will start a current count for this new range we are making
            hashTable[currentNum] = false // and set its value false in our hasharray just incase there is the same number in our array, for that we will get the same result
            let left = --currentNum; // we will have a left and a right
            let right = ++currentNum;
            while (array.indexOf(left) > -1){ // I started with the left, i will keep looping as long as left exist inside my array
                hashTable[left] = false // if left do exist we will want to set its value to false in our has table
                currentCount++ // adding one to our count 
                left --; // and more our "left" left of our array, or the next smallest number from one
            }
            while(array.indexOf(right) > -1 ){ // did the exact same thing for right
                hashTable[right] = false
                currentCount++;
                right ++; // but we will move one up 
            }
            if(currentCount > longestCount){ // now we check of our currentCount is longer the the longestCount, if so we replace longestCount along with result
                longestCount = currentCount;
                result = [++left, --right]
            }
        }
    }
    if (array.length === 1) return [array[0], array[0]] // this is only for array we only one number. the range only be one, example if we are given [1] our range will be [1,1] 
    return result // and finaly return our result
}
exports.largestRange = largestRange