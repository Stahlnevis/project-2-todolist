
import React, { useState } from 'react';
import "./styles/todo.css";

const TodoList = () => {
    const [inputTask, setInputTask] = useState('');
    const [inputTime, setInputTime] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [list, setList] = useState([]);

    const handleAddTodo = () => {
        if (!inputTask.trim() || !inputTime.trim() || !inputDate.trim()) {
            alert("Please fill in all fields before adding a task.");
            return;
        }



        const newTask = {
            id: Math.random(),
            todo: inputTask,
            time: inputTime,
            date: inputDate,
        
        };

       setList([...list, newTask]);
        setInputTask('');
        setInputTime('');
        setInputDate('');

}; 
       


    

   const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

   const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };

    const handleTimeChange = (event) => {
        setInputTime(event.target.value);
    };
    const handleDateChange = (event) => {
        setInputDate(event.target.value);
    };

    
    

   return (
        <div className="Todo">
            <h1>My To-Do List</h1>

            <div className="Top">
                <input className="input" type="text" value={inputTask}
                   onChange={handleInputChange} placeholder="Enter a task" />
                 <input className="input" type="time" value={inputTime}
                   onChange={handleTimeChange} placeholder="Enter a time" />
                   <input className= "input" type="date" value={inputDate}
                   onChange={handleDateChange} placeholder="Due Date"/>

                <button className="btn" onClick={handleAddTodo}>ADD</button>
            </div>

           <ul>
                { list.map((todo) => (
                    <li className="task" key={todo.id}>
                        {todo.todo} - {todo.time} - {todo.date}
                        
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                           Delete
                       </button>
                    </li>
                ))}
            </ul>
        </div>
    );
 };

export default TodoList; 



