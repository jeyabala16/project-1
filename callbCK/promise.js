let promiseObj = new Promise ((resolve,reject) =>{
    console.log("getting value from api");
    setTimeout(()=>{
        resolve("api value  return");
    },3000)


});
console.log (promiseObj);
