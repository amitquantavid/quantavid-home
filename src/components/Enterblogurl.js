import React, { useState } from 'react';
import './enterblogurl.css';
import TodoList from './TodoList';

const Enterblogurl = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value)
    };
    const listofItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };
    const deleteItems = (id) => {
        // console.log("deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;

            })
        })
    }

    return (

        <div className="container" >
            <div class="row pt-5">
                <div class="col">
                    <h1 class="heading text-left mt-5">Enter blog URL</h1>
                </div>
            </div>
            <div class="container-fluid">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-9">
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group col-md-3">
                            <button type="submit" class="btn btn-primary w-100 ">Submit</button>
                        </div>
                    </div>
                    <br></br>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="exampleFormControlTextarea3">Text from your blog</label>
                            <textarea class="form-control" id="exampleFormControlTextarea3" rows="10"></textarea>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="exampleFormControlTextarea3">Summary</label>
                            <textarea class="form-control" id="exampleFormControlTextarea3" rows="10"></textarea>
                        </div>
                    </div><br></br>

                    <div className="row">
                        <div className="container overflow-hidden">
                            <div className="col-12 mb-3 box">
                                <div class="form-row ">
                                    <div class="form-group col-md-12 "  >
                                        <ol className="d-inline-flex list-unstyled mt-4 " style={{display: 'flex', flexWrap: 'wrap',width:'100%', height:'100%'}} >
                                            {Items.map((itemval, index) => {
                                                return <TodoList
                                                    key={index} id={index}
                                                    text={itemval}
                                                    onSelect={deleteItems}
                                                />;
                                            })}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mb-3">
                            <div class="form-row ">
                                <div className="textbox  col-md-9 ">
                                    <input type="text" value={inputList} id="form1" onChange={itemEvent} className="form-control icss input-style" placeholder="add a item" />
                                </div>
                                <div class="textbox col-md-3">
                                    <button type="button" onClick={listofItem} className="btn btn-primary w-100 button-style font-weight-bold">ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col text-center">
                        <button class="btn btn-default btn-primary w-22">Generate Video</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Enterblogurl
