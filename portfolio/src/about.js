import React from "react"
import "./about.css"
import StartScrolling from "./smoothScrolling"


class About extends React.Component{

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

        this.setState({opacity : 0});

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
    
        if (this.checkAutoGoback === true && posRatio < 0.2){
           this.parent.refreshMe();
        }
     }
  
    render(){

        return(

            <div style = {{opacity : this.state.opacity}} ref={this.myRef} onScroll={this.onScroll} className = "about">

                <h1 >John Lee</h1>
                <h5 style = {{fontSize:'1.3vw', fontWeight:300}}>Software Developer, Media Artist</h5>
                <p>I have a passion to create a new system and art piece.
                 I worked for more than 10 years for semiconductor & LCD industry as software developer.
                 One day, by chance I encountered with a new media art installation. I was shocked at
                 how the installation gives me an impression. Since that time, I studied new media art
                 and general design from Art school. My interesting area is interactive art, sound
                 visualization, and algorithmic drawing. I have a huge enthusiasm to design and implement
                 creative projects by using different tools such as processing, openFrameworks, and Unity3D.
                 In addition, I studied computer graphics such as computer graphics pipeline, OpenGL, Shader
                 coding in my previous master degree study. I think it is beneficial for a developer to have
                 a varied background including tech, design, and art. I like to work with people who have a
                 different background, experiences. Also I'd like to teach people who don't have a chance to
                 though. I’d love for an opportunity to meet and talk further about how we may work together.</p>

                 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            </div>
        );
    }



}

export default About;