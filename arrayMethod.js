//map method create new array based on transformation on each items ,it does not modify original array .
//filter method create new array that only includes the element which meet the condition ,it does not modify original array
//find method only return the first matching element ,it's not craete new array , it's simply return first element which statisfied the condition
//slice method craete new array by extracting portion of ariginal array , take two argument fron start to end indices .
const arr = ["gungun","sunali","reshma"]
// console.log(arr.map((frd)=>frd+"anjali"))
// console.log(arr.filter((frd)=>frd!=="sunali"))
// console.log(arr.find((frd)=>frd!=="sunali"))
// console.log(arr.slice(1,3))


function meow (){
    console.log("Meow",'meow')
    }

    meow.animal = "cat"


    var a = {}
    b = {key:"b"}
    c = {key:"c"}

    a[b]  = 100
    a[c]   = 100

    // console.log(a,'{b:100}')

    const bar = function(){ return "yes"}
    const bar1 = new Function('return "func call "')
    // console.log(bar1(),'func call')



    //array sorting , nested looping (array,queue ,stack , graph,tree ),algorithims : bubble sorting
    //sort method : used to sort element in a place , sort element as strings in lexicographics order , not alphabetic 
    // lexicographic = (alphabetic + numbers +symbols ) as strings 
//it is sorting element as string lexographic , lexographic means javasrript sort compare first character of  element 
    const fruitsName = ["guaua ","papaya","banana","apple","singara"]
    const numbers = [4,5,1,10,3,9,2,12]   
   // console.log(fruitsName.sort())   //here is alphabetic sorts    
   // console.log(numbers.sort())   //   why return like that [1,10,12,2,3,4,5,9]  so "10" comes before "2" because it compares the first character.
numbers.sort((a, b) => {
   // console.log(`Comparing ${a} and ${b}`);
    // return a - b;
});

const students = [
    { name: "Khushboo", chemistry: 55, biology: 90, dob: "12-05-2000" },
    { name: "Farzana", chemistry: 50, biology: 95, dob: "15-03-2001" },
    { name: "Anjali", chemistry: 70, biology: 50, dob: "11-02-1999" },
    { name: "Muskan", chemistry: 55, biology: 60, dob: "12-05-2000" },
  ];

//   console.log(students.sort((a,b)=>a.name.localeCompare(b.name)),'based on the name')
// students.sort((a, b) => {
//     console.log(`Comparing ${a.name} with ${b.name}`);
//     if (a.name < b.name) {
        
//         return -1;}
//     if (a.name > b.name){
//         console.log(true,'when this condition meet ')
//         return 1;
//     } 
//     return 0;
// });

// console.log(students);
// console.log(
//     students.sort((a, b) => (b.chemistry + b.biology) - (a.chemistry + a.biology)),
//     'far,kh,mus,an'
//   );
  
// console.log(students.sort((a,b)=>  (b.chemistry+ b.biology)-(a.chemistry+a.biology)),'now working')
students.sort((a,b)=>{
    const studentA = a.chemistry+a.biology
    const studentB = b.chemistry+ b.biology

    if(studentA!==studentB){
    
        return studentB-studentA  //descending order
    }

    if(a.biology!==b.biology){
        return b.biology-a.biology
    }

    if(a.chemistry!==b.chemistry){
        console.warn('chemestory marks is more  ')
        return b.chemistry-a.chemistry
    }
})

console.log(students,'student')
