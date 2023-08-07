// Explain what a callback function is and provide a simple example? 

const readFile=(fileName, callback)=>{
    setTimeout(()=>{
        const fileContent= 'This is file Content';
        callback(fileContent);
    },3000)
}
const processFile=(fileContent)=>{
    console.log('After processing file the result is: ',fileContent);
}
readFile('readme.txt',processFile);

const makeApiRequest=(url, callback)=>{
    setTimeout(()=>{
        const data={name:'riast',gender:'m'}
        callback(data);
    },2000)
}
const afterModification=(data)=>{
    console.log('after making api request the modified data is: ',data);
}
makeApiRequest('https://api.test.com/data',afterModification)