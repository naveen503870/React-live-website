import React, {useState} from 'react';
import web from './image/dragon.png';

const Todo = () => {
    
    const[inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const listOfItem = () => {
setItems((oldItems) => {
return [...oldItems, inputList];
});
setInputList("");
    };
    return(
<>

<div className="main_div">
<div className="center_div">
    <br />
    <h1 className="h12">To DO List</h1> 
    <br />
    <input className="inputTo" type="text" placeholder="add items"
    value={inputList} 
    onChange={itemEvent}/>
    <button className="btn2" onClick={listOfItem}> + </button>


        <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true"></i>
        {Items.map( (itemval) => {
            return <li>{itemval}</li>
        })}
        </div>
  
</div>
{/* <div className="col-lg-6 order-1 order-lg-2 header-img2">
    <img src={web} className="img-fluid animated" alt="home img" />
</div> */}
</div>

</>
    );
};
export default Todo;