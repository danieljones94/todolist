import React, { Component } from 'react';
import { Link } from "@reach/router";

class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default Nav;