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
                <img className="Badge__avatar" src="https://es.gravatar.com/avatar?d=identicon" alt= "avatar"></img>
                <h1>Richard <br/> Kaufman</h1>
            </div>
            <div className="Badge__section-info">
                <h3>Fronted engineer</h3>
                <div>@jazzvlc</div>
            </div>
            <div className="Badge__footer">
                #platziconf
            </div>
        </div>)
    }
}

export default Badge