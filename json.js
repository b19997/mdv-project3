// json data


var json = {
	     "band":[ 
	     {
	          "name": "Born of Osiris",
	          "stage": 1,
	          "time": "11:30"
	          },
	        {
	         "name": "Machine Head",
	         "stage": 2,
	         "time": "12:00"
	         },
	    {
	         "name": "Amon Amarth",
	         "stage": "Main",
	         "time": "1:00"
	     } 
     
     ]
};
for (var key in json.band) {
     var band = json.band[key];
};