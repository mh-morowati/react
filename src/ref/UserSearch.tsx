import React, { useEffect, useRef, useState } from "react";

const users = [
    {name: 'sarah', age:20},
    {name: 'alex', age:20},
    {name: 'maximial', age:20}
]
const UserSearch:React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name,setName] = useState('');
    const [user,setUser] = useState<{name: string, age: number} | undefined>();

    useEffect(() =>{
        inputRef.current?.focus()
    },[])
    const onClick = () =>{
        const foundUser = users.find((user) =>{
            return user.name === name;
        });
        setUser(foundUser)
    }
    return ( <>
    <div>user search</div>

    <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)}/>
    <button onClick={onClick}>Find User</button>
    <div>
        {user && user?.name}
    </div>
    </> );
}
 
export default UserSearch;