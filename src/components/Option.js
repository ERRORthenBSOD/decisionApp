import React from 'react';


const Option = (props) =>(
        <div className='option'>
            <p className='option__text'>
                Выбор {props.count}: {props.optionText}
            </p>
            <button
                className='button button--link'
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Удалить
            </button>
        </div>
);

export default Option;