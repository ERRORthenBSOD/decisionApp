console.log('lol');

// JSX - JavaScript XML


const app ={
    title: "Indecision App",
    subTitle: "This is sub title",
    items: ['Arr Item one', 'Arr Item two'],
    options: ['One', 'Two']
};




const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
        <p>{app.options.length>0 ? 'Here are your options: ' + app.options : "No options"}</p>
        <ol>
            <li>{app.items[0]}</li>
            <li>{app.items[1]}</li>
        </ol>
    </div>
);

const user = {
    name: 'Atmospheric_b',
    age: 31,
    location: 'Russia Moscow' //If underfined will not how
};


// var userName = 'Atmospheric_b';
// var userAge = 31;
// var userLocation = 'Moscow';

// var myTemplate = (
//     <div>
//         <h1>{userName.toUpperCase()+'!'}</h1>
//         <p>My age is {userAge + '!'}</p>
//         <p>Location: {userLocation}</p>
//     </div>
// );

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}




const myTemplate = (
    <div>
        {/*<h1>{user.name.toUpperCase()+'!'}</h1>*/}
        <h1>{user.name ? user.name.toUpperCase()+'!': 'Anonymous'}</h1>

        {/*<p>My age is {user.age + '!'}</p>*/}

        {(user.age && user.age >= 18) && <p>Age: {user.age} </p>}

        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(myTemplate, appRoot);
