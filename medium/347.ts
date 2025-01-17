/*
Accepted
  Jan 16, 2025
  TypeScript
    Runtime: 6 ms
    Memory: 52.53 MB
*/

function topKFrequent(nums: number[], k: number): number[] {
    return Array.from(nums.reduce((acc, e) => {
        acc.set(e ,(acc.get(e) || 0) + 1);
        return acc;
    }, new Map<number, number>()).entries()).sort((a, b) => b[1] - a[1]).map(e => e[0]).slice(0, k);
};
