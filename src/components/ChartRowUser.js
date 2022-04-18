import React from 'react';
import {Link, Route} from 'react-router-dom'
import UserList from './UserList';


function ChartRow(props){
    return (
            <React.Fragment>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{props.rol}</td>
                    <td><img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10+'rem'}} src={'https://indefined.herokuapp.com/images/user-image/'+props.avatar} alt=" avatar "/></td>
                    
                </tr>
                <Route path="/productdetail" exact={true} component={UserList}/>
            </React.Fragment>
            )
            
    }
    
        

export default ChartRow;