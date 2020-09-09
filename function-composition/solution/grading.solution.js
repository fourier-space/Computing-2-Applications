// here is the sample solution


// grading is from 0 to 100;
// we assume the input grades data are of an array

const testGrades = [
    {name:"Tom", gender: "M", grade: 80},
    {name:"Jack", gender:"M", grade:75},
    {name:"Nancy", gender:"F", grade:82},
    {name:"Amy", gender:"F", grade:74}
];

const isBoy = (student) => student.gender === "M";

const isGirl = (student) => student.gender === "F";

const getBoys = (grades) => (
    grades.filter(isBoy)
);

const getGirls = (grades) => (
    grades.filter(isGirl)
);

const average = (grades) => (
    grades.reduce((acc, curr) => (
        acc + curr.grade
    ), 0) / grades.length
);

const maxGrade = (grades) => (
    Math.max(...grades.map((student) => student.grade))
);

const minGrade = (grades) => (
    Math.min(...grades.map((student) => student.grade))
);

debugger; 