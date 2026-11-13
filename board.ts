const createTable = (value: number): void => {
    let whiteCell: string = '[ ]';
    let blackCell: string = '██';

    for (let i = 0; i < value; i++) {
        let row = '';

        for(let j = 0; j < value; j++) {
            if ((i + j) % 2 === 0) {
                row += whiteCell;
            } else {
                row += blackCell;
            }
        }
        console.log(row);
    }
};

createTable(8);