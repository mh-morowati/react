import React, { useState } from "react";


const GueseList: React.FC = () => {
    const [name,setName] = useState('');
    const [guests,setGuest] = useState<string[]>([]);
    const onClick = () => {
        setName('');
        setGuest([...guests,name])
    };
    const deletGuess = () =>{

    }

    return ( <div className="bg-pink-300 w-4/12 p-5">
        <h1 className="text-2xl">guest list</h1>

        <ul className="bg-gray-400 w-7/12 p-2 m-5	">
            {guests.map((guest) => (
                <li key={guest}>{guest}
                </li>
            ))}
            
        </ul>
        <input className="p-2" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>Add guest</button>
       
    </div> );
}
 
export default GueseList;