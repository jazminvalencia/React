import React from 'react'


class BadgeForm extends React.Component {
    
    handleClick = e =>{
      console.log("buton click");
    };

    handleSubmit = e =>{
        e.preventDefault();
        console.log("form was submit");
        console.log(this.state);
    };

    render(){
        return(
            <div>
                <h1>New attendant</h1>
                <form onSubmit={this.handleSubmit}>
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
                        name="socialMedia"
                        value={this.props.formValues.socialMedia}></input>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;