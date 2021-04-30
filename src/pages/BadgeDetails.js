import React from 'react'
import {Link} from 'react-router-dom'
import badgeHeade from '../images/platziconf-logo.svg'
import '../components/style/BadgeDetails.css'
import Badge from '../components/Badge'

import PageLoading from '../components/PageLoading';
import api from '../api'
import DeleteBadgeModal from '../components/DeleteBadgeModal'


function BadgeDetails (props) {
    const badge = props.badge

    return (
        <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={badgeHeade} alt='logo platzi conf'></img>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Badge
                            firstName={badge.firstName} 
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}/>
                        </div> 
                        <div className='col'>
                            <h2>Actions</h2>
                            <div>
                                <div>
                                    <Link className='btn btn-primary mb-4' to={`/bages/${badge.id}/edit`}>Edit</Link>
                                </div>
                                <div>
                                    <button onClick={props.onOpenModal} className='btn btn-danger'>delete</button>
                                    <DeleteBadgeModal 
                                    isOpen={true} 
                                    isOpen={props.modalIsOpen} 
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge}/>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>    
            </div>
    )
}

export default BadgeDetails