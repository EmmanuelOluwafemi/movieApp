import React from 'react';
import { Link } from '@reach/router';

import RMDBLogo from '../images/reactMovie_logo.png';

// Import Style
import { 
    StyledHeader, 
    StyledRMDBLogo,
} from '../styles/StyledHeader';

const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <div className="logo">SMovie</div>
            </Link>
            
            <Link className="navLink" to="/watchlist">
                <h3>WatchList</h3>
            </Link>
        </div>
    </StyledHeader>
)

export default Header;