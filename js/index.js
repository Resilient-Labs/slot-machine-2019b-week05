//in my game the value system has the ff ratio 
// willow : mediumTree : birch : pine : sapling : seed 
// 500 :     50 :          25 :   10   : 5       : 2 
//total value = 592
//weighted probability for each tree based on value 
const values = [500, 50, 25, 10, 5, 2]; 
//take the inverse so that trees with higher value appear less 
const inverseValues = values.map(el => (1 / el));
// normalize so that total probability adds up to 1
const sum = inverseValues.reduce((accum, curr) => accum + curr); 
const normalized = inverseValues.map(val => val / sum);

const treeProbability = {}; 
const trees = ["willow", "mediumTree", "birch", "pine", "sapling", "seed"];

for (let i = 0; i < trees.length; i++) {
    treeProbability[trees[i]] = normalized[i];
}


 
