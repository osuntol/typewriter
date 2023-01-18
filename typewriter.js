const sentence = 'Hello there from lighthouse labs'

typeWriter = (sentence) => {
  let zero = 0
  for (const letter of sentence){

    setTimeout(() => {
     (process.stdout.write(`${letter}`));
    }, zero += 50); 
  }
  
}

typeWriter(sentence)