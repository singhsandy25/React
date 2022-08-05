import React from 'react'
import { Todo } from './Todo';

export const Todos = (props) => {

  const list = {
    minHeight: '70vh',
  }

  return (
    <div className='container my-3' style={list}>
      <h2 className='text-center'>ToDo List</h2>
      {
        props.todos.length ? props.todos.map(s => { return <><Todo todo = {s} key={s.id} onDelete={props.onDelete}/><hr/></>}) : 'No data to show...'
      }
    </div>
  )
}
