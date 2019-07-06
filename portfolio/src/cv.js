import React from "react"
import StartScrolling from "./smoothScrolling"
import JohnLeeCV from "./resources/JohnLee_CV.pdf"
import "./cv.css"


class CV extends React.Component{

    constructor(props){

        super();

        this.state = {
            opacity : 0,
          };

        this.parent = props.myParent;
        this.checkAutoGoback = false;
        this.myRect = null;
        this.curPosition = 0;
        this.myRef = React.createRef();
        this.onScroll = this.onScroll.bind(this);
        this.scrollDoneHandler = this.scrollDoneHandler.bind(this);
    }

    componentDidMount(){

        console.log("componentDidMount About");

        this.state.opacity = 0;

        this.myRect = this.myRef.current.getBoundingClientRect();

        console.log(this.myRect);

        window.addEventListener('scroll', this.onScroll);

       this.scrollToMyRef();
    }

    componentWillUnmount(){

        window.removeEventListener('scroll', this.onScroll);
    }

    scrollDoneHandler(){

        this.checkAutoGoback = true;
    }

    scrollToMyRef(){

        StartScrolling(this.myRef , this.scrollDoneHandler);
    }

    onScroll(event){

        let posRatio = .0;
        const rect = this.myRef.current.getBoundingClientRect();
    
        posRatio = (this.myRect.y/2 - rect.y) / (this.myRect.y/2);
    
        this.setState({opacity : posRatio});
    
        if (this.checkAutoGoback === true && posRatio < 0.3){
           this.parent.refreshMe();
        }
     }
  
    render(){

        return(

            <div className = "cv" style = {{opacity : this.state.opacity}} ref={this.myRef} onScroll={this.onScroll} >

                {/* <object width="100%" height="500%" data={JohnLeeCV} type="application/pdf">   </object> */}

                <object width="100%" height="500%" data={require("./resources/JohnLee_CV.pdf")} type="application/pdf">   </object>

                 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            </div>
        );
    }



}

export default CV;