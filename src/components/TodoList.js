import React from 'react';
const TodoList = (props) => {
    // const deleteItems = () => {
    //     console.log("deleted");
    // }
    return (
        <>
            <div className="container" style={{width: 'max-content'}}>
                <div className="row ">
                    <div className="col-12">
                        <div className="todo_style">
                            <li className="d-inline-flex text-left font-weight-bold ml-2">
                                {props.text}</li>

                            <i className="fa fa-times " aria-hidden="true" onClick={() => {
                                props.onSelect(props.id);
                            }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TodoList;