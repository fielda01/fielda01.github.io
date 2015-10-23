addtask = function() {
  var tasklist = document.querySelector('#tasklist');
  var li = document.createElement("li");
  
  var cb = document.createElement("input");
  cb.setAttribute("type", "checkbox");
  cb.onclick = doneTask;
  
  var task = document.querySelector("#abc").value;
  var litext = document.createTextNode(task);
  
  li.appendChild(cb);
  li.appendChild(litext);
  li.className = document.querySelector("#priority").value;
  tasklist.appendChild(li);
  
  
  
  //priority = document.querySelector('#priority')
  //li.className = priority.value
  

}  
  //mycb.onclick = boxChecked;
  //this.parentNode.classList.add("done")
  
doneTask = function() {
  if (this.checked) {
  this.parentNode.classList.add("done");
  } else {
    this.parentNode.classList.remove("done");
  }
  
}
