let albums = [
  {
    albumName: "Thriller",
    artist: "Michael Jackson",
    release: { month: 11, day: 30, year: 1982 },
    albumLength: "42:19",
    genre: ["Pop", "Disco", "Funk"],
    tracks: [
      { title: "Wanna Be Startin' Somethin'" },
      { title: "Baby Be Mine" },
      { title: "The Girl Is Mine" },
      { title: "Thriller" },
      { title: "Beat It" },
      { title: "Billie Jean" },
      { title: "Human Nature" },
      { title: "P.Y.T. (Pretty Young Thing)" },
      { title: "The Lady In My Life" },
    ],
  },
];

// Q1
// access the name of the album "Thriller" and assign to "q1"
let q1 = albums.map(function(item){
  return `${item.albumName}`

})


// console.assert(JSON.stringify(q1) == JSON.stringify([2, 3, 4, 5, 6, 7]));
console.assert(q1 == "Thriller");

// Q2
// assign "q2" to the number of titles in the album
let q2 = albums.map(function(item){
  return `${item.tracks.length}`

})

// console.assert(JSON.stringify(q1) == JSON.stringify([2, 3, 4, 5, 6, 7]));
console.assert(q2 == 9);

// Q1
// assign q3 to be the year the album was released
let q3 = albums.map(function(item){
  return `${item.release.year}`

})

// console.assert(JSON.stringify(q1) == JSON.stringify([2, 3, 4, 5, 6, 7]));
console.assert(q3 == 1982);

// Q4
// assign q4 to be the release date of the album formatted as mm/dd/yyyy
let q4= albums.map(function(item){
  return `${item.release.month}/${item.release.day}/${item.release.year}`

})

// console.assert(JSON.stringify(q1) == JSON.stringify([2, 3, 4, 5, 6, 7]));
console.assert(q4 == "11/30/1982");
