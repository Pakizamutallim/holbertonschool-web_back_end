// 4-update_grade_by_city.js

const updateStudentGradeByCity = (students, city, newGrades) => 
  students
    .filter(student => student.location === city)
    .map(student => {
      const gradeEntry = newGrades.find(grade => grade.studentId === student.id);
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: gradeEntry ? gradeEntry.grade : 'N/A',
      };
    });

export default updateStudentGradeByCity;
