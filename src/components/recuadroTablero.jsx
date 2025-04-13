import {useState } from "react"


function RecuadroTablero({value,changeTurn,turn}){
        const [visible,setVisible] = useState(false)

    return (
        <div onClick={changeTurn} onMouseEnter={() => setVisible(true)} onMouseLeave={()=> setVisible(false)}      className="text-5xl transition-all duration-300 ease-in-out hover:shadow-2xl shadow-yellow-500/20   text-center flex items-center justify-center text-white  h-20 w-20  md:w-32 bg-gradient-to-br from-neutral-800 to-neutral-950  md:h-32  rounded  ">
            {value}
            {(visible  && value == null ) && (
                <>
                <span className="text-neutral-700">
                {turn}
                </span>
                </>
            )}
        </div>

    )
}

export default RecuadroTablero