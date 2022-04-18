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
                    <td>{props.price}</td>
                    <td>{props.discount}</td>
                    <td>{props.stock}</td>
                    <td>{props.stock_min}</td>
                    <td>{props.stock_max}</td>
                    <td>{props.color}</td>
                    <td>{props.size}</td>
                    <td>{props.category}</td>
                    <td><img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'https://indefined.herokuapp.com/images/product-image/'+props.image} alt=" product"/></td>
                    
                </tr>
                <Route path="/productdetail" exact={true} component={ProductList}/>
            </React.Fragment>
            )
            
    }
    
        

export default ChartRow;