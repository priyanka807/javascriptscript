//call,bind,apply is a property of object , use to borrow fun  of a ob to the another obj  ,apply : take data in arr from other obj,
//bind : return borrow fun not return the output of borrow fun

//this is a old way to get obj property updata and delete and add
function borrowfun(obj,up){
  obj.priyanka = up  
  console.log(obj.priyanka,'update obj')
console.log('borrow fun from other obj')
}

const obj = {
  kiran:'typea' ,
  mukesh:'typeb',
  priyanka:'typec'


}
borrowfun(obj,'typed')



function borrowfun1(){
   
  }
  borrowfun1(obj,'typed')

//   const stud1 = {
// id:1,
// name:'priyanka',
// address:'delhi',
// pass:function(pass){
//  return console.log(pass,'pass')
// }
//   }

//   stud1.pass('toiletpass')

  const stud1 = {
    id:1,
    name:'priyanka',
    address:'delhi',
   updateaddress:function(up){
     return console.log(up,'up')
    }
      }
    

  stud1.updateaddress('london')
  console.log(stud1,'stud1')

  const stud2 = {
    id:2,
    name:'roshni',
   address:'jharkhand',
   nameupdate:function(upName){
    this.name = upName
   }
}

stud1.updateaddress.apply(stud2,['purani delhi'])

console.log(stud2,'stud2')

const stud3 = {
id:3,
name:'mukesh',
address:'nangloi',

  
  }
stud2.nameupdate.call(stud3,'maksood')
console.log(stud3,'stud3')
  
  