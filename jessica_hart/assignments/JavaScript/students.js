var students = [ // Given array of objects
  {first_name:  'Michael', last_name : 'Jordan'},
  {first_name : 'John', last_name : 'Rosales'},
  {first_name : 'Mark', last_name : 'Guillen'},
  {first_name : 'KB', last_name : 'Tonel'}
]

var len = students.length;
for (var i = 0; i < len; i++) {
  console.log(students[i].first_name, students[i].last_name);
}

var users = { // Given dictionary
  'Students': [
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
  ],
  'Instructors': [
    {first_name : 'Michael', last_name : 'Choi'},
    {first_name : 'Martin', last_name : 'Puryear'}
  ]
}

len = users.Students.length;
var len2;
var name;
console.log("\nStudents")
// console.log(Object.keys(users)[0]); // Get key name 'Students'
for (var i = 0; i < len; i++) {
  name = users.Students[i].first_name + " " + users.Students[i].last_name;
  len2 = name.length-1; // Subtract space, must calculate before log
  console.log(i+1 + " - " + name.toUpperCase() + " - " + len2);
}
len = users.Instructors.length;
console.log("Instructors")
for (var i = 0; i < len; i++) {
  name = users.Instructors[i].first_name + " " + users.Instructors[i].last_name;
  len2 = name.length-1; // Subtract space, must calculate before log
  console.log(i+1 + " - " + name.toUpperCase() + " - " + len2);
}
