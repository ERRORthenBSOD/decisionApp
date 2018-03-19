//MY SOLUTION

// let details = '';
// let status = 'Show details';
//
// const toggleVisibility = () =>{
//     switch(status){
//         case 'Show details':
//             status = 'hide details';
//             details = 'Hey! These are some details';
//             render();
//             break;
//         case 'hide details':
//             status = 'Show details';
//             details = undefined;
//             render();
//             break;
//     }
// };
//
// const render= ()=>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{status}</button>
//             <h3>{details}</h3>
//         </div>
//     );
//     const appRoot = document.getElementById('app');
//     ReactDOM.render(template, appRoot);
// };
// render();

//COURSE COLUTION

// let visibility = false;
//
// const toggleVisibility = () => {
//   visibility = !visibility; // OMG
//   render()
// };
//
// const render = ()=> {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey! These are some details</p>
//                 </div>
//             )}
//         </div>
//     );
//     const appRoot = document.getElementById('app');
//     ReactDOM.render(jsx, appRoot);
// };
//
// render();
//

// UPDATE

//MY SOLUTION

// class VisibilityToggle extends React.Component {
//
//     constructor(props){
//         super(props);
//         this.toggleStatus = this.toggleStatus.bind(this);
//         this.state = {
//             visibility: false,
//             buttonName: 'Show details'
//         }
//     }
//
//     toggleStatus(){
//         this.setState(()=>{
//             if(!this.state.visibility){
//                 return {
//                     visibility: true,
//                     buttonName: 'Hide details'
//                 }
//             }else {
//                 return {
//                     visibility: false,
//                     buttonName: 'Show details'
//                 }
//             }
//         })
//     }
//
//     render(){
//         return (
//             <div>
//                 <h1>VisibilityToggle</h1>
//                 <button onClick={this.toggleStatus}>{this.state.buttonName}</button>
//                 {this.state.visibility && (<div>
//                     <h3>
//                     Hey! These are some details
//                     </h3>
//                 </div>) }
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

// COURSE SOLUTION


class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey! These are some details</p>
                    </div>
                )}
            </div>
        );
    };
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));