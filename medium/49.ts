/*
Accepted
  Jan 16, 2025
  TypeScript
    Runtime: 40 ms
    Memory: 62.86 MB
*/



function groupAnagrams(strs: string[]): string[][] {
    return Array.from(strs.reduce((acc, word, i, arr) => {
            const wordSort = word.split("").sort().toString();
            if(acc.has(wordSort)){
                const get = acc.get(wordSort);
                acc.set(wordSort, [...get, word]);
            }else{
                acc.set(wordSort, [word]);
            }
            return acc;
        }, new Map<string, string[]>()).values());
};
