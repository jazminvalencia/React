import React from 'react';

import BadgeDetails from './BadgeDetails'
import PageError from '../components/PageError'
import PageLoading from '../components/PageLoading';
import api from '../api'

class BadgeDetailsContainer extends React.Component{
    state = {
        loading:true,
        error:null,
        data:undefined,
        modalIsOpen:false
    };

    handleCloseModal = e => {
        this.setState({modalIsOpen: false})
    }

    handleOpenModal= e =>{
        this.setState({modalIsOpen: true})
    }


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

    handleDeleteBadge = async e =>{
        this.setState({loading:true, error:null})

        try {
            api.badges.remove(
                this.props.match.params.badgeId
            )
            this.props.history.push('/bages')
        this.setState({loading:false})

        } catch (error) {
            this.setState({loading:false, error:error})
            
        }
    }

    render() {
        if(this.state.loading){
            return <PageLoading></PageLoading>
        }
        if(this.state.error) {
            return<PageError error={this.state.error}></PageError>
        }
        return (
            <BadgeDetails 
            onCloseModal={this.handleCloseModal} 
            onOpenModal={this.handleOpenModal} 
            modalIsOpen = {this.state.modalIsOpen}
            badge={this.state.data}
            onDeleteBadge={this.handleDeleteBadge}
            ></BadgeDetails>
        )
    }
}

export default BadgeDetailsContainer;