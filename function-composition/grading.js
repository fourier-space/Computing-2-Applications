

// grading is from 0 to 100;
// we assume the input grades data are of an array

const testGrades = [
    {name:"Tom", gender: "M", grade: 80},
    {name:"Jack", gender:"M", grade:75},
    {name:"Nancy", gender:"F", grade:82},
    {name:"Amy", gender:"F", grade:74}
];

const isBoy = (student) => student.sex === "M";

const isGirl = (student) => student.sex === "F";

const getBoys = (grades) => (
    // return all boy's results in an array

    // hint: use filter()
);

const getGirls = (grades) => (
    // return all girls resutls in an array
);

const average = (grades) => (
    // return average grades of given data set
    // this should be a general function that
    // doesn't have to know the nature about
    // the input

    // hint: use reduce()
);

const maxGrade = (grades) => (
    // returns the highest grade(s)
    // hint: use map()
)

const minGrade = grades => (
    // returns the lowest grade(s)
)


export default Object.freeze(grading);