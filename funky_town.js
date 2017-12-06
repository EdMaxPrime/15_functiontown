function fibonacci(n) {
    if(n == 0) return 0;
    else if(n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

//greatest common factor
function gcd(a, b) {
    var factor = Math.min(a, b);
    while(a % factor != 0 || b % factor != 0) {
	factor -= 1;
    }
    return factor;
}

function randomStudent() {
    var list = ["Max", "Maxx", "Maxxx", "Poober", "And Ish"]
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}


console.log("===Fibonacci 0 thru 5");
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log("randomStudent(): " + randomStudent());
console.log("randomStudent(): " + randomStudent());
console.log("randomStudent(): " + randomStudent());
console.log("===Greatest Common Factor");
console.log(gcd(100, 21));
console.log(gcd(21, 100));
console.log(gcd(66,21));
console.log(gcd(33, 11));
console.log(gcd(24, 28));
console.log(gcd(16, 3));
console.log(gcd(5, 5));
