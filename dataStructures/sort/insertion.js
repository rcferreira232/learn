const array = [9,5,7,8,10,2,4,6,788,20,4,4,7,90]

console.log(`Array inicial: ${array}`)

// Método de ordenação insertion sort.
const insertion = (array) =>{
    let aux=0, i, j;
    for (i = 1; i < array.length; i++) { //O primeiro for começa na posição 1 e vai até n-1 (0,1,2,3,4,5,6,7,8,9) no caso até a posição 9
        aux = array[i] //aux no primeiro loop pega a segunda posição do array que tem index 1
        for (j = i; (j>0)&&(aux<array[j-1]); j--) {
            array[j] = array[j-1]
        }
        array[j] = aux
    }
}
insertion(array)
console.log(`Array ordenado: ${array}`)
