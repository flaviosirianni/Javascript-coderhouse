// Desafio 3 - Flavio Sirianni

var dias = [1,2,3,4,5,6,7];

for(let i = 0;i<dias.length;i++){
    if(dias[i]==7){
        alert("Llegamos al Domingo");
        break;
    }else if(dias[i]%2 == 0){
        console.log(dias[i], ' es Par');
        }
}

