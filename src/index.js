document.addEventListener("DOMContentLoaded", () => {
  // your code here

  form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn(e.target.newTask.value)
    e.target.reset()
  })
})

function submitBtn(todo){
  let p = document.createElement('p');
  let btn = document.createElement('btn');
  p.innerText = `${todo}`
  btn.textContent = ' x '
  document.querySelector('#tasks').append(p)
  p.appendChild(btn)
  btn.addEventListener('click', handleDelete)

}

function handleDelete(e){
  e.target.parentNode.remove();
}