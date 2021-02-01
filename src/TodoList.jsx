import React from 'react'

const TodoList = (props) => {

    return (
        <>
            <div className="todo__style">
                <i className="far fa-times-circle" 
                    onClick = {() => {
                        props.onSelect (props.id)
                    }} 
                    />
                <li> {props.text} </li>
            </div>
        </>
    )
}

export default TodoList;
