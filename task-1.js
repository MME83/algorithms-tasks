let max_Root = 0;

const chooseDistance = (t, k, ls) => {
    // твій код

    //let max_Root = 0;
    if (t < 0 || k < 1) {
        return 'incorrect data of t or k';
    }

    let data = new Array(k);

    console.log('\n Print all combinations of k elements in an array ls')
 
    combinationUtil(t, ls, data, k);

    return max_Root === 0 ? null : max_Root;
};

function combinationUtil(t, arr, data, r, start = 0, end = arr.length - 1, index = 0) {

    let comb = [];
    let max_Ellement = 0;
    
    if (index == r) {
        for (let j=0; j<r; j++) {
            comb.push(data[j]);
        }

        max_Ellement = comb.reduce(function(a, b){return a+b;});

        if (t >= max_Ellement && max_Root < max_Ellement) {
            max_Root = max_Ellement;
        }

        console.log('\n', `Sum of (${comb}) = ${max_Ellement}`);
    }
         
    for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
        data[index] = arr[i];

        combinationUtil(t, arr, data, r, i + 1, end, index + 1);
    }
};
     
const root = chooseDistance(55, 3, [1, 51, 3, 12, 13, 19]);

console.log('\n----------------------->');
console.log(`Best distance: ${root}`);
console.log('----------------------->');
