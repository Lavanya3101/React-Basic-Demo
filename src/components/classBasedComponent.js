import {Component} from 'react';
class ClassBasedComponent extends Component{
    // state
    state={
        showText:false,
        changeColor:false,
        count:0,
changeCountStyle:false
    };
    // same as above
    // constructor(props){
    //     super(props)
    //     this.state={
    //         showText:false,
    //     }
    // }
    // componentDidMount
    componentDidMount(){
        console.log("this is called first time on page load");
        this.setState({
            showText:!this.state.showText,
            changeColor:!this.state.changeColor
        })
    }
    componentDidUpdate(prevProps,prevState){
        // console.log(prevState,this.state)
        if(prevState && prevState.count!==this.state.count&& this.state.count===10){
            this.setState({
                ...this.state,
                changeCountStyle:true
            })
        }
    }
    handleClick=()=>{
        console.log("button clicked")
        const {showText,changeColor}=this.state;
        this.setState({
// showText:!this.state.showText
showText:!showText,
changeColor:!changeColor
        })
    }
    handleCount=()=>{
        this.setState({
            ...this.state,
            count:this.state.count+1
        })
    }
    render(){
        // console.log(this.state)
        const {showText,changeColor,count,changeCountStyle}=this.state;
        console.log(changeCountStyle)
        return(
            <div>
                {showText?<h4 style={{color:changeColor?'red':'black'}}>Class based component</h4>:null}
                
                <button onClick={this.handleClick}>Toggle Text</button>
                <button onClick={this.handleCount}>Increase count value</button>
                <h3 style={{color:changeCountStyle?'blue':'black',fontSize:changeCountStyle?'30px':'20px'}}>Count:{count}</h3>
            </div>
        )
    }
}
export default ClassBasedComponent;