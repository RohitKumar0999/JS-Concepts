// Now to Decode the stringified string we have a method in JSON called:
// JSON.parse(str[, reviver]);

// Here str is the string to be parsed
// Optional function(key,value) that will be called for each (key, value) pair and can transform the value.

// Works fine for both normal and nested object in the below exmples:
// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1
// Or for nested objects:

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert( user.friends[1] ); // 1

// The format that we should must follow while writting the handwritten JSON
let json = `{
    name: "John",                     // mistake: property name without quotes
    "surname": 'Smith',               // mistake: single quotes in value (must be double)
    'isAdmin': false                  // mistake: single quotes in key (must be double)
    "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
    "friends": [0,1,2,3]              // here all fine
  }`;

//   Besides, JSON does not support comments. Adding a comment to JSON makes it invalid.

// Now let's understand why and where to use the revive function.

// Suppose if we got the data from server and it oneof key conatins date value.
// We can use the reviver function to convert the date value to the Date object.
// Here is the example:
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);

alert( meetup.date.getDate() ); // Error!

// The value of meetup.date is a string, not a Date object. 
// How could JSON.parse know that it should transform that string into a Date?

// With help of revive function
let newstr = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let newMeetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( newMeetup.date.getDate() ); // now works!
// THis will also works fine for the nested objects also


// -----------------------------Thank you-----------------------------------------------
