import React from 'react'
import '../components/style/BadgeNew.css'
import badgeHeade from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge'
import BadgeForm from './BadgeForm'

class BadgeNew extends React.Component {
    state = {form: {
        firstName:"",
        lastName:"",
        socialMedia:"", 
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
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={badgeHeade} alt="Logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName} 
                            email={this.state.form.email} 
                            socialMedia={this.state.form.socialMedia} 
                            jobTitle={this.state.form.jobTitle}  
                            avatarUrl="https://es.gravatar.com/avatar?d=identicon"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;