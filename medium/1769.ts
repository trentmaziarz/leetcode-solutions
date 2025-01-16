/*
Accepted
  Jan 6, 2025
  TypeScript
    Runtime: 180 ms
    Memory: 53.4 MB
*/

function minOperations(boxes: string): number[] {
    const arr = new Array<number>(boxes.length).fill(0);

    for(let i = 0; i < boxes.length; i++){
        for(let j = 0; j < boxes.length; j++){
            if(boxes[j] === "1"){
                arr[i] += Math.abs(i - j);
            }
        }
    }

    return arr;
};
