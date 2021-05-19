import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Grid, TextField } from '@material-ui/core';
import MainPage from '../MainPage/MainPage';
import { Link } from 'react-router-dom';
// const firebaseConfig = {
//     apiKey: "AIzaSyAVUi10vvawbIYVwtCsGeRwnKLt8xfoEpg",
//     authDomain: "maintest-firebase.firebaseapp.com",
//     databaseURL: "https://maintest-firebase-default-rtdb.firebaseio.com",
//     projectId: "maintest-firebase",
//     storageBucket: "maintest-firebase.appspot.com",
//     messagingSenderId: "682906644852",
//     appId: "1:682906644852:web:44028260df4f3c9259fc21"
//   }
  
//   firebase.initializeApp(firebaseConfig);

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
    }

    sendData = () => {
        const { key, value} = this.state;
        const db = firebase.database();
        db.ref(key).push(value);    }

    render () {
        const { hasAccount, name } = this.state;
        // console.log(name);
        return (
            <div>
                {
                    hasAccount ?
                    (
                    < MainPage href="/mainpage" />
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