import React from 'react'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button
}from 'reactstrap'
import Fade from 'react-reveal/Fade'
import ReactTypingEffect from 'react-typing-effect'

import './about.css'

import event from '../images/webpage/event.png'
import workshop from '../images/webpage/workshop.jpg'
import project from '../images/webpage/project.jpeg'


class aboutUs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : "DSC is a Google Developers program for University students, designed to help you build your mobile and web development skills and knowledge. It is open to any student, ranging from novice (developers who are just starting), to advanced (developers who want to further improve their skills)."
        }
    }

    container1(){
        return(
            <div id = 'aboutEvent'>
                        <Card width = '10%'>
                            <CardImg height = '200px' src = {event} alt="Card image cap1" />
                            <CardBody color>
                                <CardTitle>
                                    Events
                                </CardTitle>
                                <CardText>
                                    Talks from TechLeads from industries
                                </CardText>
                                <Button>Events</Button>
                            </CardBody>
                        </Card>
                    </div>
        )
    }

    container2(){
        return(
            <div id = 'aboutWorkshop'>
                        <Card width = '10%'>
                            <CardImg top height = '200px'  src = {workshop} alt="Card image cap1" />
                            <CardBody color>
                                <CardTitle>
                                    Workshops
                                </CardTitle>
                                <CardText>
                                    An entire day of informative workshops
                                </CardText>
                                <Button> Workshops</Button>
                            </CardBody>
                        </Card>
                    </div>
        )
    }

    container3(){
        return(
            <div id = 'aboutProject'>
                        <Card width = '10%'>
                            <CardImg top height = '200px'  src = {project} alt="Card image cap1" />
                            <CardBody color>
                                <CardTitle>
                                    Projects
                                </CardTitle>
                                <CardText>
                                    Mind boggling projects and ideas
                                </CardText>
                                <Button> Projects</Button>
                            </CardBody>
                        </Card>
                    </div>
        )
    }
    render(){
        return(
            <><Fade><div id = 'abouth1'><h1>About DSC PESU</h1></div></Fade>
            <div id = 'type'><ReactTypingEffect speed = '70' text = {this.state.text}/></div>
            <div id = 'content1'>
                <Fade bottom> {this.container1()}</Fade>
                <Fade bottom> {this.container2()}</Fade>
                <Fade bottom> {this.container3()}</Fade>
            </div></>
        );
    }
}

export default aboutUs