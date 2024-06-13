const inputBar = document.querySelector(".input-bar");
const addBtn = document.querySelector(".addButton");
const todoItems = document.querySelector(".todo-items");

let InputValue = "";

const getInputValue = () => {
  InputValue = inputBar.value.trim();
  if (InputValue === "") {
    alert("Empty input");
  } else {
    showItems(InputValue);
    console.log("Input value is ", InputValue);
    inputBar.value = "";
  }
};

const showItems = (val) => {
  let newChild = document.createElement('div');
  newChild.className = 'todo-item';
  newChild.innerHTML = `
    <input type="checkbox" class="checkbox">
    <p class="text">${val}</p>
    <button class="remove-item">X</button>
  `;

  // Append the new child to the todoItems container
  todoItems.appendChild(newChild);

  // Add the event listener to the remove button
  const removeButton = newChild.querySelector(".remove-item");
  if (removeButton) {
    removeButton.addEventListener("click", () => {
      todoItems.removeChild(newChild);
    });
  }

  // Add the event listener to the checkbox
  const checkbox = newChild.querySelector(".checkbox");
  if (checkbox) {
    checkbox.addEventListener("change", updateTextDecoration);
  }
};

const updateTextDecoration = () => {
  const todoItemList = document.querySelectorAll(".todo-item");
  todoItemList.forEach(item => {
    const checkbox = item.querySelector(".checkbox");
    const textElement = item.querySelector(".text");

    if (checkbox && textElement) {

      if (checkbox.checked) {
        textElement.style.textDecoration = "line-through";
      } else {
        textElement.style.textDecoration = "none";
      }
    }
  });
};

// Add event listener to the add button
if (addBtn) {
  addBtn.addEventListener("click", getInputValue);
}

// Optional: Listen for the Enter key to add the to-do item
inputBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getInputValue();
  }
});
