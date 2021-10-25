// const getMessage = (callback) => {
//     setTimeout(() => {
//         callback("helloworld");
//         console.log()
//     },0);

// }

// const printMsg = (msg) => {
//     console.log(msg);
// }

// getMessage(printMsg);


// function getUserName(){
//     //getAge
//     return new Promise(
//         (resolve, reject) => {
//             resolve({ name: "azhar" });
//         }
//     )
//     // callback({ name: "azhar" }, getDepartment);
// }

// function getAge(data){
//     //getdepartment
//       return new Promise((resolve, reject) => {
//         resolve({...data, age: '25'});
//       });
// }
// function getDepartment(data){
//     //getEmployeecode
//      return new Promise((resolve, reject) => {
//        resolve({ ...data, department: "app dev" });
//      });
// }
// function getEmployeeCode(data){
//     //printdata
//     return new Promise((resolve, reject) => {
//       resolve({ ...data, employeeCode: "550" });
//     });
// }
// function printData(data){
//     console.log(data);
// }

// getUserName()
//   .then(getAge)
//   .then(getDepartment)
//   .then(getEmployeeCode)
//   .then(printData);

function getMessage() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
          console.log("Hello Universe")//2
        resolve("hello world");
      }, 1000);
    });
  }
  
  async function printMsg() {
    console.log("Res1"); //3
  
  getMessage().then(
      data => {
          console.log("Res", data);
      }
  )
    console.log("Res2"); //3
    console.log("Res3");
  }
  
  function sample() {
    printMsg();
    //showMsg();
    console.log("Hello world 2");//1
  }
  
  sample();
  
  
  
  
  // function promiseExp () {
  //     return new Promise(
  //         (resolve, reject) => {
  //             resolve(true);
  //         }
  //     )
  // }
  
  // promiseExp()
  // .then((data) => {
  //     console.log("Data", data);
  // })
  
  
  
  
  
  
  
  
  
  // function getUsername(callback){
  //     //getAge
  //     callback({name: "azhar"}, getDepartment);
  // }
  
  // function getAge(data, callback){
  
  //     //
  //     data = {...data, age: "25"};
  //     callback(data, getEmployeeCode);
  
  // }
  
  // function getDepartment(data, callback){
  //     data = {...data, department: "app dev"};
  //     callback(data, getEmployeeCode);
  // }
  
  // function getEmployeeCode(data, callback){
  //     data = {...data, employeeCode: '550'};
  //     callback(data, printData);
  // }
  
  // function printData(data){
  //     console.log(data)
  // }
  
  // getUsername(getAge);
  
  // function getUsername(){
  //     return new Promise(
  //         (resolve, reject) => {
  //             resolve ({ name: "azhar" });
  //         }
  //     )
  //     //getAge
  // }
  
  // function getAge(data){
  //      return new Promise((resolve, reject) => {
  //        resolve({ ...data, age: "25" });
  //      });
  // }
  
  // function getDepartment(data){
  //     return new Promise((resolve, reject) => {
  //       resolve({...data, department: "app dev"});
  //     });
  // }
  
  // function getEmployeeCode(data){
  //       return new Promise((resolve, reject) => {
  //         resolve({...data, employeeCode: '550'});
  //       });
  // }
  
  // function printData(data){
  //     console.log(data)
  // }
  
  // getUsername()
  //   .then(getAge)
  //   .then(getDepartment)
  //   .then(getEmployeeCode)
  //   .then(printData);
  