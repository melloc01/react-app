import React from 'react';
import Task from '../components/task.jsx';


class TaskList extends React.Component {
  
  constructor(props){
    
    super(props);
    
    this.state = {

    };

  }

  componentDidMount() {

  }


  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <table style={{border: '1px solid black'}} border="1px" className="table">
        <thead>
          <tr>
            <th width="30px">
              Toggle
            </th>
            <th>
              Task
            </th>
            <th width="30px">
              Destroy
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map(function(task, index) {
             return <Task key={index} _id={index} text={task.text}/>;
          })}
        </tbody>
      </table>
    );
  }
}

export default TaskList;