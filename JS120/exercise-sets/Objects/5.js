// Create a school object. The school object uses the student object from the
// previous exercise. It has methods that use and update information about the
// student. Be sure to check out the previous exercise for the other arguments
// that might be needed by the school object. Implement the following methods
// for the school object:

// - addStudent: Adds a student by creating a new student and adding the student
//   to a collection of students. The method adds a constraint that the year
//   can only be any of the following values: '1st', '2nd', '3rd', '4th', or
//   '5th'. Returns a student object if year is valid otherwise it logs
//   "Invalid Year".
// - enrollStudent: Enrolls a student in a course.
// - addGrade: Adds the grade of a student for a course.
// - getReportCard: Logs the grades of a student for all courses. If the course
//   has no grade, it uses "In progress" as the grade.
// - courseReport: Logs the grades of all students for a given course name.
//   Only student with grades are part of the course report.
// - To test your code, use the three student objects listed below. Using the
//   three student objects, produces the following values from the getReportCard
//   and courseReport methods respectively.


// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      return `${this.name} is a ${this.year} year student`;
    },

    addCourse(courseObj) {
      this.courses.push(courseObj);
    },

    listCourses() {
      return this.courses
    },

    addNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes: function() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

let school = {
  students: [],
  addStudent(name, year) {
    let validYears = ['1st', '2nd', '3rd', '4th', '5th'];
    if (!validYears.includes(year)) {
      console.log('Invalid year');
    } else {
      this.students.push(createStudent(name, year));
      return this.students[this.students.length - 1];
    }

  },

  enrollStudent(student, course) {
    let studentObj = this.students.filter(person => {
      return person.name === student;
    })[0];
    studentObj.addCourse(course);
  },

  addGrade(student, courseID, grade) {
    let studentObj = this.students.filter(person => {
      return person.name === student;
    })[0];

    let courseObj = studentObj.courses.filter(course => {
      return courseID === course.code;
    })[0];

    courseObj.grade = grade;
  },

  getReportCard(student) {
    student = student.toString();
    let studentObj = this.students.filter(person => {
      return person.name === student;
    })[0];

    studentObj.courses.forEach(course => {
      let grade;
      if ('grade' in course) {
        grade = course.grade;
      } else {
        grade = 'In progress';
      }

      console.log(`${course.name}: ${grade}`);
    });
  },

  courseReport(className) {
    let classStudents = {};
    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === className) {
          classStudents[student.name] = course.grade;
        }
      });
    });

    let classAverage = 0;
    let classCount = 0;
    Object.keys(classStudents).forEach(student => {
      classAverage += classStudents[student];
      classCount += 1;
    });


    if (Number.isNaN(classAverage)) {
      return undefined;
    } else {
      classAverage /= classCount;
      console.log(`=${className} Grades=`);
      Object.keys(classStudents).forEach(student => {
        console.log(`${student}: ${classStudents[student]}`);
      });
      console.log(`---`);
      console.log(`Course Average: ${classAverage}`);
    }
  },
};

school.addStudent('foo', '3rd');
school.enrollStudent('foo', { name: 'Math', code: 101 });
school.enrollStudent('foo', { name: 'Advanced Math', code: 102 });
school.enrollStudent('foo', { name: 'Physics', code: 202, });
school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);


school.addStudent('bar', '1st');
school.enrollStudent('bar', { name: 'Math', code: 101 });
school.addGrade('bar', 101, 91);

school.addStudent('qux', '2nd');
school.enrollStudent('qux', { name: 'Math', code: 101 });
school.enrollStudent('qux', { name: 'Advanced Math', code: 102 });
school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

school.getReportCard('foo');
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined


// foo;
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }
//
// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }
//
// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }
