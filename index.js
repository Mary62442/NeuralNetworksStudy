let math = require('mathjs');

const sigmoid = (t) => {
    return 1/(1+Math.pow(Math.E, -t));
};

const calculateOutput = (input, weight) => {
	let x = math.multiply(input,weight);
    let output = x.map(e => sigmoid(e));
	return output;
};

let input = math.matrix([0.9, 0.1, 0.8]);

let weight = math.matrix([[0.9,0.2,0.1], [0.3,0.8,0.5], [0.4,0.2,0.6]]);

let output = calculateOutput(input, weight);

console.log(output);