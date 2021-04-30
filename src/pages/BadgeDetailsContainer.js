import React from 'react';

import BadgeDetails from './BadgeDetails'
import PageError from '../components/PageError'
import PageLoading from '../components/PageLoading';
import api from '../api'

class BadgeDetailsContainer extends React.Component{
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
            <BadgeDetails badge={this.state.data}></BadgeDetails>
        )
    }
}

export default BadgeDetailsContainer;