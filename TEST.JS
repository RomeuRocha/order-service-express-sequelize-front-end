/**/

let alunos = [
    {
        id: '1',
        name: 'Romeu'
    },
    {
        id: '2',
        name: 'Tamires'
    },
    {
        id: '3',
        name: 'Manoela'
    }
]

let seach = alunos.find(a => { return a.name === 'Romeu' })

let id = alunos.findIndex(a => { return a.name === 'Tamires' })


console.log(seach)
console.log(id)
