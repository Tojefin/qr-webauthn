import task from "../scripts/task.mjs"

const template = document.createElement('template');
template.innerHTML = `
<h2>Task list</h2>
<input type="text" id="task" placeholder="New task"/>
<button type="button" id="refresh">Refresh</button>
<ul id="list">
</ul>`;

class TaskList extends HTMLElement{
 constructor(){
     super();
     this.attachShadow({ mode: 'open'});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
     this.shadowRoot.querySelector('#task').addEventListener('keydown', (e) => {
      if (e.keyCode == 13 && e.target.value.trim() != '') {
        task.create(e.target.value.trim())
        this.refreshList()
      }
     })
     this.shadowRoot.querySelector('#refresh').addEventListener('click', () => {
      this.refreshList()
     })
 } 

 async refreshList(){
  let data = await task.get();
  let list = this.shadowRoot.querySelector('#list');
  list.innerHTML = '';
  data.forEach(item => {
    let elem = document.createElement('li');
    elem.innerText = item
    elem.addEventListener('click', (e) => {
      let index = Array.prototype.indexOf.call(list.childNodes, elem)
      task.delete(index)
      this.refreshList()
    })
    list.appendChild(elem)
  });
 }

 connectedCallback(){
   this.refreshList()
 }
}

export default window.customElements.define('task-list', TaskList);