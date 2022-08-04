import { Link } from "react-router-dom"
const Item = ({id, name,img,price}) => {
    return (
        <article>
             <header>
                <h2>{name}</h2>
             </header>
              <picture>
                  <img src={img} alt={name}/>
                </picture>
              <section>
               <p>
                   price: ${price}
               </p>
               <footer>
                   <Link to={`/detail/${id}`}>Ver detalle</Link>
               </footer>
            </section>
           </article>
    )
}

export default Item