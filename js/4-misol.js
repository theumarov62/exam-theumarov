const students = [
  {
    name: "Fotima",
    gender: "female",
    id: 1,
    age: 45,
    major: "Computer Science",
    grade: "A",
  },
  {
    name: "Aziz",
    gender: "male",
    id: 4,
    age: 32,
    major: "Business",
    grade: "B+",
  },
  {
    name: "Zuhra",
    gender: "female",
    id: 2,
    age: 23,
    major: "Mathematics",
    grade: "A-",
  },
  {
    name: "Malika",
    gender: "female",
    id: 3,
    age: 78,
    major: "History",
    grade: "C",
  },
  {
    name: "Mavlon",
    gender: "male",
    id: 7,
    age: 43,
    major: "Physics",
    grade: "B",
  },
  {
    name: "Adiba",
    gender: "female",
    id: 54,
    age: 26,
    major: "Biology",
    grade: "A+",
  },
  {
    name: "Rustam",
    gender: "male",
    id: 8,
    age: 29,
    major: "Engineering",
    grade: "B-",
  },
  {
    name: "Nodira",
    gender: "female",
    id: 9,
    age: 34,
    major: "Literature",
    grade: "A",
  },
  {
    name: "Shohjahon",
    gender: "male",
    id: 10,
    age: 21,
    major: "Chemistry",
    grade: "C+",
  },
  {
    name: "Dilnoza",
    gender: "female",
    id: 11,
    age: 27,
    major: "Economics",
    grade: "B",
  },
  {
    name: "Javlon",
    gender: "male",
    id: 12,
    age: 38,
    major: "Art",
    grade: "A-",
  },
  {
    name: "Saida",
    gender: "female",
    id: 13,
    age: 19,
    major: "Psychology",
    grade: "A+",
  },
  { name: "Bekzod", gender: "male", id: 14, age: 41, major: "Law", grade: "B" },
  {
    name: "Gulnora",
    gender: "female",
    id: 15,
    age: 25,
    major: "Medicine",
    grade: "A",
  },
  {
    name: "Otabek",
    gender: "male",
    id: 16,
    age: 30,
    major: "Sociology",
    grade: "C",
  },
  {
    name: "Lola",
    gender: "female",
    id: 17,
    age: 22,
    major: "Music",
    grade: "B+",
  },
  {
    name: "Timur",
    gender: "male",
    id: 18,
    age: 35,
    major: "Geography",
    grade: "A-",
  },
  {
    name: "Shahnoza",
    gender: "female",
    id: 19,
    age: 28,
    major: "Philosophy",
    grade: "B",
  },
  {
    name: "Alisher",
    gender: "male",
    id: 20,
    age: 24,
    major: "Education",
    grade: "A",
  },
  {
    name: "Madina",
    gender: "female",
    id: 21,
    age: 31,
    major: "Linguistics",
    grade: "B+",
  },
];

function task(array) {
  const females = array.filter((s) => s.gender === "female");
  const males = array.filter((s) => s.gender === "male");

  let old = females[0];
  for (let i = 1; i < females.length; i++) {
    if (females[i].age > old.age) {
      old = females[i];
    }
  }

  let kichik = males[0];
  for (let i = 1; i < males.length; i++) {
    if (males[i].age < kichik.age) {
      kichik = males[i];
    }
  }

  return kichik.age - old.age;
}

const result = task(students);
console.log(result);
