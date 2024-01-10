interface Students {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// create two students
const firstStudent: Student = {
  firstName: 'Kylie',
  lastName: 'Kinsley',
  age: 8,
  location: 'Nairobi'
};

const secondStudent: Student = {
  firstName: 'Lyle',
  lastName: 'Macharia',
  age: 5,
  location: 'Nairobi'
};

// create an array named studentsList containing the above two variables
const studentsList: Student[] = [firstStudent, secondStudent];

// Render a table
function renderTable() {
  const table = document.createElement('table');

  studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    constlocationCell = row.insertcCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  document.body.appendChild(table);
}

// Table rendering when window loads
window.onload = function () {
  renderTable();
};


