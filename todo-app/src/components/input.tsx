import React, { useRef, createRef, useState } from 'react';
import ToDoList from './ToDo';



interface IList{
  text: string
}

function Input() {

  const [list,setList] = useState<IList>({
    text: ''
  })
    const inputRef = useRef<HTMLInputElement>(null);
    // const inputRef = createRef<HTMLInputElement>();
    function addList () {
     const text =  inputRef.current?.value || "";
     setList({...list,  text });    
     inputRef.current!.value = '';
    }
    return (
        <>
        <input ref={inputRef}
 type="text" className="mt-11 p-2 rounded-md w-3/4"/>
        <button onClick={addList} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">Add</button>
        <ToDoList textList={list}/>
        </>
    );
  }
  
  export default Input;

  // interface IList{
  //   text: string
  // }
  // function Input() {
  
  //   const [list,setList] = useState<IList>({
  //     text: ''
  //   })
  //     const inputRef = useRef<HTMLInputElement>(null);
  //     // const inputRef = createRef<HTMLInputElement>();
  //     function addList () {
  //      const text =  inputRef.current?.value || "";
  //      setList({ ...list, text });         
  //     }
  //     return (
  //         <>
  //         <input ref={inputRef}
  //  type="text" className="mt-11 p-2 rounded-md w-3/4"/>
  //         <button onClick={addList} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">Add</button>
  //         <ToDoList textList={{list}}/>
  //         </>
  //     );
  //   }