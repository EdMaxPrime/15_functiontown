function fibonacci(n) {
    if(n == 0) return 0;
    else if(n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

//greatest common factor
function gcd(a, b) {
    var factor = Math.min(a, b);
    while(a % factor != 0 && b % factor != 0) {
	factor -= 1;
    }
    return factor;
}
