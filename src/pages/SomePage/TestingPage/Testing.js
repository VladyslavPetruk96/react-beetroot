import React, { Component } from 'react'
import data from "./data.js";
import Questions from "./Questions";

class Testing extends Component {
    render() {
        return (
            <div>
                
                <button><a href='/mainpage'>mainPage</a></button>
                <h2>This is testing page for Questions</h2> 

                <Questions data={data} />
            </div>
        )
    }
}

export default Testing
