/*
Accepted
NeetCode | LeetCode Equivalent: 271 (Premium Locked)
  Jan 16, 2025
  TypeScript
    Runtime: null ms
    Memory: null MB
*/

/*

This one honestly makes no sense to me, the approved solution involves attaching the length of the stream to the string
adding buffers, etc. Yet I see no explanation why something like this would be invalid?

*/

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, e) => acc.concat(e, "#0#"), '');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {return str.split("#0#").slice(0,-1);}
}
