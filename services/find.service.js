exports.pariMeterTriangle = async ({ a, b, c }) => {
    const error = {}
    if (isNaN(Number(a))) error.a = 'a is not Number';
    if (isNaN(Number(b))) error.b = 'c is not Number';
    if (isNaN(Number(c))) error.c = 'c is not Number';

    if (Object.keys(error).length > 0) {
        throw {
            status: 400,
            message: `All values must be Numbers`,
            error: error
        };
    };

    // find perimeter of triangle :
    const priMeter = Number(a) + Number(b) + Number(c);
    return priMeter;
};

exports.simpleInterest = async ({ principal, rate, time }) => {
    const error = {};
    if (isNaN(Number(principal))) error.principal = `principal is not Number`;
    if (isNaN(Number(rate))) error.rate = `rate is not Number`;
    if (isNaN(Number(time))) error.time = `time is not Number`;

    if (Object.keys(error).length > 0) {
        throw {
            status: 400,
            message: `All values must be Numbers`,
            error: error
        };
    };

    const si = Number(principal) * Number(rate) * Number(time);
    const simpleInterest = si / 100;
    return simpleInterest;
}


exports.countNtoOne = async ({ number }) => {
    const error = {};
    if (isNaN(Number(number))) error.number = `number is not Number`;

    if (Object.keys(error).length > 0) {
        throw {
            status: 400,
            message: `All values must be Numbers`,
            error: error
        };
    };

    const n = Number(number);
    const result = [];
    for (let i = n; i > 0; i--) {
        result.push(i);
    };
    return result;
};

exports.cheackPrimeNumber = async ({ number }) => {
    const error = {};
    if (isNaN(Number(number))) error.number = `number is not Number`;

    if (Object.keys(error).length > 0) {
        throw {
            status: 400,
            message: `All values must be Numbers`,
            error: error
        };
    };

    const n = Number(number);

    if (n <= 1) {
        return `${n} is not a prime number (must be greater than 1)`
    };

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a prime number (divisible by ${i})`
        };
    };

    return `${n} is a prime number`;
};

exports.triangleValidNot = async ({ a, b, c }) => {
    const error = {};
    if (isNaN(Number(a))) error.a = `a is not Number`;
    if (isNaN(Number(b))) error.b = `b is not Number`;
    if (isNaN(Number(c))) error.c = `c is not Number`;

    if (Object.keys(error).length > 0) {
        throw {
            status: 400,
            message: `All values must be Numbers`,
            error: error
        };
    };

    const x = Number(a);
    const y = Number(b);
    const z = Number(c);

    if (x + y > z && y + z > x && z + x > y) {
        return `Trigale is valid.`
    } else {
        return `Triangle is NOT valid.`
    }
};


exports.factorialNumber = async ({ number }) => {
    const error = {};
    if (isNaN(Number(number))) error.number = `number is not Number`;

    if (Object.keys(error).length > 0) {
        throw {
            status: 400,
            message: `All values must be Numbers`,
            error: error
        };
    };

    const n = Number(number);
    if (n <= 0) {
        throw {
            status: 400,
            message: `Please enter a non-negative number.`
        }
    }

    let factorial = 1n;
    for (let i = BigInt(n); i >= 1n; i--) {
        factorial = factorial * i;
    };
    return factorial.toString();
}


exports.evenOneToN = async ({ number }) => {
    const error = {};
    if (isNaN(Number(number))) error.number = `number is not Number.`;

    if (Object.keys(error).length > 0) {
        throw {
            status: 400,
            message: `All values must be Number.`,
            error: error
        }
    };

    const n = Number(number);
    if (n <= 0) {
        throw {
            status: 400,
            message: `Please enter a non-negative number.`
        }
    }

    const evenNumber = [];

    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            evenNumber.push(i);
        };
    };

    return evenNumber;
};


exports.maximumThreeNumber = async ({ a, b, c }) => {
    const numA = Number(a);
    const numB = Number(b);
    const numC = Number(c);

    let maxnumber = numA;

    if (numB > maxnumber) {
        maxnumber = numB;
    }

    if (numC > maxnumber) {
        maxnumber = numC;
    }

    return maxnumber;
};