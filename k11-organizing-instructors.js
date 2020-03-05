const organizeInstructors = function(instructors)
{
  let result = {};

  for (let i = 0; i < instructors.length; i++) {
    if (!result[instructors[i].course]) {
      result[instructors[i].course] = [];
    }
    result[instructors[i].course].push(instructors[i].name);
  }

  return result;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
