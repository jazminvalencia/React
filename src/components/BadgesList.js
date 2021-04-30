import React from 'react';
import './style/BadgeList.css'

import {Link} from 'react-router-dom'
import Gravatar from './Gravatar'

function useSearchBadges (badge){
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setfilteredBadges] = React.useState(badge);
    React.useMemo(() => {
       const result =  badge.filter(badge => {
       return `${badge.firstName} ${badge.lastName}`
       .toLowerCase()
       .includes(query.toLowerCase());
        });
        setfilteredBadges(result);
    }, [ badge,query]);
    return {query ,setQuery, filteredBadges}
}

function BadgesList(props) {
    const badge = props.badge
    const {query,setQuery, filteredBadges} = useSearchBadges(badge);
   
    if(filteredBadges.length === 0 ){
        return(
            <div>
                <div className='form-group'>
                    <label>Filter Badges</label>
                    <input type='text' 
                    className='form-control' 
                    value={query} 
                    onChange={ (e) => {
                        setQuery(e.target.value);
                    }}/>
                </div>
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
        <div className='BadgesList'>
            <div className='form-group'>
                <label>
                    Filter Badges
                </label>
                <input type='text' 
                className='form-control' 
                value={query} 
                onChange={ (e) => {
                    setQuery(e.target.value);
                }}/>
            </div>
            <ul className='list-unstyled '>
                {filteredBadges.map(badge => {
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
        </div>
      
    );
}


export default BadgesList;