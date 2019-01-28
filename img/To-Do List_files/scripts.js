function List() {
  this.tasks = [];
  this.currentId = 0;
}

List.prototype.addToList = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for Contacts ---------
function Task(task, date) {
  this.task = task;
  this.date = date;
}

Task.prototype.fullName = function() {
  return this.task + " " + this.date;
}

Task.prototype.listBox = function() {
  return "<input type='checkbox' name='list'>" + " " + this.task + ", " + this.date + "<br>";
}

var list1 = new List();



$(document).ready(function(){
  $("form#to-do").submit(function(event){


    var task1 = new Task($("input#task").val(), $("input#date").val());
    list1.addToList(task1);

    $("ul#result").append(list1.task[0].task);

    event.preventDefault();
  });

  $("button#update").click(function(){
    $("input:checkbox[name=list]:checked").each(function(){
      $(this).remove();
      $(this.listBox()).remove();
    });
  });
});
