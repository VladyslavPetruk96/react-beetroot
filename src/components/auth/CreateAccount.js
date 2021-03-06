import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Grid, TextField } from '@material-ui/core';

class CreateAccount extends Component {
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

    createAccount = () => {
        const { email, password } =this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => alert(error));
    }

    sendData = () => {
        const { key, value} = this.state;
        const db = firebase.database();
        db.ref(key).push(value);    }

    render () {
        const { hasAccount } = this.state;
        return (
            <div>
                {
                    hasAccount ?
                    (
                        <div>
                            <TextField  
                                type="text"
                                id='key'
                                placeholder='enter key'
                                onChange={this.handleChange} 
                            />
                            <TextField 
                                type="text"
                                id='value' 
                                placeholder='enter value'
                                onChange={this.handleChange} 
                            />
                            <Button 
                                type='submit'
                                onClick={this.sendData}
                            >Submitt</Button>
                        </div>
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
                            <h2>SIGN UP</h2>
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
                                    onClick={this.createAccount} 
                                >Submit</Button>
                            </Grid>
                </Grid>
                    )
                }
                
            </div>
            )
    }

}

export default CreateAccount