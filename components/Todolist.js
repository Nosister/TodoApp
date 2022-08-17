import Image from "next/image";
import { useState } from "react"


export default function Todolist() {

    const [todo,setTodo] = useState('');
    const [arrTodo,setArrTodo] = useState([
        {id: 0, text: "Meditation", complete: false },
        {id: 1, text: "Tell her about my heart", complete: false },
        {id: 2, text: "examine my life", complete: false }
    ]);
    const [light,setLight] = useState(false);
    
    const [end, setEnd] = useState("");

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
    
   
    
    function checkboxChange(id,e) {
        
        setArrTodo(arrTodo.map(
            list => 
            list.id !== id ? {...list} : {...list, complete: !list.complete,}
        ));
        

    };

    function finish() {
        setEnd("finish");
    };

    
    function unfinish() {
        setEnd("unfinish");
    };

    function all(){
        setEnd("");
    };

    

    console.log(end)
  
   console.log(arrTodo.map(x => x))

    return (
        <div className={`grid12 gap-1 ${!light ? "backgroundpic" : "backgroundpicswitch"}`}>
            <div className="gridspan3-1" />
            <div className="gridspantodo text-white text-4xl mt-7">
            <strong><h> T O D O </h></strong>
        </div>
        <div className="col-span-1 mt-8"> 
        <button onClick={()=> setLight(!light)} className={``}> 
                {light ? 
                <Image 
                width={30}
                height={30}
                src="/icon-sun.svg"
                /> :
                <Image 
                width={30}
                height={30}
                src="/icon-moon.svg"
                />
            } 
            </button>
        </div>
        <div className="gridspan4-2" />
        <div className="gridspan3-1" />


        <form className="gridspan5-9 cursor-text " onSubmit={handleClick}>
        <div className="grid grid-cols-5 ">
            <input
            className="border rounded-lg col-span-5 pt-2 pb-2 bg-white"
            type="text" 
            placeholder="PLAN YOUR DAY"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />
        </div>
        </form>

        <div className="gridspan4-2" />
        <div className="gridspan3-1" />
     
        <div className="gridspan9-5 border bg-white rounded-lg">
            
            {arrTodo.filter((x) => {

                 return end === "unfinish" ? x.complete === false 
                 : end === "finish" ? x.complete === true 
                 : x 
            } ).map((list) => 
            <div key={list.id} className="grid grid-cols-5 gap-x-1 border-b">

             <div className=" pt-2 pb-2 ml-2 mt-1  
             col-span-5 flex  
             flex-row justify-between ">          
           <div className={`text  ${list.complete ? "complete" : "text"}`}>         
           <p>
           <input type="checkbox" className={`checkbox-round  ${list.complete ? "checkbox-round2" : "checkbox-round"}`} onChange={() => checkboxChange(list.id)}/> 
           {"   "}
            
           {list.text} 
           </p>
           </div>
           
           
            
            <button className="mr-4" onClick={() => removeClick(list.id)}> X </button>
            
           </div>


            </div>
            
            )}
            <div className="opacity-25 flex justify-between mr-2">
            
            <div>
            <button onClick={finish}>Finish</button>  
            {" | "}
            <button onClick={unfinish}>UnFinish</button>      
            {" | "}      
            <button onClick={all}>All</button>      
            </div>
            <p>Nosister</p>
            
            </div>
            
            </div>
           

            <style jsx>{`
        .backgroundpic {
            background-image: url("bg-desktop-dark.jpg");
            height : 40vh;
            width : 100%;
        }

        .backgroundpicswitch {
            background-image: url("bg-desktop-light.jpg");
            height : 40vh;
            width : 100%;
        }

        .lightswitch {
            background-image : url("incon-sun.svg");
        }

        .darkswitch {
            background-image : url("incon-moon.svg");    
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

    .checkbox-round2 {
        width: 1.3em;
        height: 1.3em;
        background-color: #9966FF;
        border-radius: 50%;
        vertical-align: middle;
        border: 1px solid #ddd;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        background-image: url("icon-check.svg");
        background-repeat: no-repeat;
        background-size:  95% 90%;
        cursor: pointer;
    }

    

    .todolist {

    }

    .complete {
        text-decoration: line-through;
    }

    .complete > p{
        opacity : 0.5;
    }
    
    p {
        color: rgb(0 0 0); 
  }

  .grid12 {
    display : grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
}



.gridspan3-1 {

    grid-column: span 1 / span 1;
  }
  
  @media (min-width:480px)   {
    .gridspan3-1 {
        grid-column: span 3 / span 3;
      }
    }


.gridspantodo {
    grid-column: span 8 / span 8 ;
}
    @media (min-width:480px) {
        .gridspantodo {
        grid-column: span 4 / span 4;   
    }
}

    .gridspan4-2{

        grid-column: span4 / span4;
      }
      
      @media (min-width:480px)   {
        .gridspan4-2 {
            grid-column: span 2 / span 2;
          }
        }

        .gridspan5-9{

            grid-column: span 5 / span 5;
          }
          
          @media (max-width:480px)   {
            .gridspan5-9 {
                grid-column: span 9 / span 9;
              }
            }

     .gridspan9-5{

            grid-column: span 5 / span 5;
          }
          
          @media (max-width:480px)   {
            .gridspan9-5 {
                grid-column: span 9 / span 9;
              }
            }        
    

      `}</style>
        </div>
    )
}