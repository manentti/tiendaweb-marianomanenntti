import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {
    const [count, setCout] = useState(1)

    const decremet = () => {
        if(count > 1){
            setCout(prev => prev -1)
        }
    }

    const increment = () => {
        if(count < stock){
            setCout(prev => prev +1)
        }
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decremet}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>agregar al carro</button>

        </div>
    )
}

export default ItemCount