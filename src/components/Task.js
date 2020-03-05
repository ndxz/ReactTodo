import React from 'react'
import TD from './To-do';

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tdList: []
        };
    }


    addTodo = (todo) => {
        this.setState({
            tdList: [todo, ...this.state.tdList]
        });

    }
    toggleComplete = (id) => {


        this.setState({

            tdList: this.state.tdList.map(todo => {
                if (todo.id === id) { return { ...todo, completed: !todo.completed } }
                else { return todo }


            })

        })
    }
    removeTask = (id) => {

        let updateTasks = this.state.tdList.filter(todo => todo.id !== id)
        this.setState({

            tdList: updateTasks

        })

    }

    render() {
        return (
            <div>
                <TD data={this.addTodo} />

                {this.state.tdList.map(t => (<div className='tdElement' key={t.id}> <h2 className={t.completed ? 'taskCompleted' : 'undo'} > {t.text} </h2>
                    <button type='button' onClick={() => this.toggleComplete(t.id)}> {!t.completed ? 'Complete' : 'Undo'}  </button>
                    <button type='button' onClick={() => this.removeTask(t.id)}>Remove</button>
                </div>)




                )}
            </div>
        )
    }
}

export default Task
