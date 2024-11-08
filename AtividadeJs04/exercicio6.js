let idade = [16, 48, 23, 22, 45, 8, 12]

let filtro = idade.filter((idade) => {
    return idade <= 18
})
console.log(`Filtro menores de 18 anos: ${filtro}`);
console.log(`----------------------------------------`);

 idade.forEach((idade) => {
    console.log(`Sua idade é: ${idade}`);
})

