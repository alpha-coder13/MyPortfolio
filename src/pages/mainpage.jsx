import React, { useEffect } from "react";
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
    
    useEffect(()=>{
        document.addEventListener("scroll",(ev)=>{
            Lnk.map((nm)=>{
            var h=document.querySelector(nm.link).scrollHeight
            var k=document.querySelector(nm.link).offsetTop
            
            console.log(window.scrollY)
            if(window.scrollY>=k && window.scrollY<h+k){
                console.log(nm.name)
                document.getElementById(`${nm.name}`).style.borderBottom="3px solid purple"
            }
            else{
                document.getElementById(`${nm.name}`).style.borderBottom="0px solid rgba(0,0,0,0.24)"
            }
            })
            
        })
    },[])    
    
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
                justifyContent:"flex-start",
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                marginBottom:"auto",
                height:"95vh",  
                position:"sticky",
            }}> <div style={{display:"flex",
                flexDirection:"column",margin:"auto",}}>
                 <div style={{display:"flex",
                flexDirection:"row",marginTop:"2vh", fontFamily:"'Balsamiq Sans', cursive",
                fontSize:"3vh",
                fontSmooth:"always",}}>Hi! everyone
                </div>
                <div style={{display:"flex",
                flexDirection:"row",alignItems:"flex-end",marginRight:"auto",marginTop:"auto", fontFamily:"'Balsamiq Sans', cursive",height:"auto"}}>
                <div style={{fontSize:"3vh",
                fontSmooth:"always",paddingBottom:"2vh"}}>I'm&nbsp;&nbsp;</div>
                <div style={{color:"purple", fontSize:"8vh",
                fontSmooth:"always"}}>Amardeep&nbsp;</div>  
                <div style={{ fontSize:"8vh",
                fontSmooth:"always"}}>Saha</div>
                </div>
                <div style={{display:"flex",
                flexDirection:"row",marginTop:"1vh", fontFamily:"'Balsamiq Sans', cursive",
                fontSize:"3vh",
                fontSmooth:"always"}}>
                an&nbsp;<span style={{fontWeight:"bold", backgroundColor:"rgba(0,0,0,0.24)"}}>Tech enthusiast</span>&nbsp;and a&nbsp;<span style={{ backgroundColor:"rgba(0,0,0,0.24)", fontWeight:"bold"}}>full stack developer</span>&nbsp;.
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
            marginTop:"auto",
            marginBottom:"auto",
            justifyContent:"center",
            alignItems:"center",
            position:"sticky",
            top:"0px",
            backgroundColor:"rgba(255,255,255,0.94)",
            backdropFilter:"blur(10px)",
            boxShadow:"-0.2px 5px 7px rgba(0,0,0,0.07)"
        }}>
            
            <BrowserRouter>
            {Lnk.map((nm)=>
                {
                    return(<div id={`${nm.name}`} style={{
                        display:"flex",
                        width:"auto",
                        height:"5vh",
                        margin:"auto",
                        border:"0px",
                        alignItems:"center",
                        justifyContent:"center",
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
