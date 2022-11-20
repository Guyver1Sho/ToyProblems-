/*write a javascript function to find the first not repeated character*/

let string = window.prompt("Please enter your text"); 
console.log(string);
// let string4 = string.charCodeAt()
// console.log(string4);
let string2 = string.split(''); 
console.log(string2);
let string3 = string2.map(l => l.charCodeAt())
console.log(string3)
let string4 = string3.sort(function(a, b){return a-b});
console.log(string4)

const alphabet = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ]; 

// string4.forEach(myFunction);

// function myFunction(value, index, array) {

// }


///my attempt
// for (let i = 0; i < string4.length; i++) {
//     let item = string4[i];
//     console.log(item);
//     let item2 = item - item[i - 1];
//     console.log(item[i - 1]);
//     console.log(item2);
//     // i = string4.length; break
    
// };

//after looking online 
//NESTED FOR LOOP 
for (let i = 0; i < string4.length; i++) {
    for (let j = 0; j < string4.length; j++)
    {if (i !== j) {
        if (string4[i] === string4[j]) {
            let finish = string4[i];
            let finish3 = finish.toString();
            console.log(finish3);
            let finish2 = String.fromCharCode(finish3);
            console.log(finish2);
            alert ("The first repeated character is " + finish2); 
           
    }
   
   
    }
    break; 
}
   
    // i = string4.length; break
    
};



// {alert(string4[i].fromCharCode(i))}

// for (let i = 0; i < item.length; i++) {

// }


// .charCodeAt(0);
