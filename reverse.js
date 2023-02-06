function reverseMaker (word){
    let revers = '';
    for (let i = word.length - 1; i >= 0; i--) {
      const eliment = word[i];
      revers = revers + eliment;
    }
    return revers;
  };

 console.log( reverseMaker("hello"));