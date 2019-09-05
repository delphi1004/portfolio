import React from "react"
import "./projectViewer.css"
import {Events, animateScroll as scroll, scrollSpy } from 'react-scroll'


class ProjectViewer extends React.Component{

    constructor(props){

        super();

        this.state = {
            maxWidth : '49%',
            mainOpacity : 0.0,
            goBackOpacity : 0.0,
            refreshMe : false,
            refreshKey : 0,
        };
       
        this.containerStyle = {
            display: 'grid',
            gridTemplateColumns : null,
            gridColumnGap: '5px'
          };

        this.myRect = null;
        this.myRef = React.createRef();
        this.checkAutoGoback = false;
        this.onScroll = this.onScroll.bind(this);
        this.scrollDoneHandler = this.scrollDoneHandler.bind(this);
    }

    componentWillMount(){

        this.loadDescription();
    }

    componentDidMount(){

        Events.scrollEvent.register('begin',this.startScrolling)

        Events.scrollEvent.register('end', this.scrollDoneHandler)

        this.myRect = this.myRef.current.getBoundingClientRect();

         console.log(this.myRect);
  
         this.scrollToMyRef();
 
         window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount(){

        window.removeEventListener('scroll', this.onScroll);
    }

    loadDescription(){

       this.description = this.props.description();

       this.containerStyle.gridTemplateColumns = this.description.containerColumn;

       console.log("loadDescription " +this.description);
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

    scrollDoneHandler() {

        this.checkAutoGoback = true;
    }

    onScroll(event){

        let posRatio = 0;
        const rect = this.myRef.current.getBoundingClientRect();
  
         posRatio = (300 - rect.y) / 300;
  
         this.setState({mainOpacity : posRatio});
  
         //console.log("ratio in works " + posRatio);
  
        if (this.checkAutoGoback === true && posRatio < 0.3){
  
            window.removeEventListener('scroll', this.onScroll);
  
            this.props.myParent.refreshMe();
         }
    }

    createResources(resource,index , maxResourceWidth){
        let resourceType;
        let result;

        // console.log("index = "+index);

        resourceType = Object.keys(resource);

        result = null;

        if (resourceType[0] === "text"){
            
            result = (
                <div className = "column" key = {index}>
                    <p className = "text" key = {index}> {resource.text}</p>
                </div>
            )
        }

        if (resourceType[0] === "image"){
         
            result = (

                <div className = "column" style = {{maxWidth :maxResourceWidth}} key = {index}>
                    <img  src = {resource.image} style = {{width:'100%'}} alt=""/>
                    <p className = "caption">{resource.text}</p>             
                </div>
            )
        }

        if (resourceType[0] === "movie"){

            result = (

                <div className = "column" style = {{maxWidth :maxResourceWidth}} key = {index}>

                    <iframe
                        title = {resource.movie}
                        style = {{height : resource.height}}
                        src={"https://www.youtube.com/embed/"+resource.movie}
                        allowFullScreen
                        frameBorder="0">
                    </iframe>

                    <p className = "caption">{resource.text}</p>      

                </div>
            )
        }

        return result;
    }

    createMainImage(mainImage){

        let resourceType;
        let result;

        result = null;

        if (mainImage != null){

          //  console.log(mainImage);

            resourceType = Object.keys(mainImage);

            if (resourceType[0] === "image" && mainImage.image != null){
            
                result = (
                    <div className = "prj_img">
                        <img src = {mainImage.image} alt = ""/>
                        <p className = "caption">{mainImage.caption}</p>
                    </div>
                )
            }

            if (resourceType[0] === "movie" && mainImage.movie != null){

                result = (

                    <div className = "prj_img">

                        <iframe
                            title = {mainImage.movie}
                            style = {{height : mainImage.height}}
                            src={"https://www.youtube.com/embed/"+mainImage.movie}
                            allowFullScreen
                            frameBorder="0">
                        </iframe>
                        
                    </div>
                )
            }
        }

        return result;
    }

    createBody(project , index){

        let result;
        let projectSource = project.resources ? project.resources.map((value,index) =>{return this.createResources(value,index,project.maxResourceWidth)}) : null

        result = (

                <div key = {index}>

                    <h3 className = "prj_title" >{project.title}</h3>
                    <h3 className = "prj_tools">- {project.tools}</h3>

                    <div className = "prj_grid_container" style = {{gridTemplateColumns : project.containerColumn}}>
                        <p className = "prj_description"> {project.description}</p>
                        {this.createMainImage(project.main_image)}
                    </div>

                    <div className = "row">
                        
                        {projectSource}
                 
                    </div>
                
                </div>
        );

        return result;
    }

    render(){

        let projectBody = this.description.project.map((value,index) =>{return this.createBody(value,index)})

        return(

            <div className = "prj_body" ref={this.myRef} style = {{opacity : this.state.mainOpacity}} onScroll={this.onScroll}>
                <h1 className = "prj_group_name" >{this.description.category.name}</h1>
                <h2 className = "prj_group_description">{this.description.category.description}</h2>
                
                {projectBody}

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}

export default ProjectViewer