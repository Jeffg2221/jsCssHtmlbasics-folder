const nums = [2,7,11,15]
const target = 9

var twoSum = function(nums, target) {
    let sum = []

    for( let i = 0; i < nums.length; i++){
        for( let j = i + 1; j < nums.length; j++){
            if( nums[i] + nums[j] === target){
                sum.push(i,j)
                return sum

            }

        }
    }
    return sum
};

console.log(twoSum())