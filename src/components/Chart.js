import React, {useState, useEffect} from 'react';
import ChartRow from './ChartRow';


function Chart (){
    let [productosEstado, setProductosEstado] = useState([])
    

    useEffect(() => {
        fetch(`https://indefined.herokuapp.com/api/products`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            setProductosEstado(data.products)
        })
        
    }
    , []) 

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Detalle</th>
                                
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Detalle</th>
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

export default Chart;