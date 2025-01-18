/*
Accepted
  Jan 17, 2025
  TypeScript
    Runtime: 12 ms
    Memory: 71.27 MB
*/

function doesValidArrayExist(derived: number[]): boolean {
    const n: number = derived.length;
    if (n < 2) return derived[0] === 0;

    const original: number[] = new Array(n);
    original[0] = 0;

    for(let i = 1; i < n; i++){
        original[i] = derived[i - 1] ^ original[i - 1];
    }

    if ((original[n - 1] ^ original[0]) !== derived[n - 1]) {
        return false;
    }

    return true;
};
