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
                <h5 style = {{fontSize:'1.3vw', fontWeight:300}}>Software Developer, Media Artist</h5>
                <p>I am an experienced software developer with mobile dev and media art experience, wanting
                   to focus on my skills more on creative projects. I have over a decade of professional programming
                   experience (C#, C++, C, Objective-C). I have experienced with Unity3D and computer
                   graphics(shader coding, OpenGL, graphics pipeline). I have also made interactive art installations
                   and released a mobile app on iOS. I want to combine all of those skills to help make a great
                   creative project. I am looking for creative projects and want to work with passionate people..</p>
            </div>
        );
    }
}

export default About;