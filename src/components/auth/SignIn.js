import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Grid, TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom'
 
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hasAccount: false,
            name: '',
            key: '',
            value: '',
        }
    }
    componentDidMount() {
        const db = firebase.database();
        const name = db.ref( 'name' );
        name.on('value', (elem) => {
            this.setState( { name: elem.val() });
        });
    }

    handleChange = ({ target : { value, id }}) => {
        this.setState({
            [id] : value,
        })
    };

    signIn = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( () => 
            this.setState({hasAccount : true}))
        .catch(error => alert(error));
        console.log(email, password);
    }

    sendData = () => {
        const { key, value} = this.state;
        const db = firebase.database();
        db.ref(key).push(value);    }

    render () {
        const { hasAccount } = this.state;
        // console.log(name);
        return (
            <div>
                {
                    hasAccount ?
                    (
                    <Redirect to="/mainpage" />
                    )
                    :
                    (
                        <Grid 
                            container 
                            direction="column"
                            justify="center"
                            alignItems="center"
                            style={{paddingTop: '150px'}}
                        >
                            <h2>SIGN IN</h2>
                            <Grid item xs={12}>
                                <TextField 
                                    type='text'
                                    id='email' 
                                    placeholder='email' 
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    type='password' 
                                    id='password' 
                                    placeholder='password' 
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button 
                                    type='submit'
                                    onClick={this.signIn} 
                                >Submit</Button>
                            </Grid>
                </Grid>
                    )
                }
                
            </div>
            )
    }

}

export default SignIn