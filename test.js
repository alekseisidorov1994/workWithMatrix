const should = require('should')
const matrix = require('./Matrix.js')

describe('Testing class Matrix', () => {
    it("create Matrix", () => {
        const a = new matrix(`
            1 2 3
            3 2 1
            8 8 2
        `)

        a.body.should.be.eql([
            [1, 2, 3],
            [3, 2, 1],
            [8, 8, 2]
        ])

        const b = new matrix(`
            3 0 0
            3 2 0
            8 0 11
        `)

        b.body.should.be.eql([
            [3, 0, 0],
            [3, 2, 0],
            [8, 0, 11]
        ])
    })

    it('Sum of Matrixes. getSum', () => {
        const a = new matrix(`
            1 2 3
            3 2 1
            8 8 2
        `)
        const b = new matrix(`
            3 2 1
            0 9 8
            7 6 0
        `)
        const c = matrix.getSum(a, b)

        c.body.should.be.eql([
            [4, 4, 4],
            [3, 11, 9],
            [15, 14, 2]
        ])

    })
    it('Transpose of Matrixes. getTranspose', () => {
        const a = new matrix(`
            1 2 3
            4 5 6
            7 8 9
            10 11 12
        `)

        const c = matrix.getTranspose(a)

        c.body.should.be.eql([
            [1, 4, 7, 10],
            [2, 5, 8, 11],
            [3, 6, 9, 12]
        ])

        const b = new matrix(`
        0 0 0
        0 0 0
        11 12 13
        14 15 16
        1 1 1
    `)

        const c1 = matrix.getTranspose(b)

        c1.body.should.be.eql([
            [0, 0, 11, 14, 1],
            [0, 0, 12, 15, 1],
            [0, 0, 13, 16, 1]
        ])


    })
    it('Matrix multiplication', () => {
        const a = new matrix(`
        0 1 3
        4 0 6
        7 8 0
    `)
        const b = new matrix(`
        1 2 3
        4 1 6
        7 8 1
    `)
        const c = matrix.getMulti(a, b)

        c.body.should.be.eql([
            [25, 25, 9],
            [46, 56, 18],
            [39, 22, 69]
        ])

    })
})