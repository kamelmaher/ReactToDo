import { useState } from "react";

type ToDoListProps = {
    handleClick: (item:string)=> void
} 
export default function ToDoForm({handleClick}:ToDoListProps) {
    const [item , setItem] = useState("");
    return <>
        <div className="input-group mb-4">
            <input value={item} type="text" className="form-control" onChange={e=> setItem(e.target.value)}/>
            <button className="input-group-text btn btn-primary" onClick={()=> {
                handleClick(item);
                setItem("")
            }}>Add</button>
        </div>
    </>
}