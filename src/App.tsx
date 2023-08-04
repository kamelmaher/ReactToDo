import { useEffect, useState } from "react";
import ToDoForm from "./components/ToDoForm"
import ToDoList from "./components/ToDoList"

function App() {
  const [arr , setArr] = useState<string[]>([]);
  
  useEffect(()=> {
    const Data = localStorage.getItem("tasks");
    if(Data){
      const newData = JSON.parse(Data);
      setArr(newData);
    }
  } , [])

  function addItem (item:string) {
    const newArr = [item , ...arr];
    setArr(newArr);
    // Local Storage
    localStorage.setItem("tasks" , JSON.stringify(newArr));
  }
  function updateArray(tasks:string[]) {
    setArr(tasks)
  }
  return (
    <div className="w-50 m-auto mt-5">
      <h1 className="mb-3">To Do List</h1>
      <ToDoForm handleClick = {addItem}/>
      <ToDoList tasks={arr} update = {updateArray}/>
    </div>
  )
}
export default App
