import React from "react";
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions= () => {
        this.setState(()=>({options:[]}))
    };

    handleResetOption = ()=>{
        this.setState(()=>({selectedOption: undefined}))
    };

    handleDeleteOption = (optionToRemove)=> {
        this.setState((prevState)=>({
            options : prevState.options.filter((option)=> optionToRemove !== option)
        }))
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random()* this.state.options.length);
        const randomOption = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption: randomOption
        }));
    };

    handleAddOption = (option)=>{
        if(!option){
            return 'Вбейте правильное значение';
        }else if (this.state.options.indexOf(option) > -1){
            return 'Такое дело уже есть';
        }
        // else not needed it is the same
        this.setState((prevState)=>({
            options: prevState.options.concat(option)
        }));
    };

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
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json =JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('сохраняем')
        }
    }

    componentWillUnmount(){
        console.log('component will unmount')
    }


    render(){
        const subtitle = 'Пусть судьба тебе поможет с выбором дела ^_^ ';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className='container'>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleResetOption={this.handleResetOption}
                />
            </div>
        )
    };
}

export default IndecisionApp;