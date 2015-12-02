import React from 'react';
import TaskStore from '../stores/taskStore';

class Task extends React.Component {
  
  constructor(props){

    super(props);
    this.state = {
      completed: false, 
      text: ''
    };
  }

  componentDidMount() {
  }

  handleToggleTask(){
    
    console.warn(TaskStore);
    TaskStore.toggleTask(this._id);

    //let input = event.target.querySelector('input');
    //input.checked = !input.checked

  }

  handleDestroy(){

  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <tr>
        <td>
          <button onClick={this.handleToggleTask.bind(this)}>
            <input type="checkbox" checked={this.props.completed} />
          </button>
        </td>
        <td>
          {this.props.text}
        </td>
        <td>
          <button onClick={this.handleDestroy}>&times;</button>
        </td>
      </tr>
    );
  }
}

export default Task;
