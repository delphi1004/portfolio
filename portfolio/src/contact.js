import React from "react"
import "./contact.css"
import StartScrolling from "./smoothScrolling"


class Contact extends React.Component{

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

        this.setState({opacity : 0})
  
        this.myRect = this.myRef.current.getBoundingClientRect();

        console.log(this.myRect);

        window.addEventListener('scroll', this.onScroll);

       this.scrollToMyRef();
    }

    componentWillUnmount(){

        window.removeEventListener('scroll', this.onScroll);
    }

    scrollDoneHandler(){

        console.log("scrollDoneHandler contact");

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

        console.log(this.checkAutoGoback);
    
        if (this.checkAutoGoback === true && posRatio < 0.2){
           this.parent.refreshMe();
        }
     }
  
    render(){

        return(

            <div style = {{opacity : this.state.opacity}} ref={this.myRef} onScroll={this.onScroll} className = "contact">

                    <h1 >John Lee</h1>
                    <h5 style = {{fontSize:'1.2vw', fontWeight:300}}>Software Developer, Media Artist</h5>
                    <br/>
                    <div className = "contact_text">

                      <div className="hr"><hr /></div><br/><br/>

                      <a href={`mailto:${"delphi1004@hanmail.net"}`}><strong>email</strong> - delphi1004@hanmail.net</a><br/><br/>

                      <a href="https://www.linkedin.com/in/delphi1004/" target="_blank"><strong>linkedin</strong> - Delphi1004</a><br/><br/>

                      <a href="https://www.instagram.com/delphi1004/" target="_blank"><strong>instagram</strong> - Delphi1004</a><br/><br/>

                      <a href="https://github.com/delphi1004" target="_blank"><strong>github</strong> - Delphi1004</a><br/><br/>
            
                      <div className="hr"><hr /></div>
                      
                    </div>

                 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            </div>
        );
    }



}

export default Contact;