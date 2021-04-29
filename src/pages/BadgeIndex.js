import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

import badgeHeade from '../images/badge-header.svg'
import '../components/style/BadgeIndex.css'

class BadgeIndex extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="BadgeIndex__container">
                    <div className='BadgeIndex__container-img'>
                        <img className="BadgeIndex-img" src={badgeHeade}></img>
                        
                    </div>
                    <div className="Badge__btn">
                        <Link to="/bages" className="btn btn-primary ">
                            Bages
                        </Link>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
}

export default BadgeIndex;