import React from "react"
import { BrowserRouter as Router, Route, Link , NavLink, Redirect } from "react-router-dom";
import {Element , Events, animateScroll as scroll, scrollSpy,scroller } from 'react-scroll'
import "./works.css"
import GenerativeArt from "./generativeart/generativeart"
import InteractiveArt from "./interactiveart/interactiveart"
import Modeling3D from "./3dmodeling/3dmodeling"
import SoftwareDevelopment  from "./softwaredevelopment/softwaredevelopment"
import ProjectViewer from "./projectViewer"
import GoBack from "./goBack"



class Works extends React.Component{

    constructor(props){

        super();

        this.state = {
          mainOpacity : 1.0,
          goBackOpacity : 0.0,
          goBackSize : "0vw",
          refreshKey : 0,
        };

        this.refresh = false;
        this.targetDescription = '';
        this.parent = props.myParent;
        this.checkAutoGoback = false;
        this.myRef = React.createRef();
        this.onScroll = this.onScroll.bind(this);
        this.scrollDoneHandler = this.scrollDoneHandler.bind(this);
        this.menuClicked = this.menuClicked.bind(this);
    }

    componentDidMount(){

      console.log(this.myRect);

      Events.scrollEvent.register('begin',this.startScrolling)

      Events.scrollEvent.register('end', this.scrollDoneHandler)

      this.myRect = this.myRef.current.getBoundingClientRect();
       
      this.scrollToMyRef();

      window.addEventListener('scroll', this.onScroll);

      console.log("works mounted!");
     }
 
     componentWillUnmount(){

      console.log("works Unmounted!");
      window.removeEventListener('scroll', this.onScroll);
     }

     scrollToMyRef(){

      scroller.scrollTo('scroll_to_works', {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
     }
    
     scrollDoneHandler(){

      console.log("scrollDoneHandler called in works")

      this.checkAutoGoback = true;
    }

    refreshMe(){

      console.log("refreshMe called in works");

      this.setState({goBackOpacity : 0});

      this.scrollToMyRef();

      this.refresh = true;
    }

    onScroll(event){

      let posRatio = 0;
      let activeRatio = 0;
      const rect = this.myRef.current.getBoundingClientRect();

      // posRatio = (350 - rect.y) / 350;

      posRatio = (this.myRect.y/1 - rect.y) / (this.myRect.y/1);

       if (posRatio >= 1){
        activeRatio = (2 - posRatio);
       }else{
        activeRatio = posRatio;
       }

      // console.log(posRatio + "  activeRatio = " + activeRatio);

     //  console.log(posRatio + "  activeRatio = " + activeRatio);

     //  console.log(window.scrollY);

       this.setState({mainOpacity : activeRatio});

       if(this.checkAutoGoback === true){

        if (activeRatio <= 0.1){
          this.setState({goBackOpacity : 1});
          this.setState({goBackSize : "1.5vw"});
        }else{
          this.setState({goBackOpacity : 0});
          this.setState({goBackSize : "0vw"});
        }
      }

      if (this.checkAutoGoback === true && posRatio < 0.7){

        window.removeEventListener('scroll', this.onScroll);

        this.parent.refreshMe();
      }
  }

    shortMenuClick(id){

        this.setState({curMenuID : 0});

        this.scrollToMyRef();

        console.log("short menu clicked!");
    }
    
    menuClicked(targetDescription){

      if (targetDescription === "goBack"){

        this.refreshMe();
      }else{
        this.targetDescription = targetDescription;
      }
    }
    
    displayFullMenu(props) {
    
        return (
        
          <div>

            <Element name="scroll_to_works" style = {{marginBottom : '250px', opacity :0}}>w</Element>
  
            <div style = {{opacity : props.mainOpacity}}>
              <h1>works</h1>

              <div className = "works_sub">

                  <Link id = "link_text" to="/works/projectviewer"  onClick ={()=> props.handler(GenerativeArt)}>Generative Art</Link><br/>
                  <Link id = "link_text" to="/works/projectviewer"  onClick ={()=> props.handler(InteractiveArt)}>Interactive Project</Link><br/>
                  <Link id = "link_text" to="/works/projectviewer"  onClick ={()=> props.handler(Modeling3D)}>3D Modeling</Link><br/>
                  <Link id = "link_text" to="/works/projectviewer"  onClick ={()=> props.handler(SoftwareDevelopment)}>Software Development</Link><br/>
            
              </div>
            </div>

              <div className = "back">
                <Link id = "link_text_works" to="/works" style = {{opacity : props.goBackOpacity , fontSize : props.goBackSize ,fontWeight :300}} onClick ={()=> props.handler("goBack")}>/works</Link><br/>
              </div>

          </div>
    
        );
    }
  
    render(){

      if (this.refresh === true){

        this.refresh = false
  
        return(
          <Router >
            <Redirect to="/works" push/>
          </Router>
        )
      }

        return(

          <Router>
            <div  key = {this.state.refreshKey} onScroll={this.onScroll} ref={this.myRef} className = "works">

              <this.displayFullMenu mainOpacity = {this.state.mainOpacity} goBackOpacity = {this.state.goBackOpacity} 
              goBackSize = {this.state.goBackSize}
              handler = {this.menuClicked} />     

                <div>
                    <Route exact path="/works/projectviewer" render = {()=> <ProjectViewer myParent = {this} description = {this.targetDescription}/>}/>
                </div>
          
            </div>
          </Router>
    
        );
    }
}

export default Works;