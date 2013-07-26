// alert("JavaScript works!");

/* Nathaniel Nicklas
SDI 1307
Project 3*/

/* Story 
There is three close friends who want to go see a metal concert coming to town called "The Mayhem Fest".
Each friend has a very different taste in music. Luckily, for these friends there is something that fits 
into each of their individualized musical pallets. Their names are Marc, Mike, and Nathaniel. The Mayhem
Fest has a total of 26 bands that will be playing live. Marc really is looking forward to Born of Osiris,
while Mike is looking forward to Machine Head, and then Nathaniel really out of all the bands just wants
to see Amon Amarth. Luckily for the three of them each band shares a different scheduled time to perform.
 There was also a band that was signing posters. The band has 5 members and where sitting together at a 
 table taking turns signing posters.Marc, Mike and Nathaniel all took turns giong down the table to meet 
 each band member as they signed the poster then passing it down to the next member */ 


// Variables
var concert = " The Mayhem Fest ",
    friends = [ 
          "Marc",
          "Mike",
          "Nathaniel"
    ],
    numOfBands = 26;

console.log(friends);
console.log("Are going to see" + concert);

    
var friends = [
    "Marc",
    "Mike",
    "Nathaniel"
];

var wants= [
    "to see Born of Osiris",
    "to see Machine Head",
    "to see Amon Amarth"
];

for (var i=0, j=friends.length; i < j;i++) {
	console.log(friends[i] + " can not wait " + wants[i] );
};
 
var arrive = "parking the car",
    walking = " walking in line",
    enter = "finally in ",
    search = " patted down by guard",
    remove = " remove all items that can be used as a weapon";
    
  console.log( arrive + walking + search); {
              if (search = true){ 
              console.log(enter);
              } else {
                 console.log(remove);
                 };
};


                       
var handleData = function (json) {
    for (var i = 0; i < json.band.length; i++){
    var band = json.band[i];
    console.log("name: " + band.name + "stage: " + band.stage + "time: " + band.time);
    };
  };    

handleData(json);

var jsonstring = JSON.stringify(json);
    console.log(jsonstring); 

var recievedjson = JSON.parse(jsonstring);
    console.log(recievedjson);    
	      
var numberOfBands = 26,
    movement =[ 
     " A band has started playing ", 
     " Run from the mosh pit ",
     " Run right ",
     " Run left ",
     " the band has stopped playing "
    ];

var countdown = function(numberOfBands) {
	while (numberOfBands > 0) {
	     console.log(numberOfBands + movement);
	     numberOfBands--;
	        if (numberOfBands > 0) {
	        console.log(numberOfBands + " on to the next!");

	        } else {
	             console.log(concert + " is finally over, what a blast that was! ")
	        }
	        console.log(" ");
	        
	};
	return (numberOfBands);
};
countdown(26);

var returnedNumberOfBands =  countdown(numberOfBands);
    console.log(returnedNumberOfBands);



         
