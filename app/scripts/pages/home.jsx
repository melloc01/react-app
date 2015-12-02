import React from 'react';
import Task from '../components/task.jsx';
import TaskList from '../components/taskList.jsx';
import TaskStore from '../stores/taskStore';
import TaskActions from '../actions/taskActions';

class Home extends React.Component {
  
  constructor(props){
    super(props);
    
    
    this.state = {
      tasks : [
      ],
      loading: false
    };

    console.log(this);
    console.log(TaskStore);
  }


  handleAddTask() {

    if (this.state.tasks.length < 4) {
      TaskActions.addTask(this.input.value);
      input.value = '';
    } else {
      console.error('too many tasks');  
    }

  }

  componentDidMount() {
    this.unsubscribe = TaskStore.listen(this.onStatusChange.bind(this));
    this.input = document.getElementById('text');
    TaskActions.loadTasks();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <TaskList { ...this.state } />
          <textarea width="100%" style={{marginTop: '25px', backgroundColor: '#eee'}} id="text"></textarea>
          <button type="button" onClick={this.handleAddTask.bind(this)}>add</button>
      </div>
    );
  }
}

export default Home;
