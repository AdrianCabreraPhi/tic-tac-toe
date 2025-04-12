import { useEffect } from "react"


function RecuadroTablero({value,changeTurn}){

    return (
        <div onClick={changeTurn}  className="text-5xl transition-all duration-300 ease-in-out hover:shadow-2xl shadow-blue-500/20   text-center flex items-center justify-center text-white min-h-32 min-w-32 border rounded border-white ">
            {value}
        </div>

    )
}

export default RecuadroTablero