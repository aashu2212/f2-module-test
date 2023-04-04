let students = [];

function addStudent() {
  const nameInput = document.getElementById("name-input");
  const emailInput = document.getElementById("email-input");
  const gpaInput = document.getElementById("gpa-input");
  const ageInput = document.getElementById("age-input");
  const degreeInput = document.getElementById("degree-input");

  const name = nameInput.value;
  const email = emailInput.value;
  const gpa = gpaInput.value;
  const age = ageInput.value;
  const degree = degreeInput.value;

  const newStudent = {
    name: name,
    email: email,
    gpa: gpa,
    age: age,
    degree: degree,
  };

  students.push(newStudent);
  displayStudents();
  clearInputs();
}

function displayStudents() {
  const studentsBody = document.getElementById("students-body");
  studentsBody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const row = document.createElement("tr");
    const id = i + 1;
    row.innerHTML = `
        <td>${id}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.age}</td>
        <td>${student.gpa}</td>
        <td>${student.degree}</td>
        <td><button onclick="editStudent(${i})">Edit</button></td>
        <td><button onclick="deleteStudent(${i})">Delete</button></td>
      `;
    studentsBody.appendChild(row);
  }
}

function clearInputs() {
  const inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function searchStudents() {
  const searchInput = document.getElementById("search-input");
  const searchString = searchInput.value.toLowerCase();

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchString) ||
      student.email.toLowerCase().includes(searchString) ||
      student.degree.toLowerCase().includes(searchString)
    );
  });

  displayFilteredStudents(filteredStudents);
}

function displayFilteredStudents(filteredStudents) {
  const studentsBody = document.getElementById("students-body");
  studentsBody.innerHTML = "";
  for (let i = 0; i < filteredStudents.length; i++) {
    const student = filteredStudents[i];
    const row = document.createElement("tr");
    const id = i + 1;
    row.innerHTML = `
        <td>${id}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.age}</td>
        <td>${student.gpa}</td>
        <td>${student.degree}</td>
        <td><button onclick="editStudent(${i})">Edit</button></td>
        <td><button onclick="deleteStudent(${i})">Delete</button></td>
      `;
    studentsBody.appendChild(row);
  }
}

function editStudent(index) {
  const student = students[index];
  const nameInput = document.getElementById("name-input");
  const emailInput = document.getElementById("email-input");
  const gpaInput = document.getElementById("gpa-input");
  const ageInput = document.getElementById("age-input");
  const degreeInput = document.getElementById("degree-input");

  nameInput.value = student.name;
  emailInput.value = student.email;
  gpaInput.value = student.gpa;
  ageInput
