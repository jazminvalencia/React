import React from 'react'
import '../components/style/BadgeNew.css'
import badgeHeade from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from './BadgeForm'

import api from '../api'

class BadgeNew extends React.Component {
    state = {form: {
        firstName:"",
        lastName:"",
        twitter:"", 
        jobTitle:"" ,
        avatarUrl:"",
        email:""
    }}
    handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
    };

    handleSubmit = async e =>{
        e.preventDefault()

        try {
            await api.badges.create(this.state.form)
            this.setState({loading:false})
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={badgeHeade} alt="Logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'} 
                                lastName={this.state.form.lastName || 'LAST_NAME'} 
                                email={this.state.form.email || 'EMAIL@MAIL.COM'} 
                                twitter={this.state.form.twitter || 'TWITTER'} 
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}  
                                avatarUrl="https://es.gravatar.com/avatar?d=identicon"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                            />
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;