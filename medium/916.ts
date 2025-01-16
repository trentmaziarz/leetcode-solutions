/*
Accepted
  Jan 9, 2025
  TypeScript
    Runtime: 137 ms
    Memory: 70.2 MB
*/

function wordSubsets(words1: string[], words2: string[]): string[] {
    const freq = new Map<string, number>();

    words2.forEach(word => {
        const localFreq = new Map<string, number>();
        for(let i = 0; i < word.length; i++) {
            const curr = word[i];
            localFreq.set(curr, (localFreq.get(curr) || 0) + 1);
        }
        localFreq.forEach((count, char) => {
            freq.set(char, Math.max(freq.get(char) || 0, count));
        });
    });

    return words1.filter(word => {
        const freq2 = new Map<string, number>();

        for(let i = 0; i < word.length; i++) {
            const curr = word[i];
            if(freq.has(curr)) {
                freq2.set(curr, (freq2.get(curr) || 0) + 1);
            }
        }
        return Array.from(freq.entries()).every(([char, count]) => (freq2.get(char) || 0) >= count);
    });
}
