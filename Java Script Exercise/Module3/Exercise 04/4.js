'use strict';
const select = document.querySelector('#target');

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

students.forEach(function(student) {
  const studentOption = document.createElement('option');
  studentOption.value = student.id;
  studentOption.textContent = student.name;
  select.appendChild(studentOption);
});