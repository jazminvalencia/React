import React from 'react'
import Navbar from '../components/Navbar'
import '../components/style/Badges.css'
import conf from '../images/badge-header.svg'

class Badges extends React.Component{
    render(){
        return (
            <div>
                <Navbar></Navbar>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={conf}></img>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <a href="/bages/new" className="btn btn-primary"> new bages</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Badges