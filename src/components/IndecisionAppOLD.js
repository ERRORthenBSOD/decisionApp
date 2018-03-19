import React from "react";
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options'

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption= this.handleDeleteOption.bind(this);
        this.state = {
            // options: props.options
            options: []
        };
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(()=> ({options})) // options: options
            }
        } catch(err) {
            //Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json =JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data')
        }
    }

    componentWillUnmount(){
        console.log('component will unmount')
    }

    handleDeleteOptions(){
        this.setState(()=>({options:[]}))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState)=>({
            options : prevState.options.filter((option)=> optionToRemove !== option)
        }))
    }

    handlePick(){
        const randomNum = Math.floor(Math.random()* this.state.options.length);
        const randomOption = this.state.options[randomNum];
        alert(randomOption);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        // else not needed it is the same
        this.setState((prevState)=>({
            options: prevState.options.concat(option)
        }));
    }

    render(){
        const subtitle = 'Put your Life in the hands of computer';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

export default IndecisionApp;