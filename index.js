//write your code here

const findLongestWord = array =>{
  let maxword = "";
  for(let word of array){
    if(maxword.length < word.length){
      maxword = word
     }
    } 
    // for(let word of array){
    // if(maxword.length <= word.length){
    //   maxword = maxword
    //  }
    // } 
    
    return maxword
  }


console.log(findLongestWord(["helll4","helll8","whats","up"]))