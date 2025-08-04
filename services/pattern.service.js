exports.solidSquare = async ({ number }) => {
    const n = Number(number);
    let square = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            square = square + `*`;
        };
        square += '\n';
    };

    return square.trim().split('\n');
};

exports.hollowSquare = async ({ number }) => {
    const n = Number(number);
    let square = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
                square = square + `*`;
            } else {
                square = square + ` `;
            };
        };
        square = square + '\n';
    };

    return square.trim().split('\n');
};


exports.hollowInvertedHalfPyramid = async ({ number }) => {
    const n = Number(number);
    let pyramid = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (i === 0 || j === 0 || j === n - i - 1) {
                pyramid = pyramid + `*`;
            } else {
                pyramid = pyramid + ` `
            }
        };
        pyramid = pyramid + '\n';
    };
    return pyramid.trim().split('\n');
};


exports.solidPyramid = async ({ number }) => {
    const n = Number(number);
    let pyramid = [];

    for (let i = 0; i < n; i++) {
        let result = '';
        // add white space : 
        for (let j = 0; j < n - i - 1; j++) {
            result = result + ` `;
        }

        // add star :
        for (let j = 0; j < 2 * i + 1; j++) {
            result = result + `*`;
        }
        
        pyramid.push(result);
    };

    return pyramid;
};

exports.hollowPyramid = async ({ number }) => {
    const n = Number(number);
    let pyramid = [];

    for (let i = 0; i < n; i++) {
        let result = '';
        // add white space : 
        for (let j = 0; j < n - i - 1; j++) {
            result = result + ` `;
        }

        // add star :
        for (let j = 0; j < 2 * i + 1; j++) {
            result = result + `*`;
        }


        pyramid.push(result);
    };

    return pyramid;
};