import React from 'react';
import image from '../assets/images/x-3d.png';

import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb'
import LastProductInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';
import ContentWrapper from './ContentWrapper';
import UserList from './UserList'

import {Link, Route, Switch} from 'react-router-dom'
import ProductDetail from './ProductList';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/" exact="true">
                    <div className="sidebar-brand-icon">
                        <img className="w-100"  src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/contentwrapper" exact="true">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - XPERSON</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/genresindb" exact="true">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorías</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/lastproductindb" exact="true">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último Producto en DB</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/lastuserindb" exact="true">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último Usuario en DB</span></Link>
                </li>

                

                <li className="nav-item">
                    <Link className="nav-link" to="/productsList" exact="true">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Lista de Productos</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/userList" exact="true">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Lista de Usuarios</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
            {/*Sistema de Ruteo*/}
            
                <Switch>
                <Route path="/" exact={true} component={ContentWrapper}/>  
                
                <Route path="/genresindb" component={GenresInDb}/>
                <Route path="/lastproductindb" component={LastProductInDb}/>
                <Route path="/lastuserindb" component={LastUserInDb}/>
                <Route path="/productsList" component={ProductDetail}/>
                <Route path="/userList" component={UserList}/>  
                <Route path="/contentwrapper" component={ContentWrapper}/>
                </Switch>

        </React.Fragment>
    )
}
export default SideBar;