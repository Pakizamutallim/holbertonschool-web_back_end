// 4-update_grade_by_city.js

const updateStudentGradeByCity = (students, city, newGrades) => {
  return students
    .filter(student => student.location === city) // Filter students by city
    .map(student => {
      // Find the grade for this student
      const studentGrade = newGrades.find(gradeObj => gradeObj.studentId === student.id);

      // Return a new object with the updated grade or 'N/A' if no grade is found
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
};

export default updateStudentGradeByCity;
