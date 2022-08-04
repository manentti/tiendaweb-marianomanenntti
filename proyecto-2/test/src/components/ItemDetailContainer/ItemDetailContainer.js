import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncmock"
import ItemDetail from "../ItemDtail/ItemDtail"



const ItemDetailContainer= () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        (async () => {
            try {
                const response = await getProductsById("1")
                setProduct(response)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    if(loading) {
        return <h1>cargando..</h1>
    }


    return (
      <>
         <h1>Delate</h1>
         <ItemDetail {...product}/>
      </>
    )
}

export default ItemDetailContainer