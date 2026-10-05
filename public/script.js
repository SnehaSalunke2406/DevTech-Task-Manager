const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const search = document.getElementById("search");

let tasks = [];
let editId = null;

async function loadTasks() {
  const res = await fetch("/api/tasks");
  tasks = await res.json();
  displayTasks();
}

function displayTasks() {
  const text = search.value.toLowerCase();

  const filtered = tasks.filter(task =>
    task.title.toLowerCase().includes(text)
  );

  taskList.innerHTML = filtered.map(task => `
    <div class="task">
      <h3>${task.title}</h3>

      <p>${task.description || ""}</p>

      <p>
        <b>Status:</b> ${task.status}
        |
        <b>Priority:</b> ${task.priority}
      </p>

      <div class="actions">
        <button class="edit" onclick="editTask('${task._id}')">
          Edit
        </button>

        <button class="delete" onclick="deleteTask('${task._id}')">
          Delete
        </button>
      </div>
    </div>
  `).join("");
}

form.addEventListener("submit", async e => {
  e.preventDefault();

  const data = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    priority: document.getElementById("priority").value,
    status: document.getElementById("status").value
  };

  const url = editId
    ? `/api/tasks/${editId}`
    : "/api/tasks";

  const method = editId ? "PUT" : "POST";

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    alert("Something went wrong");
    return;
  }

  form.reset();
  editId = null;
  document.getElementById("saveBtn").textContent = "Add Task";

  loadTasks();
});

async function editTask(id) {
  const res = await fetch(`/api/tasks/${id}`);
  const task = await res.json();

  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description || "";
  document.getElementById("priority").value = task.priority;
  document.getElementById("status").value = task.status;

  editId = id;
  document.getElementById("saveBtn").textContent = "Update Task";
}

async function deleteTask(id) {
  if (!confirm("Delete this task?")) return;

  await fetch(`/api/tasks/${id}`, {
    method: "DELETE"
  });

  loadTasks();
}

search.addEventListener("input", displayTasks);

loadTasks();