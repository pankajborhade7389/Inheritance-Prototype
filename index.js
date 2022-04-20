console.log("working");

// Que-1

let parent = {
    Name : "Sky",
    Place : "Mumbai",
    Age : 23,
    showDetails : function(){
        console.log(this.Name + " " + this.Place + " " + this.Age);
    }
}
parent.showDetails();

let child = {
    Name : "Roman",
}
child.__proto__ = parent;
child.showDetails();

console.log(parent);
console.log(child);

// Que-2

let object1 = {
    firstName : "seth",
    lastName : "Rollins",
    showDetails : function(){
        console.log(this.firstName + " " + this.lastName);
    }
}
object1.showDetails();
let object2 = {
    firstName : "Dean",
}
object2.__proto__ = object1;
object2.showDetails();
console.log(object2);

//Que-3

let array = [10,20,30,40,50];
let arr = {
    getName : function(){
        let result = array.reduce((acc,cur)=> acc = acc + cur, 0);
        console.log(result);
    }
}
arr.getName();

// Que-4
function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("chris")));

//