// Content :- All About JSON 

// In Js we have a Stringify method to convert the JS object to JSON.

const Obj = {
    name: 'rohit',
    rollno: 212
}

console.log(JSON.stringify(Obj)); 
// Output :- {"name":"rohit","rollno":"12"} Info:- Value name is converted from single quote to double quote.


// The below types of js are ignored by the JSON method 
// Function properties (methods).
// Symbolic keys and values.
// Properties that store undefined.

const Obj1 = {
    name:"Raman",
    benchNo: ()=>{
        console.log("Bench No",10);
    }
}

console.log(JSON.stringify(Obj1));
// Output :- {"name":"Raman"} Info:- Function property is ignored by the JSON method.

// If we did circluar refrence within the object then it will throw the error
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };

meetup.place = room;
room.occupiedBy = meetup;
// console.log(JSON.stringify(meetup));
// Output :- Converting circular structure to JSON
    // --> starting at object with constructor 'Object'
    // |     property 'place' -> object with constructor 'Object'
    // --- property 'occupiedBy' closes the circle

// The complete JSON method is :
// let json = JSON.stringify(value[, replacer, space])  
// value: value to be encode
// replacer: function that gets invoked to replace objects
// space: number of spaces to indent each level of the JSON output. If it is omitted,

// Most of the time, JSON.stringify is used with the first argument only.But if we need to fine-tune the replacement process, like to filter out circular references, we can use the second argument of JSON.stringify.
// If we pass an array of properties to it, only these properties will be encoded.

let room1 = {
    number: 23
  };
  
  let meetup1 = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room1 // meetup references room
  };
  
  room1.occupiedBy = meetup1; // room references meetup
  
  console.log( JSON.stringify(meetup1, ['title', 'participants']) );
  // Output :- {"title":"Conference","participants":[{},{}]} 
  // It ignores the all the properties which are not added the list, it is used for fixed conversion,
  // but this will be hard for more nested and complex objects.


  // Insted of this it we can use replacer function , this function get every key/value pair of object event the
  // nested ones, to ignore the any property return undefined on condition check of that property.

  let room2 = {
    number: 23
  };
  
  let meetup2 = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };
  
  room.occupiedBy = meetup; // room references meetup

  console.log(JSON.stringify(meetup2, function replacer(key,value){
    return(key=='occupiedBy'?undefined:value);
  }))
  // Output :- {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}

  // JSON.stringfy also has third optional argument used for indentaion for better output of the JSON objct.
  // e.g :alert(JSON.stringify(user, null, 2));


  // Hack 
  // while conversion with JSON.stringify, it will automatically calls the toString method if avilable even if it is nested object.
  let room4= {
    number: 23,
    toJSON() {
      return this.number;
    }
  };
  
  let meetup4 = {
    title: "Conference",
    room4
  };
  
  alert( JSON.stringify(room4) ); // 23
  
  alert( JSON.stringify(meetup4) );
  /*
  Output:-
    {
      "title":"Conference",
      "room": 23
    }
  */

    // -----------------------------Thank you-----------------------------------------------






