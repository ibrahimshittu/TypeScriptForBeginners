var person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    roles: [2, 'author']
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 3] = "ADMIN";
    Role["READ_ONLY"] = "USER";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
; // Enum - Fixed values
var second_person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    roles: Role.AUTHOR // Enum 
};
var favoriteActivities; // Array of strings
favoriteActivities = ['Sports'];
console.log(second_person.roles);
for (var _i = 0, _a = second_person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
