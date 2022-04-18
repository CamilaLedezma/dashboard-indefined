
import React, {useState, useEffect} from 'react';
import ChartRow from './ChartRow';

function ProductDetail(){
    let [productosEstado, setProductosEstado] = useState([])

    useEffect(() => {
        fetch(`https://indefined.herokuapp.com/api/productList`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            setProductosEstado(data.products)
            console.log(data)
        })
    }, [])
return(
    <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Descuento</th>
                                <th>Stock</th>
                                <th>Stock min</th>
                                <th>Stock max</th>
                                <th>Color</th>
                                <th>Talle</th>
                                <th>Categoría</th>
                                <th>Imagen</th>
                                
                                
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Descuento</th>
                                <th>Stock</th>
                                <th>Stock min</th>
                                <th>Stock max</th>
                                <th>Color</th>
                                <th>Talle</th>
                                <th>Categoría</th>
                                <th>Imagen</th>
                                
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            productosEstado.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )

}

export default ProductDetail;