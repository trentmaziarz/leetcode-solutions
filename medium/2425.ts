/*
Accepted
  Jan 16, 2025
  TypeScript
    Runtime: 829 ms
    Memory: 67.90 MB
*/

function xorAllNums(nums1: number[], nums2: number[]): number {
    const map = new Map<number, number>();

    return nums1.reduce((acc, e) => {
        if(!map.has(e)){
            map.set(e, nums2.reduce((acc, e2) => (acc ^ (e ^ e2)), 0));
        }
        return acc ^ map.get(e);
    }, 0)};

// Ya so there's a significantly easier way to do this, I just didn't fire that section of my brain ig..
