import { list } from "postcss";
import { useState } from "react"


export default function Todolist() {

    const [todo,setTodo] = useState('');
    const [arrTodo,setArrTodo] = useState([
        {id: 0, text: "Meditation", complete: false },
        {id: 1, text: "Tell her about my heart", complete: false },
        {id: 2, text: "examine my life", complete: false }
    ]);
    const [light,setLight] = useState(false);
    


    function handleClick(e) {
        e.preventDefault();
        setArrTodo(
            !todo ? arrTodo : [...arrTodo, {id: arrTodo.length, text: todo, complete: false }]
        );
        setTodo('');
    }

    function removeClick(id) {
        setArrTodo(arrTodo.filter(list => list.id !== id));
    };
    
   
    
    function checkboxChange(id) {
        setArrTodo(arrTodo.map(
            list => 
            list.id !== id ? {...list} : {...list, complete: !list.complete}
        ))
    }
  
   console.log(arrTodo.map(x => x))
//grid grid-cols-12 gap-1 backgroundpic
    return (
        <div className={`grid grid-cols-12 gap-1 ${!light ? "backgroundpic" : "backgroundpicswitch"}`}>
            <div className="col-span-3" />
            <div className="col-span-2  text-4xl mt-7 text-white">
            <strong><p>
                T O D {"  "}

                <input type="checkbox" onChange={()=> setLight(!light)} className="checkbox-light mb-2"/>
                </p></strong>
        </div>
        
        <div className="col-span-6" />
        <div className="col-span-3" />

        <form className=" col-span-4 cursor-text " onSubmit={handleClick}>
        <div className="grid grid-cols-4 ">
            <input
            className="border rounded-lg col-span-4 pt-2 pb-2"
            type="text" 
            placeholder="PLAN YOUR DAY"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />
        </div>
        </form>

        <button className="border col-span-1 rounded-lg bg-white " onClick={handleClick}>plan</button>
        <div className="col-span-4" />
        <div className="col-span-3" />
     
        <div className="col-span-5 border bg-white rounded-lg">
            
            {arrTodo.map((list) => 
            <div key={list.id} className="grid grid-cols-5 gap-x-1 border-b">

             <div className=" pt-2 pb-2 ml-2 mt-1  
             col-span-5 flex  
             flex-row justify-between ">          
           <div className={`text  ${list.complete ? "complete" : "text"}`}>         
           <input type="checkbox" className="checkbox-round" onChange={() => checkboxChange(list.id)}/> 
           {"   "}
            
           {list.text} 
           
           </div>
           
           
            
            <button className="mr-4" onClick={() => removeClick(list.id)}> X </button>
            
           </div>


            </div>
            
            )}
            <div className="opacity-25 text-end mr-2">
            <p>Nosister</p>
            </div>
            </div>

            <style jsx>{`
        .backgroundpic {
            background-image: url("bg-desktop-dark.jpg");
            height : 40vh;
        }

        .backgroundpicswitch {
            background-image: url("bg-desktop-light.jpg");
            height : 40vh;
        }

        .checkbox-light {
            
            width: 0.7em;
            height: 0.7em;
            background-color: white;
            border-radius: 50%;
            vertical-align: middle;
            border: 5px solid #fff;
            appearance: none;
            -webkit-appearance: none;
            outline: none;
            cursor: pointer;
        }

        .checkbox-light:checked {
            background-color: rgba(0, 0, 0, 0);
        }

       .checkbox-round {
        width: 1.3em;
        height: 1.3em;
        background-color: white;
        border-radius: 50%;
        vertical-align: middle;
        border: 1px solid #ddd;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;
    }

    .checkbox-round:checked {
        background-color: green;
    }

    .todolist {

    }

    .complete {
        text-decoration: line-through;
        opacity: 0.5;
    }

      `}</style>
        </div>
    )
}