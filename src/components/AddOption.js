import React from "react";
// export default AddOption;


export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        // this.state = {
        //     error: undefined
        // };
    }
    handleAddOption= (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({error })); //: error the same;

        if (!error) {
            e.target.elements.option.value = '';
        }
    };
    render(){
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form
                    className='add-option'
                    onSubmit={this.handleAddOption}
                >
                    <input
                        className='add-option__input'
                        type="text" name='option'
                        placeholder="впиши сюда"
                    />
                    <button className='button'>Добавь занятие</button>
                </form>
            </div>
        )
    }
}