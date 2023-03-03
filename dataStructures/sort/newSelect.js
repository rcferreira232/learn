const array = [9,5,7,8,10,2,4,6,788,20,4]

console.log(`Array inicial: ${array}`)

// Método de ordenação selection sort.
const selection = (array)=>{
    let aux=0
    for (let i=array.length-1; i>=0; i--) {
        for (let j=i-1; j>=0; j--) {
            if (array[i]<array[j]){
                aux = array[i]
                array[i] = array[j]
                array[j] = aux
            }
        }
    }
}
selection(array)
console.log(`Array inicial: ${array}`)