const name = "john";
const age = 30;

//concatenation
console.log('my name is ' + name + ' and i am ' + age);

//template string
console.log('My name is ${name} and i am ${age}');

const hello = 'My name is ${name} and i am ${age}';

console.log(hello);

//length of a string
let s = 'hello world?';

console.log(s.length);

//uppercase method
console.log(s.toUpperCase());

console.log(s.toLowerCase());

console.log(s.substring(0, 5).toUpperCase());

// arrays
const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries')

fruits.pop()

console.log(fruits);

//object literals
const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main strt',
        city: 'nairobi',
        states: 'Ma',
    }
}

person.email = 'john@gmail.com'

console.log(person);

//Arrays of Objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with doctor',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appt',
        isCompleted: false
    }
];

console.log(todos);

//JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// FOR LOOPS
for(let i = 0; i < 10; i++){
    console.log(i)
}

//while loops
let i = 0;
while(i < 10) {
    console.log(`while loop number: ${i}`);
    i++;
}

//loop thru arrays
for(let todo of todos){
    console.log(todo.text)
}

//foreach
todos.forEach(function(todo){
    console.log(todo.text)
})

//map
const todoText = todos.map(function(todo){
    return todo.text;
})

console.log(todoText)

//filter 
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
})

console.log(todoCompleted)

//conditions
const x = 20;

if(x == 10) {
    console.log('x is 10');
} else {
    console.log('x is NOT 10')
}

//ternally operator
const y = 10;

const color = x > 10 ? 'red': 'blue';

console.log(color)

// functions

function addNums(num1, num2){
    return num1 + num2
}

console.log(addNums(5, 4));

//object oriented
//constructor function
function Client(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName
    this.dob = new Date(dob)
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

//instantiate object
const client1 = new Client('john', 'doe', '4-4-1980')
const client2 = new Client('victor', 'doe', '4-4-1988')

console.log(client2)

console.log(client1.getBirthYear())
console.log(client1.getFullName())

//classes
class Manager {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

}

//instantiate object
const manager1 = new Client('john', 'doe', '4-4-1980')
const manager2 = new Client('victor', 'doe', '4-4-1988')

console.log(manager1.getFullName)

//DOM
//single element selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('my-form'))

//multiple element selectors
console.log(document.querySelectorAll('.items'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))


const ul = document.querySelector('.items')

//ul.remove()
//ul.lastElementChild.remove()
//ul.firstElementChild.textContent = 'hello'
//ul.children[0].innertext = 'victor';
//ul.lastElementChild.innerHTML = '<h1>hello</h1>'

//styling
const btn = document.querySelector('.btn')
btn.style.background = 'red'

//events
btn.addEventListener('mouseover', (e) => {
    e.preventDefault()
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('bg-dark')
    //document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello</h1>'
})

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailnput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit) 
function onSubmit(e) {
    e.preventDefault()

   if(nameInput.value === '' || emailnput.value ==='') {
    msg.classList.add('error')
        msg.innerHTML = 'please enter all fields'

        setTimeout(() => msg.remove(), 2000)
   }
   else{
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailnput.value}`))

    userList.appendChild(li)

    //clear the fields
    nameInput.value = ''
    emailnput.value = ''
   }
}