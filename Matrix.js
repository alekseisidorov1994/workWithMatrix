module.exports = class Matrix {
    constructor(str = '') {
        this.body = []
        const args = str
            .trim()
            .replace(/\n/g, " | ")
            .replace(/\s+/g, ' ')
            .split(' ')
        let row = []
        for (const item of args) {
            if (item === '|') {
                this.body.push(row)
                row = []
            } else {
                const number = parseInt(item)
                row.push(number)
            }
        }
        this.body.push(row)
    }
    static create(...args) {
        return new Matrix(...args)
    }

    getClone() {
        const clone = Matrix.create()
        clone.body = JSON.parse(JSON.stringify(this.body))
        return clone
    }


    static getSum(a, b) {
        const c = a.getClone()
        for (let y = 0; y < c.body.length; y++) {

            for (let x = 0; x < c.body[y].length; x++) {
                c.body[y][x] += b.body[y][x]
            }
        }
        return c

    }
    static getTranspose(matrix) {

        const m = matrix.getClone()
        let row = []
        for (let i = 0; i < m.body[0].length; i++) {
            row[i] = []
            for (let j = 0; j < m.body.length; j++) {
                row[i].push(m.body[j][i]);
            }
        }
        m.body = row
        return m;
    }
    static getMulti(a, b) {
        const c = a.getClone()

        if (c.body[0].length !== b.body.length) {
            console.warn('ss');
            return false
        }

        const rowsA = c.body.length,

            rowsB = b.body.length,
            colsB = b.body[0].length,
            arg = [];

        for (let i = 0; i < rowsA; i++) arg[i] = [];
        for (let k = 0; k < colsB; k++) {
            for (let i = 0; i < rowsA; i++) {
                let t = 0;
                for (let j = 0; j < rowsB; j++) t += c.body[i][j] * b.body[j][k];
                arg[i][k] = t;
            }
        }
        c.body = arg
        return c

    }
}