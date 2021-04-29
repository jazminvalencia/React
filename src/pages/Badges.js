import React from 'react'
import BadgeNasList from '../components/BadgesList'
import '../components/style/Badges.css'
import conf from '../images/badge-header.svg'
import {Link} from 'react-router-dom' 
import  PageLoading from '../components/PageLoading';
import  PageError from '../components/PageError';
import api from '../api'

class Badges extends React.Component{
 
    state = {
        loading: true,
        error:null,
        data: undefined
    }
    
    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () =>{
        this.setState({loading:true, error:null})
        
        try{
            const data = await api.badges.list();
            this.setState({loading: false, data: data});
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }
    

    render(){

        if(this.state.loading === true){
            return <PageLoading></PageLoading>
        }

        if(this.state.error){
            return <PageError error={this.state.error}></PageError>
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={conf}></img>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/bages/new" className="btn btn-primary">
                         new bages
                        </Link>
                    </div>

                    <div className='Badges__container'>
                        <div className=''>
                           <BadgeNasList badge={this.state.data}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges