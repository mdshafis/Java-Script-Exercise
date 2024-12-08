'use strict';
const div = document.querySelector('#target');

const names = ['John', 'Paul', 'Jones'];

names.forEach(function (name) {
    const li = document.createElement('li');
    li.textContent = name;
    div.appendChild(li);
});