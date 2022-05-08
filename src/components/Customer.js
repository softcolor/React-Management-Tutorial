import React from 'react'

class Customer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div>
                <CustomerPropile id={this.props.id} name={this.props.name} image={this.props.image} />
                <CustomerInfo    birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />                
            </div>

        );


    }

}

class CustomerPropile extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        );
    }

}

class CustomerInfo extends React.Component {

    constructor(props) {
        super(props);
    }    

    render () {
        return (
          <div>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>              
          </div>  
        );
    }

}

export default Customer;