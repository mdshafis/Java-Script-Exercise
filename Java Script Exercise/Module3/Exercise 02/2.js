const div = document.querySelector('#target');

const items = ["First item", "Second item", "Third item"];

items.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item;
    div.appendChild(li);
});