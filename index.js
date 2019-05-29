let math = require('mathjs');

const sigmoid = (t) => {
    return 1 / (1 + Math.pow(Math.E, -t));
};
const calculateLayerOutput = (input, weight) => {
	let x = math.multiply(input,weight);
    let o = x.map(e => sigmoid(e));
	return o;
};

const calculateAllOutputs = (input, weights) => {
    let o = weights.reduce((tot,curr,i) => {
        if (i === 0) {
            let o1 = calculateLayerOutput(input, curr);
            tot.push(o1);
            return tot;
        }
        let oN = calculateLayerOutput(tot[i-1], curr);
        tot.push(oN);
        return tot;
    },[]);
    return o;
};

let input = math.matrix([0.9, 0.1, 0.8]);
let weights = [math.matrix([[0.9,0.2,0.1], [0.3,0.8,0.5], [0.4,0.2,0.6]]), math.matrix([[0.3,0.6,0.8], [0.7,0.5,0.1], [0.5,0.2,0.9]])];
let outputs = calculateAllOutputs(input, weights);

console.log(outputs);