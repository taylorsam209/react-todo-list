import React, {Component} from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            input: ''

        }
    }
   
    render() {
        console.log(this.props)
        return (
            <div className='Todo'>
                <h1>Taylor's To Do List</h1>
                <ol className = 'todoList'>
                    {
                        this.props.todoList.map((item, i, arr) => {
                            return (
                                <li onClick={() => this.props.completeItem(i, item)} key={i}>{item}</li>
                            )
                        })
                    }
                </ol>

                <div className = "InputContainer">
                    <input type = 'text' value={this.state.input} onChange ={(e) => {this.setState({
                        input: e.target.value
                          })
                         }
                       }/>
                    <button onClick = {() => this.props.addItem(this.state.input)}>Add Chore....please don't...</button> 
                    </div>
            </div>
        )
    }
}

export default Todo;