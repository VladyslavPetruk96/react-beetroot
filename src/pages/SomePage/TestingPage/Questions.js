import React, { Component } from 'react';
import style from './Questions.module.css';

class Questions extends Component{
    constructor(props) {
        super(props);
        this.checkQuestions = this.checkQuestions.bind(this);
        this.state = {
            checked: false
        }
    }
    checkQuestions(ev) {
        ev.preventDefault();
        this.setState({checked: true});
    }

    render() {
        let data = this.props.data;
        let questions = data.questions;
        let j = 0;
        questions = questions.map(function(el,index) {
            let variants = el.variants.map(function(e,i) {
               j++; 
                return <div className='row'>
                    <input type="radio" id={'id'+j} />
                    <label for={'id'+j}>{e.title}</label>
                </div>
            })
            let n =0;
            return <div>
                <hr />
                <h2 className={style.h3}>{el.title}</h2>
                <pre className={style.pre}>{el.code}</pre>
                <div className={style.variants}>{variants}</div>
                
            </div>
        });

        return (
            
            <div className={style.all}>
                <h1 className={style.h1}>{data.testName} {this.state.checked ? "(проверен)": ''}</h1>
                {questions}
                <hr />
                <input className={style.sub} type='button' disabled = {this.state.checked ? true: false} value='SEND YOUR ANSWER' onClick={this.checkQuestions} />
                
            </div>
        );
        
    }
}
export default Questions