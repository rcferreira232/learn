/*
1) Implemente (na Linguagem C) cada uma das funções abaixo. Calcule a complexidade local e
assintótica de cada uma delas:

a) Considere dois números inteiros a (a ≠ 0) e n (n ≥ 1). Faça uma função para calcular S de acordo
com a expressão abaixo:
    S = ∑ i=1 até n de  i/a^i → ∑ i/a^i

b) Considere dois número inteiros e positivos n (n ≥ 1) e m (m ≥ 1). Faça uma função para calcular S de acordo com a expressão abaixo:
    S = ∑ i=1 até n ∑ j=1 até m  de i*j → ∑∑ i*j

c) Considere um número inteiro e positivo n (n > 0). Faça uma função para retornar 1, se n for primo,ou retornar 0, caso contrário.

d) Considere a matriz A=(aij ), i=1,…,n , j=1 ,…,m , de números inteiros. Faça uma função para retornar o que se pede na expressão abaixo:

    Min ∑ i =1 até n Aij
  1<=j<=m

e) Considere a matriz B=(bij ),i=1 ,…,n , j=1 ,…, m , de números inteiros. Faça uma função para retornar o que se pede na expressão abaixo:

    Max ∑ j =1 até m Bij
  1<=i<=n

f) Considere a matriz C=(c i , j ),i , j=1 ,…, n , de números inteiros. Faça uma função para retornar o que se pede na expressão abaixo:

    S=∑ i,j =1 até n Cij
        i<j
*/
#include <stdio.h>
#include <math.h> 

//a) complexidade local: 1+n+1+n+1 = 2n+3 e assintótica: O(n).
int somar(int a, int n){
    int s =0; // 1
    for(int i=1; i<=n; i++){ //n+1
        s+= i/(pow(a,i)); //n
    }
    return s; //1
}
//b) complexidade local: 2nm+2n+3 = e assintótica: O(nm).
int somar2(int n, int m){
    int s =0; //1
    for(int i=1; i<=n; i++){ //n+1
        for (int j = 1; j <= m; j++){ // n*(m+1)
           s += i*j; //n*m
        }
    }
    return s; //1
}
//c) complexidade local: 3n+5 = e assintótica: O(n).
int s3(int n){
    int count =0; //1
    for(int i=1; i<=n; i++){ //n+1
        if(n%i == 0){ //n
            count++; //n
        }
    }
    if(count == 2){ //1
        return 0;  //1
    }   
    else{ //1
        return 1; //1
    } 
}
//d) complexidade local: 2mn+6m+3 e assintótica: O(nm).
int s4(int A[][m]){
    int s, min; //1
    for(int j =0; j<m; j++){ //m+1
        s=0; //m
        for(int i =0; i<n; i++){ //m(n+1)
            s+=A[i][j]; //mn
        }
        if(j==0){ //m
            min = s; //1
        }
        if(s<min){ //m
            min=s; //m-1
        }
    }
    return min; //1
}
//e) complexidade local: 2nm+6n+3 = e assintótica: O(nm).
int s4(int A[][m]){
    int s, max;//1
    for(int i =0; i<n; i++){ //n+1
        s=1 //n
        for(int j =0; j<n; j++){ //n(m+1)
            s*=A[i][j]; //nm
        }
        if(i==0){ //n
            max = s;//1
        }
        if(s>max){//n
            max=s;//n-1
        }
    }
    return max;//1
}

int main(){
    printf("%d", somar(1, 5)); //15
    printf("%d", somar2(2, 5)); //45
    printf("%d", s3(2)); //1
}