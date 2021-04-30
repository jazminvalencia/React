import React from 'react';

import {Link} from 'react-router-dom'
import badgeHeade from '../images/platziconf-logo.svg'
import '../components/style/BadgeDetails.css'
import Pageloding from '../components/PageLoading'
import PageError from '../components/PageError'
import Badge from '../components/Badge'
import PageLoading from '../components/PageLoading';
import api from '../api'
import Badges from './Badges';

class BadgeDetails extends React.Component{
    state = {
        loading:true,
        error:null,
        data:undefined
    };
    componentDidMount(){
        this.fetchData()
    }
    fetchData = async () => {
        this.setState({loading:true, error:null})

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading:false,data:data})
        } catch (error) {
            this.setState({loading:false,error:error})
        }
    }

    render() {
        if(this.state.loading){
            return <PageLoading></PageLoading>
        }
        if(this.state.error) {
            return<PageError error={this.state.error}></PageError>
        }

        const badge = this.state.data
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
                                    <button className='btn btn-danger'>delete</button>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>    
            </div>
        )
    }
}

export default BadgeDetails;