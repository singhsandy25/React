import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState('');
    const[desc, setDesc] = useState('');
    
    const submit = (e) => {
        e.preventDefault();        
        if(!title || !desc) {
            alert('Please fill both fields!')
        } else {
            const newTask = {id: ~~(Math.random() * 1000), title: title, description: desc };
            props.addTodo(newTask); 
        }
    }
    
    return (
        <div className='container my-3'>
            <h3>Add Task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control" id="title"/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e)=> setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn-sm btn btn-primary">Add</button>
            </form>
        </div>
    )
}
