import React from "react"
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import {Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import "./main_menu.css"
import About from "./about"
import Works from "./works"
import Exhibition from "./exhibition"
import CV from "./cv"
import Contact from "./contact"


class MainMenu extends React.Component{

  constructor(props){

    super(props);

    this.state = {
      opacity : 1.0,
      goBackOpacity : 0.0,
      goBackSize : "0vw",
      refreshKey : 0,
      myHeight : 1000,
    };

    this.refresh = false;
    this.myRect = null;
    this.myRef = React.createRef();
    this.scrollDoneHandler = this.scrollDoneHandler.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.menuClicked = this.menuClicked.bind(this);

    console.log("constructor");
  }

  componentDidMount() {

    this.checkAutoGoback  = false;

    Events.scrollEvent.register('begin',this.startScrolling)

    Events.scrollEvent.register('end', this.scrollDoneHandler)

    scrollSpy.update();

    this.myRect = this.myRef.current.getBoundingClientRect();

    console.log(this.myRect);
    console.log("main_menu componentDidMount");

    this.setState({myHeight : (this.myRect.height)*2});

    console.log("New Height "+ this.state.myHeight);

    window.addEventListener('scroll', this.onScroll);

    this.scrollToMyRef();
  }

  scrollToMyRef(){

   // StartScrolling(this.myRef , this.scrollDoneHandler);

   scroll.scrollToTop({
    duration: 500,
    delay: 0,
    smooth: 'easeInOutQuart'
     })
   }

  scrollDoneHandler(){

    console.log("scroll done in main menu");

   // this.setState({myHeight : (this.myRect.height)});
  }

  refreshMe(){

    console.log("refreshMe called");

    this.refresh = true;

    this.scrollToMyRef();
  }

  menuClicked(id){

    if (id === 10){

      this.refreshMe();
    }

    console.log("menu clicked " +id);
  }

  onScroll(event){

    let posRatio = .0;
    const rect = this.myRef.current.getBoundingClientRect();

    posRatio = (-200 - rect.y) / -200;
  
    this.setState({opacity : posRatio});

    if (posRatio <= 0.2){
      this.setState({goBackOpacity : 1});
      this.setState({goBackSize : "1.5vw"});
     }else{
      this.setState({goBackOpacity : 0});
      this.setState({goBackSize : "0vw"});
     }
 }

  displayFullMenu(props) {

    return (
    
      <div className = "main_menu" >

        <div style = {{opacity : props.menuOpacity}}>

          <Link id = "link_text" to="/about"       onClick ={()=> props.handler(0)}>About</Link><br/>
          <Link id = "link_text" to="/works"       onClick ={()=> props.handler(1)}>Works</Link><br/>
          <Link id = "link_text" to="/exhibition"  onClick ={()=> props.handler(2)}>Exhibition</Link><br/>
          <Link id = "link_text" to="/cv"          onClick ={()=> props.handler(3)}>CV</Link><br/>
          <Link id = "link_text" to="/contact"     onClick ={()=> props.handler(4)}>Contact</Link><br/>
        </div>

        <div className = "back">
          <Link id = "link_text_home" to="/" style = {{opacity : props.goBackOpacity , fontSize:props.goBackSize , fontWeight :300}} onClick ={()=> props.handler(10)}>/home</Link><br/>
        </div>
  
      </div>

    );

  }
  
  render(){

    if (this.refresh === true){

      this.refresh = false

      return(
        <Router >
          <Redirect to = '/' />
        </Router>
      )
      }else{
    
        return (

            <Router>

              <div ref = {this.myRef} style = {{height : this.state.myHeight}}>

              <this.displayFullMenu menuOpacity = {this.state.opacity} goBackOpacity = {this.state.goBackOpacity}
              goBackSize = {this.state.goBackSize} 
              handler = {this.menuClicked} />

                <div>

                  <Route path="/about" render = {()=> <About myParent = {this}/>}/>
                  <Route path="/works" render = {()=> <Works myParent = {this}/>}/>
                  <Route path="/exhibition" render = {()=> <Exhibition myParent = {this}/>}/>
                  <Route path="/cv" render = {()=> <CV myParent = {this}/>}/>
                  <Route path="/contact" render = {()=> <Contact myParent = {this}/>}/>

                </div>

              </div>

            </Router>

          );
        }
    }
}

export default MainMenu;