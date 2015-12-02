import Reflux from 'reflux';

const TaskActions = Reflux.createActions({
  
  toggleTask: {
  		children: ['completed', 'failed']
  },
  loadTasks: {
  		children: ['completed', 'failed']
  },
  addTask: {
  		children: ['completed', 'failed']
  }

});

TaskActions.loadTasks.listen(function(){

  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  setTimeout(() => {
    const tasks = [

    	{text:'Foo'},
    	{text:'Bar'},
    	{text:'Legal'}

    ];

    this.completed(tasks);

    // on error
    // this.failed('an error occured');
  }, 500);
});

TaskActions.addTask.listen(function (task) {
	
	this.completed(task);

});

TaskActions.toggleTask.listen(function (index) {
	
	this.completed(index);

});

export default TaskActions;