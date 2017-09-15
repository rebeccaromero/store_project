import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <Link to ='/shop'> HOME </Link>
                <Link to ='/shop/about'> About Us </Link>
                <Link to ='/shop/products'> Products </Link>
                <Link to ='/shop/products/sale'> Sale </Link>
            </div>
            );
        }
    }
    
    
    {/* <div className="dropdown">
    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Products
    <span className="caret"></span></button>
    <ul className="dropdown-menu">
    <li>Womens</li>
    <li>Mens</li>
    <li>Girls</li>
    <li>Boys</li>
    <li>Sale</li>
    </ul>
</div> */}


{/* <div>
    <Dropdown toggle={this.toggle} >
        <DropdownToggle caret>
            Products
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem >Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</div> */}