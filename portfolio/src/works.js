import React from "react"
import { BrowserRouter as Router, Route, Link , NavLink, Redirect } from "react-router-dom";
import "./works.css"
import StartScrolling from "./smoothScrolling"
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
          mainOpacity : 0.0,
          goBackOpacity : 0.0,
          goBackSize : "0vw",
          refreshMe : false,
          refreshKey : 0,
        };

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

        this.myRect = this.myRef.current.getBoundingClientRect();

       // this.myRect.height -= this.props.myParent.myRect.height;

        console.log(this.myRect);
 
        this.scrollToMyRef();

        window.addEventListener('scroll', this.onScroll);
     }
 
     componentWillUnmount(){

      window.removeEventListener('scroll', this.onScroll);
     }

     scrollToMyRef(){

      StartScrolling(this.myRef , this.scrollDoneHandler);
     }
    
     scrollDoneHandler(){

      this.checkAutoGoback = true;
    }

    refreshMe(){

      console.log("refreshMe called in works");

      this.setState({goBackOpacity : 0});

      this.scrollToMyRef();

      this.setState({refreshMe : true});
    }

    onScroll(event){

      let posRatio = 0;
      let activeRatio = 0;
      const rect = this.myRef.current.getBoundingClientRect();

       posRatio = (300 - rect.y) / 300;

       if (posRatio >= 1){
        activeRatio = (2 - posRatio);
       }else{
        activeRatio = posRatio;
       }

       console.log(posRatio + "  activeRatio = " + activeRatio);

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

      if (this.checkAutoGoback === true && posRatio < 0.2){

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

    displayShortMenu(props){

        return(
    
          <div className = "work_short_menu">
    
            <NavLink  id = "link_text_home" to="/works" onClick ={()=> props.handler(0)}>/back</NavLink><br/>
      
          </div>
        );
    }

    displayFullMenu(props) {
    
        return (
        
          <div>

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

      if (this.state.refreshMe === true){

        this.setState({refreshMe : false});
  
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
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
          
            </div>
          </Router>
    
        );
    }
}

export default Works;