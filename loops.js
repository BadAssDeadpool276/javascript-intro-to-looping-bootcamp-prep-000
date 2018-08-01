function forLoop(array){
  for(let i=1; i< 26; i++){
    if(i===1){
      array.pop(`"I am ${i} strange loop"`);
    }else{
      array.pop(`"I am ${i} strange loops"`);
    }
  }
}