const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let result = 2 + 3;
    if (result === 5) {
      resolve(result);
    } else {
      reject({error: 242, response: "Answer not correct!"});
    }
  }, 10000);
});


const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let result = 2 + 3;
    if (result === 5) {
      
      resolve(async () => 5);
    } else {
      reject({ error: 242, response: "Answer not correct!" });
    }
  }, 5000);
});

// promise.then((ans)=> {
//     console.log('ANS:', ans)

// })

// promise.catch((ans)=>{

//     let Error = {error: 'An error occurred!', response: ans}
//     console.log('Error:', Error)
// })

const handlePromise = async () => {
  try {
    let result = await Promise.race([promise, promise2]);
    console.log("RESULT:", result);
    result().then((result)=> console.log(result))
  } catch (error) {
    console.log("EROR", error);
  }
};

const getResult = ()=>{
    console.log('454')
}


handlePromise();

getResult()
