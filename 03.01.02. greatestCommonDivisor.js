function greatestCommonDivisor2Nums(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    console.log(x);
}
main(15, 5); // 5
main(2154, 458); // 2