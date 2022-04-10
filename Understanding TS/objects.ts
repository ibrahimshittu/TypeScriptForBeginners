const person: {
    name: string;
    age: number;
    hobbies: string[];
    roles: [number, string]; // Tuple - fixed length array
} = {
    name: 'Max',
    age: 30, 
    hobbies: ['Sports', 'Cooking'],
    roles: [2, 'author']
};

enum Role { ADMIN = 3, READ_ONLY = 'USER', AUTHOR = 'AUTHOR' }; // Enum - Fixed values

const second_person = {
    name: 'Max',
    age: 30, 
    hobbies: ['Sports', 'Cooking'],
    roles: Role.AUTHOR // Enum 
};

let favoriteActivities: string[]; // Array of strings
favoriteActivities = ['Sports'];

let favoriteFood: any[]; // Array of any type (string, number, boolean, object, etc.), not good to use generally
favoriteFood = ['Sports'];

console.log(second_person.roles);

for (const hobby of second_person.hobbies) {
    console.log(hobby.toUpperCase());
}