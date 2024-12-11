import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";


function Todo() {

  const [todo, setTodo] = useState("");  //todo is the input text 
  const [todos, setTodos] = useState([]); //it is array which hold all todo
  const [showFinished, setShowFinished] = useState(true);//it show finished todos

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
    let todos = JSON.parse(todoString);
    setTodos(todos);
    }
  },[]);

  const saveToLS = (param) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setShowFinished(!showFinished);
  }

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id)
    setTodo(t[0].todo); 
    // update
    let newTodos = todos.filter((item => {
      return item.id !== id ;
     }));
     setTodos(newTodos);
     saveToLS();
    }
  
  const handleDelete = (e, id) => {
    console.log(`the id is ${id}`);
     let newTodos = todos.filter((item => {
      return item.id !== id ;
     }));
     setTodos(newTodos);
     saveToLS();
  };
  const handleAdd = () => {
    setTodos([...todos, {id:uuidv4(), todo, isCompleted : false}])
    setTodo("");
    console.log(todos);
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
    saveToLS();
  };
  const handleCheckbox = (e) => {
    console.log(e, e.target);
   let id = e.target.name;
   let index = todos.findIndex(item => {
    return(item.id === id);
   })
   let newTodos = [...todos];
   newTodos[index].isCompleted = !newTodos[index].isCompleted;
   setTodos(newTodos);
   saveToLS();
  }

  return ( 
    <>
      <div className="md:container mx-3  md:mx-auto my-5 rounded-xl p-10 bg-violet-300 min-h-[80vh] md:w-1/2">
      <h1 className="font-bold text-center text-xl">iTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col">
          <h2 className="text-lg font-bold">Add your work to remember</h2>
          <input onChange={handleChange} value={todo} type="text" className="w-full bg-white rounded-lg px-5 py-1" />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className="bg-violet-800 hover:bg-violet-950 disabled:bg-violet-700 p-3 py-1 text-sm font-bold text-white rounded-md mx-[40%] mt-3"
          >
            Add
          </button>
        </div> 
        <input className="my-4" id="show" onClick={toggleFinished} type="checkbox" checked={showFinished}/> 
        <label className="mx-2" htmlFor="show">Show Finished</label>
        {/* <hr/> */}
        <div className="h-[2px] bg-black opacity-30 w-[90%] mx-auto my-4"></div>
        <h2 className="text-lg font-bold">Your Todos</h2>

        <div className="todos">
        {
          todos.length === 0 && <div className="m-5 text-4xl">Not todos to display</div>
        }
        {
          todos.map((item) => {
            return(
              (showFinished || !item.isCompleted) &&
              <div key={item.id} className="todo flex md:w-1/2 justify-between my-3 ">
              <div className="flex gap-5">
              <input name={item.id} onChange={(e) => {handleCheckbox(e, item.id)}} type="checkbox" id="" checked={item.isCompleted}/>
            <div className={item.isCompleted? "line-through" : ""}>{item.todo}</div>
              </div>
               <div className="buttons flex h-full">
              <button
                onClick={(e) => {handleEdit(e, item.id)}}
                className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-2"
              >
                <FaEdit />
              </button>
              <button
                onClick={(e) => {handleDelete(e, item.id)}}
                className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-2"
              >
                <RiDeleteBin5Fill/>
              </button>
            </div>
          </div>
            )
          })
        }
         
        </div>
      </div>
    </>
  );
}

export default Todo;
