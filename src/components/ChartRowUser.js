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
                    
                </tr>
                <Route path="/productdetail" exact={true} component={UserList}/>
            </React.Fragment>
            )
            
    }
    
        

export default ChartRow;