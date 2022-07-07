import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Experience from "./experience";
import { HashRouter } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
import { HashLink } from "react-router-hash-link";
import logo from '../My project.jpg';
import links from '../utility.json'

export default function Main(){

    
    const Lnk=links.links;
    return (
        <div
        style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContents:"center",
            width:"100vw",
            height:"auto",
            position:"absolute",
        }}>
            <div id="header" style={{
                justifyContent:"center",
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                margin:"auto",
                padding:"15px", 
                height:"87vh",  
                position:"sticky",
            }}> <div style={{display:"flex",
                flexDirection:"column",margin:"auto",}}>
                 <div style={{display:"flex",
                flexDirection:"row",marginTop:"2vh", fontFamily:"'Balsamiq Sans', cursive",
                fontSize:"3vh",
                fontSmooth:"always",}}>Hi! everyone
                </div>
                <div style={{display:"flex",
                flexDirection:"row",alignItems:"bottom",margin:"auto", fontFamily:"'Balsamiq Sans', cursive"}}>
                <div style={{fontSize:"3vh",
                fontSmooth:"always"}}>I am&nbsp;</div>
                <div style={{color:"purple", fontSize:"10vh",
                fontSmooth:"always"}}>Amardeep&nbsp;</div>  
                <div style={{ fontSize:"10vh",
                fontSmooth:"always"}}>Saha</div>
                </div>
                <div style={{display:"flex",
                flexDirection:"row",marginTop:"2vh", fontFamily:"'Balsamiq Sans', cursive",
                fontSize:"3vh",
                fontSmooth:"always"}}>
                an blockchain enthusiast and a full stack developer.
                </div>
                </div>
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    marginLeft:"10vh",
                    borderRadius:"50%",
                    height:"30vh",
                    width:"30vh",
                    borderBlockColor:"purple",
                    borderBlockStyle:"solid",
                    borderBlockWidth:"1vh",
                }}>
                    <img src={logo} style={{height:"30vh",width:"30vh",borderRadius:"50%"}} alt="Amardeep Saha"/>
                </div>
            </div>
            <div style={{ display:"flex",
            flexDirection:"row",
            height:"auto",
            width:"100vw",
            margin:"auto",
            justifyContent:"center",
            alignItems:"center",
            position:"sticky",
            top:"0px",
            backdropFilter:"blur(5px)",
            boxShadow:"initial"
        }}>
            
            <BrowserRouter>
            {Lnk.map((nm)=>
                {
                    return(<div style={{
                        width:"auto",
                        height:"auto",
                        margin:"auto",
                        padding:"2vh",
                        width:"auto",
                    }}
                ><HashLink to={nm.link} smooth style={{ textDecoration:"none"}}>{nm.name}</HashLink></div>
                )
                }
            )}
            </BrowserRouter>          
        </div>            
            <Home></Home>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
        </div>
    )
}
