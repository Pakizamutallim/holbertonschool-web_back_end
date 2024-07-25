// 2-get_students_by_loc.js

const getStudentsByLocation = (students, city) => {
  return students.filter((student) => student.location === city); // Added parentheses around `student`
};

export default getStudentsByLocation;
