import React from 'react'
import "./style/Badge.css"
//import confLogo from "../images/badge-header.svg"

class Badge extends React.Component{
    render(){
        return (<div className="Badge">
            <div className="Badge__header">
                <img src="https://static.platzi.com/media/tmp/class-files/git/platzi-badges/platzi-badges-3.PrimerComponente/src/images/badge-header.svg" alt= "logo de la conferencia"></img>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={this.props.avatarUrl} alt= "avatar"></img>
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