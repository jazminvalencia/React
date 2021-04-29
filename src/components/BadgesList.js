import React from 'react';
import './style/BadgeList.css'

import {Link} from 'react-router-dom'
import Gravatar from './Gravatar'

class BadgesList extends React.Component {
    render() {

        if(this.props.badge.length === 0 ){
            return(
                <div>
                    <h3>
                        badges were no fount 
                    </h3>
                    <Link className='btn btn-primary' to='/bages/new'>
                        Create new badges
                    </Link>
                </div>
            )
        }

        return (
            <ul className='list-unstyled '>
            {this.props.badge.map(badge => {
                return(
                    <li className='BadgeList__container' key={badge.id}>
                        <Link className='BadgeList__container-link text-reset text-decoration-none' to={`bages/${badge.id}`}>
                            <Gravatar className='BadgeList-image' email={badge.email} alt="avtar"></Gravatar>
                            <div>
                            <strong><p>{badge.firstName} {badge.lastName}</p></strong>
                                <p  className="twitter-text">@{badge.twitter}</p>
                                <p>{badge.jobTitle}</p>
                            </div>
                        </Link>
                        
                    </li>
                )
            })}
        </ul>
        );
    }
}

export default BadgesList;