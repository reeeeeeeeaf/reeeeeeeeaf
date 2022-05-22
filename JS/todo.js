const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 스트링을 배열로 바꿔저장해줌
}

function deleteToDo(event) {
  // console.log(event.target.prentElement);
  const li = event.target.parentElement; //this.parentElement 도 가능
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //toDos = toDos.filter((toDo) => toDo.id !== li.id);  //이상태로 작동안함 li한게 스트링이라 안됨
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // tomato = 으로 해도 무관
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "  ❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li가 span이라는 자식을 가지게됨
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
  toDoInput.value = ""; //초기화
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  console.log(newTodoObj);
  toDos.push(newTodoObj); //어레이에 푸쉬
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  //savedToDos !== null 이것도 가능
  const parsedToDos = JSON.parse(savedToDos); //스트링형식을 배열로 변환
  toDos = parsedToDos;
  // parsedToDos.forEach(hello())  // hello 함수를 배열값을 이용해 반복 실행
  // parsedToDos.forEach((item) => console.log("이것도 동일"),item); //애로우펑션이라 부르네
  parsedToDos.forEach(paintToDo);
}
