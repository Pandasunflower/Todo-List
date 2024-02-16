const todos = [
    {
      name: "Calculus HW2",
      done: false,
    },
    {
      name: "Side Project Figma",
      done: false,
    },
    {
      name: "Course Slide",
      done: false,
    },
    {
      name: "Write Blog Post",
      done: true,
    },
    {
      name: "Test",
      done: true,
    },
  ];
  
  // this function receive array of objects
  // and return array of string
  // [
  //   "Calculus HW2 is still in progress.",
  //   "Side Project Figma is still in progress.",
  //   "Course Slide is still in progress.",
  //   "Write Blog Post is completed.",
  //   "Test is completed.",
  // ];
  
  function check(n)
  {
    return n.done == true ? `${n.name} is completed` : `${n.name} is still in progress`;
  }  
  // try to not use if, for, while
  function getTodosStatus(todos) {
    return todos.map(check);
  }
  
  console.log(getTodosStatus(todos));

function renderTodoList()
{
  const TodoElement = document.querySelector('.content');
  TodoElement.innerHTML = '';
  for (let i = 0; i < todos.length; i++)
  {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('circlebutton');

    const nameElement = document.createElement('p');
    nameElement.append(todos[i].name);

    const blockElement = document.createElement('div');
    blockElement.classList.add('block', 'add');
    if (todos[i].done) blockElement.classList.add('finished');
    blockElement.append(buttonElement, nameElement);
  
    const contentElement = document.querySelector('.content');
    contentElement.append(blockElement);
  }

}

function addTodo()
{
  const inputElement = document.querySelector('.defaulttext');
  todos.unshift({name: inputElement.value, done: false});
  renderTodoList();
  inputElement.value = '';
}

renderTodoList();