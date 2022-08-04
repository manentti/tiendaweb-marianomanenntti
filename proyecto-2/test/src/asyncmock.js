const products = [
    { 
        id: '1', 
        name: 'carta 1', 
        price: 1000, 
        category: '2', 
        img:'https://images-na.ssl-images-amazon.com/images/I/51NwJRqrX-L.__AC_SX300_SY300_QL70_FMwebp_.jpg', 
        stock: 25, 
        description:'Descripcion de Iphone 12'
    },
    { id: '2', name: 'carta 2', price: 800, category: 'echizo', img:'https://i.ebayimg.com/images/g/hp4AAOSwjVVVsbIO/s-l500.jpg', stock: 16, description:'Descripcion de Samsung s21'},
    { id: '3', name: 'carta 3', price: 1200, category: 'trampa', img:'https://http2.mlstatic.com/D_NQ_NP_941920-MLA31083766816_062019-O.webp', stock: 10, description:'Descripcion de Ipad'}
]


export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        const productsFiltered = products.filter(prod => prod.category ===categoryId)


        setTimeout(() => {
            resolve (categoryId ? productsFiltered :products)
        }, 1000)
    })
}

export const getProductsById=(id)  => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id ===id))
        }, 1000)
    })
}