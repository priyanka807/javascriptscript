
//call,apply,bind : is a object property in js , which is used to borrow the fun from a obj and can use in another obj , apply take data in 
//array ,bind return borrow fun when you invoke it again then return the data .


// const studentInfo = {
//     name:'sunali',
//     father:'rakesh',
//     updatedInfo:function(){
//         return this.father       //without console without passing obj in call and updated value will not print anything
//     }
// }

// studentInfo.updatedInfo.call()

// const studentInfo = {
//     name:'sunali',
//     father:'rakesh',
//     updatedInfo:function(up){
//         return console.log(this.father = up)//with console without passing obj in call it will give undefined 
//     }
// }

// studentInfo.updatedInfo.call(studentInfo)  // fix this passing obj in the call now it will print rakesh
// studentInfo.updatedInfo.call(studentInfo,'rahul')  // for updating ,will pass to updated value beside  and take parameter in first obj


// const studentInfo1 = {
// father:'rajesh'
// }

// studentInfo.updatedInfo.call(studentInfo1,'ram')   //using call method
// studentInfo.updatedInfo.apply(studentInfo1,['ram'])  //using apply method
// studentInfo.updatedInfo.bind(studentInfo1,'ram')()  //using bind method

// console.log(studentInfo1,'1')


// const obj = {
//     value :42,
//     getValue :function(){
//         return console.log(this.value)
//     }
// }

// obj.getValue.call(obj)

// const obj1 ={
//     value:99,
// }
// obj.getValue.call(obj1,'66')