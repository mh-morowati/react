import React from "react";


const EventComponent:React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement> ) =>{
         console.log(event)
        } 
        const onDragStart = (event: React.DragEvent<HTMLDivElement> ) =>{
            console.log(event)
           } 
    return ( <div>
        <input type="text" onChange={onChange}/>
        <div onDragStart={onDragStart}>
            Drag me!
        </div>
    </div> );
}
 
export default EventComponent;