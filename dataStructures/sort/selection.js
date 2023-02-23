const array = [9,5,7,8,10,2,4,6,788,20]

console.log(`Array inicial: ${array}`)

// Método de ordenação selection sort.
const selection = (array)=>{
    let aux=0
    for (let i=0; i<array.length-1; i++) {//(n-1)+1 = n
        for (let j=i+1; j<array.length; j++) {
            if (array[i]>array[j]){
                aux = array[i]
                array[i] = array[j]
                array[j] = aux
            }
        }
    }
}
selection(array)
console.log(`Array inicial: ${array}`)
/*
    No js temos método para ordenação de um array que é o sort, então para ordenar um array com esse método "array.sort" que o array já estaria ordenado
*/
/*
    A ideia do Selection Sort é passar o menor valor do array para primeira posição, depois o segundo menor para segunda posição do array e assim sucessivamente.

    No primeiro for do array acima teremos:
        linha 8- i=0
        linha 9- j=1
        linha 10- arrray[0] > array[1] (No caso sim)
        linha 11- aux = arrray[0]
        linha 12- arrray[0] = arrray[1]
        linha 13- arrray[1] = aux
        j++

        linha 8- i=0
        linha 9- j=2
        linha 10- arrray[0] > array[2]
        j++

        linha 8- i=0
        linha 9- j=3
        linha 10- arrray[0] > array[3]
        j++

        linha 8- i=0
        linha 9- j=4
        linha 10- arrray[0] > array[4]
        j++
    
        Isso ocorre n-1 vezes na primeira interação, na segunda n-2, n-3, n-4, até n-(n-1)
*/