/*
Write a JS function that takes three string arguments as an input.
Calculate the sum of the length of the strings and the average length of the strings rounded down to the
nearest integer.
The input comes as three string arguments passed to your function.
The output should be printed on the console on two lines. 
*/
function main(str1, str2, str3){
    let sum = str1.length  + str2.length + str3.length;
    console.log(sum);
    console.log(Math.floor(sum/3));

}
main('chocolate', 'ice cream', 'cake');