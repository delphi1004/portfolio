import React from "react"
import ProjectViewer from "./projectViewer"
import Exhibitions from "./exhibition/exibitions"

class Exhibition extends React.Component{

    constructor(props){
        super();

        this.myRef = React.createRef();
        this.targetDescription = "exhibitions"
    }

    componentDidMount(){

    }

    componentWillUnmount(){


    }

    refreshMe(){

        this.props.myParent.refreshMe();
    }

    render(){

        return(

            <div ref={this.myRef}>
                <ProjectViewer myParent = {this} description = {Exhibitions}/>
            </div>
        )
    }

}

export default Exhibition;