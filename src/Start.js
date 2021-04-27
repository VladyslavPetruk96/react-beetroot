import React, { Component } from 'react'
import MainPage from './components/body/MainPage.js';
import {Route} from 'react-router-dom';
import Testing from './components/body/questions/Testing';
import Avatar from './components/header/Profile/Avatar';
import NavList from './components/header/NavList';

class Start extends Component { 
    constructor() {
        super();
        this.state = {

            message: `${this.state.starting()}`,
            
            starting() {
                return(
                    <div className='hide'>
                        <h2>Feels free to use this app</h2>
                        <button onClick={ () => this.clicked }> <a href='/mainpage'>Lets get started</a> </button>
                    </div>
                )
            },
            
            clicked() {

                this.setState({
                    starting() {
                        return(
                            <div>
                                <NavList />
                                    <div className='app-wrapper-content'>
                                        <Route path='/mainpage' component={MainPage} />
                                        <Route path='/avatar' component={Avatar}/>
                                        <Route path='/testing' component={Testing}/>
                                    </div>
                            </div>
                        )
                    }  
                })
            }
        }
    }
    
    

    

    render() {
        return (
            <div>
                { this.state.message }
            </div>
        )
    }
}

export default Start
