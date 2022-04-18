import React, {useState, useEffect} from 'react';
import ChartRowUser from './ChartRowUser';

function UserList(){
    let [productosEstado, setProductosEstado] = useState([])

    useEffect(() => {
        fetch(`https://indefined.herokuapp.com/api/usersList`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            setProductosEstado(data.users)
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
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Avatar</th>
                                
                                
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Avatar</th>
                                
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            productosEstado.map( ( row , i) => {
                                return <ChartRowUser { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )

}

export default UserList;