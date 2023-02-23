const array = [9,5,7,8,10,2,4,6,788,20]

console.log(`Array inicial: ${array}`);

// Método de ordenação bubble sort.
const bubble = (array) =>{
    let aux=0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1; j++) { 
            if(array[j]>array[j+1]){
                aux = array[j]
                array[j] = array[j+1]
                array[j+1]=aux
            }
        }
    }
}
/*
    A ideia do Bubble sort é comparar valores sempre em pares. Ele faz isso pegando uma posição "n" qualquer e comprando sempre com "n+1".

    No primeiro loop o array acima teremos:
        linha 8- i=0
        linha 9- j=0
        linha 10- arrray[0] > array[1] (No caso sim)
        linha 11- aux = arrray[0]
        linha 12- arrray[0] = arrray[1]
        linha 13- arrray[1] = aux
    obs: Da linha 11~13 só ocorre a troca de posições se a posião [0] for maior [1].
        linha 8- i=0
        linha 9- j=1
        linha 10- arrray[1] > array[2]

        linha 8- i=0
        linha 9- j=2
        linha 10- arrray[2] > array[3]

        linha 8- i=0
        linha 9- j=3
        linha 10- arrray[3] > array[4]

        Isso ocorre n-1 vezes na primeira interação

        obs: Otimização da linha 9- for(let j= 0;j<array.length-1;j++). Depois do primeiro loop sabemos que o último número será o maior, então não precisamos que for loop chegue nele, deixando a linha 9- for(let j= 0;j<(array.length-i-1);j++)
*/
