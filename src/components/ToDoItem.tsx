import { useState } from "react";

type ToDoItemProps = {
    title: string;
    Id:number
    remove: (id:number) => void
    Edit: (id:number , newText:string) => void
}
export default function ToDoItem ({title , remove , Edit , Id}:ToDoItemProps) {
    const [edit , setEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    if(edit){
        return <>
        <li className="input-group d-flex list-group-item justify-content-between align-items-center">
            <input type="text" className="form-control" value={newTitle} onChange={e=> {
                setNewTitle(e.target.value);
            }}/>
            <button className="input-group-text btn btn-primary" onClick={()=> {
                Edit(Id , newTitle);
                setEdit(false)
            }}>save</button>
        </li>
        </>
    }
    return <>
        <li className="d-flex list-group-item justify-content-between align-items-center">
            <p>{title}</p>
            <div className="d-flex gap-4">
                <button className="btn btn-primary" onClick={()=> {
                    remove(Id);
                }}>Remove</button>
                <button className="btn btn-primary" onClick={()=> {
                    setEdit(true);
                }}>Edit</button>
            </div>
        </li>
    </>
}