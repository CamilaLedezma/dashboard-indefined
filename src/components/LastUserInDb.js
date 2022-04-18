
import React, {useState, useEffect} from 'react';


function LastUserInDb(){
    let [ultimoUsuario, setDetailUltimoUser] = useState({})
    useEffect(() => {
        fetch(`https://indefined.herokuapp.com/api/lastUser`)
        .then(function(response)  {
            return response.json()
        })
        .then(function(data)  {
            setDetailUltimoUser(data.lastUser)
        })
    }, []) 
    

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último usuario agregado</h5>
                </div>
               
                {
                    
                    <div className="card-body">
                    <div className="text-center">
                        {
                            
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'https://indefined.herokuapp.com/images/user-image/' +ultimoUsuario.avatar} alt=" Star Wars - Mandalorian "/>}
                    </div>
                    
                    <p>Titulo: {ultimoUsuario.name}</p>
                    <p>Nombre: {ultimoUsuario.name}</p>
                    <p>Email: {ultimoUsuario.email}</p>
                    <p>Rol: {ultimoUsuario.rol}</p>
                    
                </div>
                }
            </div>
        </div>
    )
}

export default LastUserInDb;