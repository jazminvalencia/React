import React from 'react'


class BadgeForm extends React.Component {
    
    handleClick = e =>{
      console.log("buton click");
    };

    render(){
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>first Name</label>
                        <input onChange={this.props.onChange}
                         className="form-control"
                         type="text"
                         name="firstName"
                         value={this.props.formValues.firstName}></input>
                    </div>
                    <div className="form-group">
                        <label>last Name</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        value={this.props.formValues.lastName}></input>
                    </div>
                    <div className="form-group">
                        <label>email</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="email" 
                        name="email"
                        value={this.props.formValues.email}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Job title</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Social media</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.formValues.twitter}></input>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>

                    {this.props.error && (
                        <p className='text-danger'>{this.props.error.message}</p>
                    )}
                </form>
            </div>
        );
    }
}

export default BadgeForm;