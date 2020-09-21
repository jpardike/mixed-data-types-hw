/*  

1. Data types
Refresher
So far we have seen:

Strings
Numbers
Booleans
Arrays
Objects
When these datatypes are combined, we get a data structure, for example, an array that contains objects that each contain booleans.

Suppose you are tasked with creating some software, and it is up to you to determine which datatypes and what data structure to use. For each of the following, write which data types you would use to represent the data, and then give a small example of the data structure:

A light switch that can be either on or off.
A user's email address.
A spaceship with a hull, laser blasters, tractor beam, and warp drive.
A list of student names from our class.
A list of student names from our class, each with a location.
A list of student names from our class, each with a location and each with a list of favorite tv shows.

*/

// Boolean
let lightSwitch = true;

// Object with numbers and booleans
const spaceship = {
    hull: 20,
    laserBlasters: 5,
    tractorBeam: true,
    warpDrive: false,
};

// Array with strings
const studentNames = [
    'Josh',
    'Sri',
    'Kyle',
    'Jia',
    'Simone',
];

// Array with objects and strings
const studentLocations = [
    {
        name: 'Josh',
        location: 'Seattle',
    },
    {
        name: 'Sri',
        location: 'USA',
    },
    {
        name: 'Kyle',
        location: 'Seattle',
    },
    {
        name: 'Jia',
        location: 'Seattle',
    },
    {
        name: 'Simone',
        location: 'USA',
    },
];

// Array with objects, strings, and nested arrays 
const studentLocationsFavTV = [
    {
        name: 'Josh',
        location: 'Seattle',
        favoriteTVShows: [
            'Happy Days',
            'X-files',
            'Star Trek',
        ],
    },
    {
        name: 'Sri',
        location: 'USA',
        favoriteTVShows: [
            'Happy Days',
            'X-files',
            'Star Trek',
        ],
    },
    {
        name: 'Kyle',
        location: 'Seattle',
        favoriteTVShows: [
            'Happy Days',
            'X-files',
            'Star Trek',
        ],
    },
    {
        name: 'Jia',
        location: 'Seattle',
        favoriteTVShows: [
            'Happy Days',
            'X-files',
            'Star Trek',
        ],
    },
    {
        name: 'Simone',
        location: 'USA',
        favoriteTVShows: [
            'Happy Days',
            'X-files',
            'Star Trek',
        ],
    },
];

/* 

2. Take it Easy

1. Make an array that holds all of the colors of the rainbow.

2. Write code that will access "blue" from the rainbow array.

3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.

4. Write code that will access your hobby from the object that you just created.


*/

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

console.log(rainbowColors[4]);

const josh = {
    favoriteFood: 'tacos',
    hobby: 'guitar',
    town: 'Seattle',
    favoriteDataType: 'objects',
};

console.log(josh.hobby);

/* 

3. Crazy Object!

Use crazyObject to log the following.

"omg my mouth is burning"
"Pretty pretty prettayyyyy good"
"Swearing at Larry and Jeff"
"Chicken Teriyaki Boyyyyyy"
The object the contains the name funkhauser


*/

const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }

//   "omg my mouth is burning"
  console.log(crazyObject.taco[1].salsa[5]);

//   "Pretty pretty prettayyyyy good"
  console.log(crazyObject.larry.quotes[0]);

//   "Swearing at Larry and Jeff"
  console.log(crazyObject.larry.characters[2].favourtieHobby);

//   "Chicken Teriyaki Boyyyyyy"
  console.log(crazyObject.larry.nicknames[1]);

//   The object the contains the name funkhauser
  console.log(crazyObject.larry.characters[1]);

  /* 
  
  4. Object-ception

    With the following object:
    Change the value of limbo to null.
  
  */

 const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);