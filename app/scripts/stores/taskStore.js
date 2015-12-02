import Reflux from 'reflux';
import TaskActions from '../actions/taskActions';

let TaskStore = Reflux.createStore({
  listenables: TaskActions,
  
  init() {
    this.tasks = [];
  },

  loasTasks() {
    this.trigger({ 
      loading: true
    });
  },

  triggerLoading(status) {
    this.trigger({loading: status});
  },

  toggleTaskCompleted(index){
    
    let task = this.tasks[index];
    this.triggerLoading(true);
    task.completed = ! task.completed;

    this.trigger({
      tasks : this.tasks,
      loading: false
    });

  },
  toggleTaskFailed(index){
    

  },
  
  addTaskCompleted(text) {

    this.triggerLoading(true);
    this.tasks.push({text: text});

    setTimeout(() =>{
      
      this.trigger({
        tasks : this.tasks,
        loading: false
      });

    });

  },

  addTaskFailed() {
    
    alert('fail');

  },

  loadTasksCompleted(tasks) {
    this.tasks = tasks;

    this.trigger({ 
      tasks : this.tasks,
      loading: false
    });
  },

  loadTasksFailed(error) {
    this.trigger({ 
      error : error,
      loading: false
    });
  }

});

export default TaskStore;