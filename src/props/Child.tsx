import React from "react";


interface ChaildProps {
    color: string,
    onClick: () => void
}
 
const Chaild: React.FC<ChaildProps> = ({color,onClick}) => {
    return ( <div>
        {color}
        <button onClick={onClick}>click</button>
    </div> );
}
 
export default Chaild;