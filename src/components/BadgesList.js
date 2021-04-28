import React from 'react';
import './style/BadgeList.css'

class BadgesList extends React.Component {
    render() {
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