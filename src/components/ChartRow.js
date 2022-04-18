import React from 'react';
import {Link, Route} from 'react-router-dom'
import ProductList from './ProductList';


function ChartRow(props){
    return (
            <React.Fragment>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    
                </tr>
                <Route path="/productdetail" exact={true} component={ProductList}/>
            </React.Fragment>
            )
            
    }
    
        

export default ChartRow;