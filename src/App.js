import React, { Component } from 'react';
import firebase from 'firebase';
import style from './App.module.css';


const firebaseConfig = {
    apiKey: "AIzaSyAVUi10vvawbIYVwtCsGeRwnKLt8xfoEpg",
    authDomain: "maintest-firebase.firebaseapp.com",
    databaseURL: "https://maintest-firebase-default-rtdb.firebaseio.com",
    projectId: "maintest-firebase",
    storageBucket: "maintest-firebase.appspot.com",
    messagingSenderId: "682906644852",
    appId: "1:682906644852:web:44028260df4f3c9259fc21"
  }
  
  firebase.initializeApp(firebaseConfig);

class App extends Component {
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

    // createAccount = () => {
    //     const { email, password } =this.state;
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .catch(error => console.log(error));
    // }

    createAccount = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( () => 
            this.setState({hasAccount : true}))
        .catch(error => console.log(error));
    }

    sendData = () => {
        const { key, value} = this.state;
        const db = firebase.database();
        db.ref(key).push(value);    }

    render () {
        const { hasAccount, name } = this.state;
        console.log(name);
        return (
            <div>
                {
                    hasAccount ?
                    (
                        <div>
                            <input 
                                type="text"
                                id='key'
                                placeholder='enter key'
                                onChange={this.handleChange} 
                            />
                            <input
                                type="text"
                                id='value' 
                                placeholder='enter value'
                                onChange={this.handleChange} 
                            />
                            <Button 
                                type='submit'
                                onClick={this.sendData} 
                            />
                        </div>
                    )
                    :
                    (
                        <div className={style.login_block}>
                    <input
                        type='text'
                        id='email' 
                        placeholder='email' 
                        onChange={this.handleChange}
                    />
                    <input
                        type='password' 
                        id='password' 
                        placeholder='password' 
                        onChange={this.handleChange}
                    />
                    <Button 
                        type='submit'
                        onClick={this.createAccount} 
                    />
                </div>
                    )
                }
                
            </div>
            )
    }

}

export default App