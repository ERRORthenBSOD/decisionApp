console.log('lol');

// JSX - JavaScript XML

const app ={
    title: "Indecision App",
    subTitle: "This is sub title",
    items: ['Arr Item one', 'Arr Item two'],
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

const appRoot = document.getElementById('app');


const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subTitle}</p>
            <p>{app.options.length>0 ? 'Here are your options: ' + app.options : "No options"}</p>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What Should i Do?</button>

            {
                // numbers.map((number) =>{
                //     return <p key={number}>Number: {number}</p>
                // })
            }

            <ol>
                {app.options.map((option)=> <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                <button onClick={removeAll}>Remove All Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();