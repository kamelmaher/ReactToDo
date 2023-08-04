type ToDoListProps = {
    tasks: string[];
    update: (tasks:string[]) => void
}
import ToDoItem from "./ToDoItem";
export default function ToDoList({tasks , update}:ToDoListProps) {
    function remove(id:number) {
            const newArr = tasks.filter((_e , index) => index != id);
            update(newArr);
            localStorage.setItem('tasks' , JSON.stringify(newArr));
    }
    function Edit(id:number , newText:string){
        const newArr = tasks.map((e , index)=> {
            if(index == id){
                e = newText;
            }
            return e;
        });
        update(newArr);
        localStorage.setItem("tasks" , JSON.stringify(newArr))
    }
    return <>
        <ul className="list-group">
            {tasks.map((e , index)=> {
                return <ToDoItem Id= {index} key={index} title={e} remove={remove} Edit={Edit}/>
            })}
        </ul>
    </>
}