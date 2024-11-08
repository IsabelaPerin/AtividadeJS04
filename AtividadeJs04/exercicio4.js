let numero = [1, 2, 3, 4, 5]

let Novonumero = numero.filter((numero)=>{
    return numero %2 == 0
})

console.log(`Array completo: ${numero}`);
console.log(`Números pares: ${Novonumero}`);

