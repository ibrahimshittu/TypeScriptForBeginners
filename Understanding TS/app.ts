const person = {
    name: 'Max',
    age: 30, 
    hobbies: ['Sports', 'Cooking'],
};

let favoriteActivities: string[]; // Array of strings
favoriteActivities = ['Sports'];

// const person2: {
//     name: string;
//     age: number
// } || object = {
//     name: 'Max',
//     age: 30
// };

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}