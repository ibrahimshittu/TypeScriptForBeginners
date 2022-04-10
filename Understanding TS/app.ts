const person: {
    name: string;
    age: number;
    hobbies: string[];
    roles: [number, string];
} = {
    name: 'Max',
    age: 30, 
    hobbies: ['Sports', 'Cooking'],
    roles: [2, 'author']
};

let favoriteActivities: string[]; // Array of strings
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}