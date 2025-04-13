import {useState } from "react"


function RecuadroTablero({value,changeTurn,turn}){
        const [visible,setVisible] = useState(false)

    return (
        <div onClick={changeTurn} onMouseEnter={() => setVisible(true)} onMouseLeave={()=> setVisible(false)}      className="text-5xl transition-all duration-300 ease-in-out hover:shadow-2xl shadow-blue-500/20   text-center flex items-center justify-center text-white  h-20 w-20  md:w-32  md:h-32 border rounded border-white ">
            {value}
            {(visible  && value == null ) && (
                <>
                <span className="text-gray-600">
                {turn}
                </span>
                </>
            )}
        </div>

    )
}

export default RecuadroTablero