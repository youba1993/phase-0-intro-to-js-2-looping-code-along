const arrMessages=[];

function writeCards(name, event){    
    for(let i=0;i<name.length;i++){
     arrMessages.push('Thank you, ' +name[i] +', for the wonderful '+event+ ' gift!');     
    } 
    return arrMessages;
}

function countDown(numberPro){
     let i=numberPro;
    while (i>=0){
        console.log(i);
        i--;
    }
    /*for(let i=numberPro;i>=0;i--){
        console.log(i);
    }*/
}
 