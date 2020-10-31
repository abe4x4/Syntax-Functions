function main(input) {
    checkSameNum(input);
}

function checkSameNum(input) {

    input = String(input);

    let result = true;
    let sum = 0;
    let firstDigit = input[0];

    for (let i = 0; i < input.length; i++) {
        sum += +input[i];

        if (input[i] !== firstDigit) {
            result = false;
        }
    }
    console.log(result);
    console.log(sum);
}
main(2222222);
// true
// 14 
main(1234);
// false
// 10