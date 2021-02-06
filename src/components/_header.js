import React from 'react';
import {Link} from 'react-router-dom';

function PageHeader(){

    return(
        <header className="pageHeader">

          <h3 className="logo">L o g o</h3>
          <menu className="menu">

                <Link to="/">
                    <h3 className="menu_item">Home</h3>
                </Link>

                <Link to="/about">
                    <h3 className="menu_item current">About</h3>
                </Link>
              
              <h3 className="menu_items">Contact Us</h3>
          </menu>
       
        </header>
    )

}

export default PageHeader;