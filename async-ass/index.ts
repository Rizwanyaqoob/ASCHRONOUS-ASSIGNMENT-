
  /////       ASSSIGNMENT 

//  / //       ASYNCHRONOUS && PROMISES     




//   <<<<<<< ASSIGNMENT 1
//     SIMPLE ASCYNCROUNUS FUNCTION

// async function fatchgreeting(){
//     return new Promise((resolve)=>{
// setTimeout(()=>{
//     resolve("hello !!!  how aere you? , Rizwan ")
// },2000)
//     })
// }


//   <<<<<<< ASSIGNMENT 2


// <<<<<<<<<<<<<<<  
//    SIMULATE TASK

// function simulateTask(){
//     console.log("Task Started");
//     setTimeout(() => {
//         console.log("CONGRATULATION : TASK COMPLETED !! ");
        
//     },1000)
    
// }
// simulateTask()


// <<<<<<<<>>>>>>>>>>>>. //   <<<<<<< ASSIGNMENT 3

// function fetchdata (){
//     return new Promise((resolve=>{
       

//         setTimeout(()=>{
//         console.log("Data fetch sucessfully");
        
//             resolve("")
//         },1000)
//     }))
// }
// fetchdata()

//><<<<<<<<<<<<<<<<<<  ASSIGNMENT 4

// function fetchwitherror(){
// return new Promise((resolve,reject)=>{

// setTimeout(()=>{
//     resolve("")
// })
// })
// }
// fetchwitherror().then(()=>{
//     console.log("fatch data sucessfully");
// })
// .catch(()=>{
//     console.log("data fetch failed");
    
// })



// <<<<<<<<<<<<<<< // ASSIGNMENT 5  
// function executesequentially(){
// fetchdata()
// .then(data => (processdata))
// .then(result =>console.log(result)
// )
// }
// function fetchdata(){
// return new Promise((resolve)=>{
// setTimeout(()=>{
//     console.log("will My Data fetch sucessfully");
//     resolve("")
//     processdata()
// },1000)
// })
// }
// function processdata(){
// return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log("your data is in process ");
//     resolve("")
// },2000)
// })
// }
// executesequentially()