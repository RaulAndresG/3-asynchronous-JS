/* const { log } = require("console"); */
const fs = require("fs");
const { resolve } = require("path");
const superagent = require('superagent')

const readFilePro = file =>{
    return new Promise((resolve , reject)=>{
        fs.readFile(file,(err , data)=>{
            if (err) reject('I could not find taht file 😢')
            resolve(data);      
        });
    });
};

const writeFilePro = (file , data) =>{
    return new Promise((resolve , reject)=>{
         fs.writeFile(file , data , err =>{
            if (err) reject('Could not write file 😢')
            resolve('success');
         })
    })  
 
}

const getDogPic = async () =>{
    

}
/* readFilePro(`${__dirname}/doggg.txt`)
   .then(data =>{
     console.log(`Breed: ${data}`);
     return  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
     })
    .then(res =>{
      console.log(res.body.message);
      return writeFilePro('dog_img.txt', res.body.message);
    
     })
    .then(()=>{
     console.log('Rondom dog image saved to file!');

     })
    .catch(err =>{
        console.log(err);
     });

 */


   