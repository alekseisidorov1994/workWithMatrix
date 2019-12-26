const a = `
    1 2 3
    4 5 6
    7 8 9
    10 11 12

`
class JJ {
    constructor(str) {
        this.body = []
        let row = []
        const arg = (str.trim().replace(/\n/g, ' * ') + ' * ').replace(/\s+/g, ' ').trim().split(' ')
        for (let item of arg) {

            if (item !== '*') {
                row.push(item)
            }else{
                this.body.push(row)
                row = []
            }

        }
    }
    getTranspose(){
        let row=[]
        let mass = this.body
        for(let i=0; i<mass[0].length;i++){
            row[i]=[]
            for(let j=0; j<mass.length;j++){
                    row[i].push(mass[j][i]);
            }
        }
       console.log(row);
    }
}

const j = new JJ(a)
j.getTranspose()
