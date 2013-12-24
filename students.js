var Student = function(fname, lname){
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
};

Student.prototype.name = function(){
  return this.fname + " " + this.lname;
};

Student.prototype.courses = function(){
  return this.courses;
}

Student.prototype.enroll = function(course){
  if (this.courses.indexOf(course) !== -1) {
    return null;
  }

  this.courses.push(course);
  course.add_student(this);
}

Student.prototype.course_load = function(){
  var course_load = {};
  this.courses.forEach(function(course){
    if( course_load[course.department] === undefined ){
      course_load[course.department] = course.credits;
    }else{
      course_load[course.department] += course.credits;
    }
  });
  return course_load;
}

var Course = function (name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
};

Course.prototype.add_student = function (student) {
  if (this.students.indexOf(student) !== -1) {
    return null;
  }

  student.enroll(this);
  this.students.push(student);
};

fong = new Student("Fong", "Chin");
rory = new Student("Rory", "Ou");

calc = new Course("Calculus", "Math", 5);
lit = new Course("American Lit", "English", 4);
bio = new Course("Microbiology", "Bio", 6);


console.log(fong.name);

fong.enroll(calc);
fong.enroll(bio);
rory.enroll(calc);
rory.enroll(bio);
rory.enroll(lit);

console.log(fong);
console.log(rory);
console.log(fong.courses);
console.log(rory.courses);
console.log(rory.course_load());

console.log(calc.students);
console.log(lit.students);
console.log(bio.students);

bio.students[0].name = "whoa";
console.log(fong);


