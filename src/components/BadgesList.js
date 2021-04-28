import React from 'react';
import './style/BadgeList.css'

class BadgesList extends React.Component {
    render() {
        return (
            <ul className='list-unstyled '>
            {this.props.badge.map(badge => {
                return(
                    <li className='BadgeList__container' key={badge.id}>
                        <img src={badge.avatarUrl} alt="avtar"></img>
                        <p>{badge.firstName} {badge.lastName}</p>
                        <p>{badge.twitter}</p>
                        <p>{badge.jobTitle}</p>

                    </li>
                )
            })}
        </ul>
        );
    }
}

export default BadgesList;