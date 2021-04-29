import React from 'react'
import "./style/Badge.css"
//import confLogo from "../images/badge-header.svg"
import Gravatar from '../components/Gravatar'

class Badge extends React.Component{
    render(){
        return (<div className="Badge">
            <div className="Badge__header">
                <img src="https://static.platzi.com/media/tmp/class-files/git/platzi-badges/platzi-badges-3.PrimerComponente/src/images/badge-header.svg" alt= "logo de la conferencia"></img>
            </div>
            <div className="Badge__section-name">
                <Gravatar className='Badge__avatar' email={this.props.email} alt='avatar'></Gravatar>
                <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>@{this.props.socialMedia}</div>
            </div>
            <div className="Badge__footer">
                #platziconf
            </div>
        </div>)
    }
}

export default Badge