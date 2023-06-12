let weight = prompt("Weight");
let height = prompt("Height?");
// alert(`Weight: ${weight} and height: ${height}`);
let result = bmiCalculator(weight, height);
// alert(result);
printResult(result);

function bmiCalculator(weight, height) {
    let interpretation = Math.floor(weight/(height*height));
    return interpretation;
};


function printResult (result) {
    if (result<18.5) {
        alert(`Your BMI is ${result}, so you are underweight.`)
    }
    else if (result>18.5 && result<24.9) {
        alert(`Your BMI is ${result}, so you have a normal weight.`)
    }
    else {
        alert(`Your BMI is ${result}, so you are overweight.`)
    }
}
