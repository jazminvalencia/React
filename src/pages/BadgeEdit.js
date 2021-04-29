import React from 'react'
import '../components/style/BadgeEdit.css'
import badgeHeade from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from './BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'

class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error:null,
        form: {
        firstName:"",
        lastName:"",
        twitter:"", 
        jobTitle:"" ,
        avatarUrl:"",
        email:""
    }}

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null });
    
        try {
          const data = await api.badges.read(this.props.match.params.badgeId);
    
          this.setState({ loading: false, form: data });
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
      };

    handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });
    
        try {
          await api.badges.update(this.props.match.params.badgeId, this.state.form);
          this.setState({ loading: false });
    
          this.props.history.push('/bages');
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
      };

    render(){

        if(this.state.loading){
            return <PageLoading/>
        }

        return(
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={badgeHeade} alt="Logo"></img>
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
                        <h1>Update attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}
                            />
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeEdit;