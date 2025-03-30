let words = ["Navnath", "Auti", ""];

let cleanwords = words.flatMap((word) => (word ? word.split("") : []));

console.log(cleanwords);

let people = [
  { name: "Navnath", skills: ["React", "Java"] },
  { name: "Neeraj", skills: ["Python", "Blockchain"] },
];

let skills = people.flatMap((person) => person.skills);
console.log(skills);
