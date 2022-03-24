const students = [
    {
        firstName: "Jane",
        lastName: "Doe",
        habits: [
            "doesn't wash dishes",
            "falls asleep in lecture",
            "shows up early",
        ],
    },
    {
        firstName: "John",
        lastName: "Smith",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "Arya",
        lastName: "Stark",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "Jon",
        lastName: "Snow",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Jane Doe", "Arya Stark"];

const badHabit2 = "shows up late";
const expected2 = ["John Smith", "Arya Stark"];

const badHabit3 = "typo";
const expected3 = [];


// function santasNaughtyList2(persons, badHabit) {
//     let nameArray = []

//     for (object of students) {
//         for (key in object) {
//             if (key === "habits") {
//                 for (element of object[key]) {
//                     if (element === badHabit) {
//                         let name = object.firstName + " " + object.lastName
//                         nameArray.push(name)
//                     }
//                 }
//             }
//         }
//     }
//     return nameArray
// }

// console.log(santasNaughtyList2(students, "doesn't wash dishes"))


function santasNaughtyListFunctional(persons, badHabit) { 
    return (
    persons.filter((person)=> person.habits.includes(badHabit)))
    .map((person) => `${person.firstName} ${person.lastName}`)
}

const santasNaughtyListFunctional2 = (persons, badHabit) =>(
    persons
    .filter((person)=> person.habits.includes(badHabit)))
    .map((person) => `${person.firstName} ${person.lastName}`)
)

console.log(santasNaughtyListFunctional(students, badHabit1) )
console.log(santasNaughtyListFunctional(students, badHabit2) )
console.log(santasNaughtyListFunctional(students, badHabit3) )