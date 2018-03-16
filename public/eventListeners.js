$(document).ready(function (){
  //================================================
  //Click Events
  //================================================

  //click event for creating a task
  $('#create').on('click', function(e){
    submitTask(e, '/api/create', '/')
  })

  //click event for deleting uncompleted events
  $('.delete').on('click', function(e){
    let id = $(this).data('id');
    remove(id);
  })

  //click event to load the edit task page
  $('.edit').on('click', function(e){
    let id = $(this).data('id');
    window.location.href = '/api/task/'+ id;
  })

  //click event to change state of task to completed
  $('.complete').on('click', function (e){
    e.preventDefault();
    let id = $(this).data('id');
    complete(id)
  })

  //click event for completed events that bypasses the confirm
  $('.delcomplete').on('click', function(e){
    let id = $(this).data('id');
    removeCompleted(id);
  })

  //click event to send the edit to the back end
  $('#edit').on('click', function(e){
    let id = $(this).data('id');
    submitTask(e, '/api/update', id)
  })

  //keypress event that allows task to be created on 'Enter'
  $('#task').keypress(function(e){
    if (e.key === 'Enter'){
      submitTask(e, '/api/create')
    }
  })

  //keypress event that allows task to be created on 'Enter'
  $('#editTask').keypress(function(e){
    if (e.key === 'Enter'){
      submitTask(e, '/api/create', '/')
    }
  })
})//end of document ready function