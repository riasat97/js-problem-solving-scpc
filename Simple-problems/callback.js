function readFile(fileName,callback){
    setTimeout(()=>{
        const fileContent= 'this is file content';
        callback(fileContent);
    },2000)
}
const processFile=(content)=>{
    console.log('after processing file, the content is: ',content);
}
readFile('read.text',processFile);

function makingApiRequest(url,callback){
    setTimeout(()=>{
        const data={name:'riasat',gender: 'male'};
        callback(data);
    },1000)
}
const manipulateData=(data)=>{
    console.log('after manipulating data, the result is: ',data);
}
makingApiRequest('https://api.test.com/data',manipulateData);