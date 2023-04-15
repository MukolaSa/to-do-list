const input = document.getElementById("newTask")
const form = document.querySelector("form")
const taskListEl = document.getElementById("taskList")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  if (input.value.length === 0) {
    alert("Введіть щось!")
    return
  }

  const item = document.createElement("li")
  const inputCheckbox = document.createElement("input")
  const buttonDelete = document.createElement("button")
  const textTask = document.createElement("p")

  inputCheckbox.type = "checkbox"
  buttonDelete.textContent = "Delete"
  textTask.textContent = input.value

  item.append(inputCheckbox, textTask, buttonDelete)
  taskListEl.appendChild(item)

  input.value = ""


  inputCheckbox.addEventListener("change", () => {
    // При натисканні на галочку викреслюємо текст
    if (inputCheckbox.checked) {
      textTask.style.textDecoration = "line-through"
    } else {
      textTask.style.textDecoration = "none"
    }
  })

  // Вішаємо слухач подій на Delete
  buttonDelete.addEventListener("click", (event) => {
    event.preventDefault()
    // Видаляємо задачу зі списку
    item.remove()
  })
})