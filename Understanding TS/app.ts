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

enum Role { ADMIN, READ_ONLY, AUTHOR }; // Enum - Fixed values

const second_person = {
    name: 'Max',
    age: 30, 
    hobbies: ['Sports', 'Cooking'],
    roles: Role.AUTHOR // Enum 
};

let favoriteActivities: string[]; // Array of strings
favoriteActivities = ['Sports'];

console.log(second_person.roles);

for (const hobby of second_person.hobbies) {
    console.log(hobby.toUpperCase());
}