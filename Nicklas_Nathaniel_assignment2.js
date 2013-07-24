alert("JavaScript works!");
consol.log("Added a line of code in my branch.");

/*Nathaniel Nicklas
SDI 1307
Project 2*/

/* Story James has downloaded an application called the "Great Ogg". He then opens the applications to find that 
it is an audio converter. This application allows him to convert any of his many favorite sound files into .ogg
format. He then realizes that he can then replace the newly converted files with any of his device's UI sounds. 
Which means he is now able to customize his device even further. Excited about his discovery he then runs and tells
both his friends Rob and Martin.*/

/* variables
string
number 
array */

var main = "James", 
friends = "Rob , Martin", 
apk = "The Great Ogg",
app = "audio converter" 
files = 5;

// ouptuts
console.log(main);
console.log(friends);
console.log(apk);
console.log(app);
console.log(files);

//Story Code
console.log(main +" has downloaded an application called " + apk);
console.log(" Awesome this application is an " + app);
console.log(" Let's see how this works ");
console.log(' When opened " Welcome to the Great Ogg " I am ready to convert for you! ');

var p = "mp3",
q = "wav",
r = "ogg";

  // Given (p || q) < r
  
    if ((p || q) < r) {
        console.log("The expression is true");
    } else {
         console.log("The expression is false");
    }

console.log("how many files chosen")
console.log(5)

var countdown = function (convertedFiles){ 
   while (convertedFiles > 0) {
      
      console.log(convertedFiles + " File Conversion Completed ");
      console.log(convertedFiles + " Converted Files Left");
      console.log(" Moving On ");
      convertedFiles = convertedFiles - 1;
       
        if (convertedFiles > 0) {
        console.log(convertedFiles + "File Conversion Completed");
        } else {
            console.log("All Files Have Been Converted"); 
        }
        console.log(" ");
   
   
    }


}
countdown(5);

var apk =" The Great Ogg"
var friend1 = "James", 
friend2 = "Rob",
friend3 = "Martin"
;

var friends = [ "James",
"Rob",
"Martin"
];

console.log (friends);
console.log (friends[0] + " says hey guys ");
console.log (friends [1]);
console.log (friends [2] + " Check out this new application I found " ); 
console.log (friends [1]);
console.log (friends [2] + " Wow that application is awesome");
console.log (friends [0] + " Yea, it's great it is called" + apk);
