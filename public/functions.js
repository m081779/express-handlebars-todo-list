//================================================
//Functions
//================================================

//function that is called to submit task to the database
//takes the event, the url for the ajax call, and an optional id
function submitTask(e, url, id){
  e.preventDefault()

  //creating task object
  let taskInput = $('#task');
  let task = {
    task: taskInput.val().trim(),
  };

  //adding optional id property to task
  if (typeof id !== 'undefined'){
    task.id = id;
  }
  //clearing inputs
  taskInput.val('');
  $.ajax({
    url: url,//url passed from arguments
    type: 'POST',
    data: task,
    success: function (response){
      //reloading the page to reflect changes
      window.location.href = '/';
    },
    error: function (err){
      console.log(err);
    }
  })
}

//function to remvove uncompleted tasks.  Requires users to
//confirm deletion
function remove(id){
  let remove = confirm('Are you sure you want to delete this item?')
  if (remove){
    $.ajax({
      url: 'api/task/'+id,
      type: 'DELETE',
      success: function (response){
        location.reload()
      },
      error: function (err){
        console.log(err);
      }
    })
  }
}

//functoin to remove completed tasks.  No confirmation for deletion
function removeCompleted(id){
    $.ajax({
      url: 'api/task/'+id,
      type: 'DELETE',
      success: function (response){
        location.reload();
      },
      error: function (err){
        console.log(err);
      }
    })
}

//function to change the task title
function edit(id){
  let data = {
    id: id,
    task: $('#task').val().trim()
  }
  $.ajax({
    url: '/api/update',
    type: 'POST',
    data: data,
    success: function (response){
      window.location.href = '/';
    },
    error: function (err){
      console.log(err);
    }
  })
}

//function to change task from incomplete to complete
function complete(id){
  $.ajax({
    url: 'api/task/'+id,
    method: 'PUT',
    success: function (result){
      location.reload();
    },
    error: function (err){
      console.log(err);
    }
  });
}
