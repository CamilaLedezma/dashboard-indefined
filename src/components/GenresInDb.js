import React, {useState, useEffect} from 'react';
import Genre from './Genre'

function GenresInDb() {
  let [generoLista, setGeneroLista] = useState([])

  useEffect(() => {
    fetch(`https://indefined.herokuapp.com/api/products`)
    .then(function(response){
        return response.json()
    })
    .then(function(data)  {
        setGeneroLista(data.typesCategory)
    })
}, []) 
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Cantidad de productos según categorías
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
              generoLista.length > 0 &&
              generoLista.map((genero, id) => 
              {
                return <Genre {...genero} key={id} />
              })
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
