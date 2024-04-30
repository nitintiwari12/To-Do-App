// let todo = [];
// let req = prompt("Enter your request: ");
// while (true) {
//   if (req == "quit") {
//     console.log("Quitting App");
//     break;
//   }
//   if (req == "list") {
//     console.log(`   To Do List   `);
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log(`----------------`);
//   } else if (req == "add") {
//     let task = prompt("Enter your task to add: ");
//     todo.push(task);
//     console.log(`   Task Added   `);
//   } else if (req == "delete") {
//     let idx = prompt("Enter your task to delete: ");
//     todo.splice(idx, 1);
//     console.log(`   Task Deleted   `);
//   } else {
//     console.log(`   Wrong Request   `);
//   }
//   req = prompt("Enter your request: ");
// }

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for (btt of delBtns){
//   btt.addEventListener("click", function(){
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }
ul.addEventListener('click', function(event){
  if(event.target.nodeName == "button"){
    let listitem = event.target.parentElement;
    listitem.remove;
    console.log('deleted');
  }
})