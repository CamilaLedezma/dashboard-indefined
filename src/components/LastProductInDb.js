
import React, {useState, useEffect} from 'react';


function LastProductInDb(){
    let [ultimoProducto, setDetailUltimoProducto] = useState({})
    useEffect(() => {
        fetch(`https://indefined.herokuapp.com/api/lastProduct`)
        .then(function(response)  {
            return response.json()
        })
        .then(function(data)  {
            setDetailUltimoProducto(data.lastProduct)
        })
    }, []) 
    

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                </div>
               
                {
                    
                    <div className="card-body">
                    <div className="text-center">
                        {
                            
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'https://indefined.herokuapp.com/images/product-image/'+ultimoProducto.image} alt=" ultimo producto"/>}
                    </div>
                    
                    <p>Titulo: {ultimoProducto.name}</p>
                    <p>Descripcion: {ultimoProducto.description}</p>
                    <p>Precio: {ultimoProducto.price}</p>
                    <p>Categoría: {ultimoProducto.category}</p>
                    
                </div>
                }
            </div>
        </div>
    )
}

export default LastProductInDb;
