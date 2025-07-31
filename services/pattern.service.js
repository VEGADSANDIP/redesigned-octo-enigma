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