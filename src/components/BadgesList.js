import React from 'react';
import './style/BadgeList.css'

import {Link} from 'react-router-dom'

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
                        <img className='BadgeList-image' src={badge.avatarUrl} alt="avtar"></img>
                        <div>
                           <strong><p>{badge.firstName} {badge.lastName}</p></strong>
                            <p  className="twitter-text">@{badge.twitter}</p>
                            <p>{badge.jobTitle}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
        );
    }
}

export default BadgesList;