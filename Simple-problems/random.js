// function generateRandomNumber(min, max) {
//     console.log(Math.random() * (max - min + 1));
//     console.log(Math.floor(Math.random() * (max - min + 1)));
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   console.log(generateRandomNumber(1,10));


//   function getRandomNumber(max) {
//     return Math.floor(Math.random() * max);
//   }
  
//   var randomNumber = getRandomNumber(10);
//   console.log('Random number between 0 and 10:', randomNumber);
  for(let i=0; i<=10;i++){
    console.log(Math.round(Math.random()*10));
  }