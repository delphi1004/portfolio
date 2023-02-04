import React from "react"
import "./about.css"
import {Events, animateScroll as scroll, scrollSpy } from 'react-scroll'


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

        Events.scrollEvent.register('begin',this.startScrolling)

        Events.scrollEvent.register('end', this.scrollDoneHandler)

        scrollSpy.update();

        console.log("componentDidMount About "+window.height);

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

        let targetPos;

        targetPos = this.myRef.current.getBoundingClientRect().top +window.scrollY;

        console.log("targetPos "+targetPos);

        scroll.scrollTo(targetPos, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
          })
    }

    onScroll(event){

        let posRatio = .0;
        const rect = this.myRef.current.getBoundingClientRect();
    
        posRatio = (this.myRect.y/2 - rect.y) / (this.myRect.y/2);
    
        this.setState({opacity : posRatio});
    
        if (this.checkAutoGoback === true && posRatio < 0.2){
           window.removeEventListener('scroll', this.onScroll);
           this.parent.refreshMe();
        }
     }
  
    render(){

        return(

            <div style = {{opacity : this.state.opacity}} ref={this.myRef} className = "about">

                <h1 >John Lee</h1>
                <h5 style = {{fontSize:'1.3vw', fontWeight:300}}>New Media Artist, Software Developer</h5>
                <p>With over many years of professional programming expertise in languages such as C#, C++, C, JavaScript, TypeScript, and Unity3D, I bring a unique blend of technical and creative skills to the table. My in-depth knowledge of Unity3D and computer graphics, including shader coding, OpenGL, and the graphics pipeline, has made me a seasoned software developer. I also have a background in interactive art installations, which further showcases my creativity as a media artist.

Eager to use my diverse skills to bring success to creative projects, I am seeking opportunities to collaborate with passionate individuals. Let's create something remarkable together.</p>
            </div>
        );
    }
}

export default About;