
import { useState,useEffect } from "react";

interface IList {
    text: string;
  }
  
  interface ToDoListProps {
    textList: IList;
  }
  interface ITodo {
    
    text: string;
  }
  const ToDoList: React.FC<ToDoListProps> = ({ textList }) => {

    const todo = [{text: textList.text }];
    let todos = [...todo,{text: textList.text }];

   const deleteText = (text: string) =>{
    
   }
   
    return (<>

        {todos?.map(todo => <div className=" bg-gray-100 text-left text-xl mt-2 p-1 font-sans w-10/12 rounded-md" key={todo.text}>{todo.text}
         <button onClick={() => deleteText(todo.text)} className="float-right bg-red-700 hover:bg-red-900  text-white rounded-full font-bold">X</button></div>)}
    </>);
}

export default ToDoList;