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

