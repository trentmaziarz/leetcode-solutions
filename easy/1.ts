/*
Accepted
  Jan 10, 2025
  TypeScript
    Runtime: 0 ms
    Memory: 53.2 MB
*/

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for(let i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i] , i);
    }
    throw new Error("Nothing adds up")
};
