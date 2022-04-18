import React, {useState, useEffect} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

function ContentRowMovies(){
    let [countProducts, setCountProducts] = useState(0)
    let [countUsers, setCountUsers] = useState(0)
    let [countGenre, setCountGenre] = useState(0)

    //
    useEffect(() => {
        fetch(`https://indefined.herokuapp.com/api/products`)
        .then(function(response){return response.json()})
        .then(function(data) {
            
            
            setCountProducts(data.count)
            setCountGenre(data.countByCategory)

            
        })
        fetch(`https://indefined.herokuapp.com/api/users`)
        .then(function(response){return response.json()})
        .then(function(data) {
            
            setCountUsers(data.count)
            
        })

    }, []) //Etapa montaje
 

    let moviesInDB = {
        title: 'Total de productos',
        color: 'primary', 
        cuantity: countProducts,
        icon: 'fa-clipboard-list'
    }
    

    
    let totalAwards = {
        title:' Total de usuarios', 
        color:'primary', 
        cuantity: countUsers,
        icon:'fa-solid fa-users'
    }
    
    
    let actorsQuantity = {
        title:'Total categorías' ,
        color:'primary',
        cuantity: countGenre,
        icon:'fa-solid fa-chart-pie'
    }
    let cartProps = [moviesInDB, totalAwards,actorsQuantity];


    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;