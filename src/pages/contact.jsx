import React from "react";
import logo from '../My project.jpg';

export default function Contact(){
    return (<div id="contact" style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        width:"90vw",
        height:"90vh",
        padding:"5vw",
        backgroundColor:"white"
    }}>
        <div style={{
            backgroundColor:"rgba(251,25,245,0.14)",
            borderRadius:"3%",
            width:"44vw",
            height:"59vh",
            display:"flex",
            flexDirection:"row",
            margin:"auto"
        }}>
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"rgba(255,255,255,0.4)",
                backdropFilter:"blur(23px)",
                height:"100%",
                width:"35%",
                borderTopLeftRadius:"3%",
                borderBottomLeftRadius:"3%",
            }}>
                   <div style={{fontFamily:"'Balsamiq Sans',cursive",fontSize:"3vh",marginTop:"auto",marginBottom:"1vh",color:""}}>
                Contact ME..
                </div> 
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:"1vh",
                    marginBottom:"auto",
                    borderRadius:"50%",
                    height:"32%",
                    width:"69%",
                    borderBlockColor:"purple",
                    borderBlockStyle:"solid",
                    borderBlockWidth:"1vh",
                }}>
                    
                    <img src={logo} style={{height:"100%",width:"100%",borderRadius:"50%"}} alt="Amardeep Saha"/>
                </div>
            </div>
            <div style={{
                    display:"flex",
                    flexDirection:"column",
                    height:"100%",
                    width:"65%",
                    justifyContent:"flex-start",
                    backgroundColor:"inherit",
                    alignItems:"center",
                    borderTopRightRadius:"3%",
                    borderBottomRightRadius:"3%",
                }}>
                <div style={{marginTop:"1vh",width:"80%",margin:"2vh",height:"4%"}}>
                <input type={Text} onClick={()=>{document.getElementById("name").value="";document.getElementById("name").style.color="black";}} defaultValue="Name" id="name" style={{border:"groove 2px rgba(0,0,0,0.2)",borderRadius:"3%",color:"rgba(0,0,0,0.4)",width:"100%",height:"100%",fontFamily:"'Balsamiq Sans',cursive",fontSize:"2vh",padding:"1vh"}}></input>
        </div>
        <div style={{marginTop:"1vh",width:"80%",margin:"2vh",height:"4%"}}>
                <input type={Text} defaultValue="E-mail" onClick={()=>{document.getElementById("email").value="";document.getElementById("email").style.color="black";}} id="email" style={{border:"groove 2px rgba(0,0,0,0.2)",borderRadius:"3%",color:"rgba(0,0,0,0.4)",width:"100%",height:"100%",fontFamily:"'Balsamiq Sans',cursive",fontSize:"2vh",padding:"1vh"}}></input>
        </div>
        <div style={{marginTop:"1vh",width:"80%",margin:"2vh",height:"50%"}}>
                <textarea defaultValue="Message" onClick={()=>{document.getElementById("message").value="";document.getElementById("message").style.color="black";}} id="message" style={{border:"groove 2px rgba(0,0,0,0.2)",borderRadius:"3%",color:"rgba(0,0,0,0.4)",width:"100%",height:"100%",fontFamily:"'Balsamiq Sans',cursive",fontSize:"2vh",padding:"1vh"}}></textarea>
        </div>
        <div style={{display:"flex",justifyContent:"center",width:"80%",margin:"3vh",height:"10%"}}>
                < button onClick={()=>{window.location.reload()}} id="message" style={{borderRadius:"9%",border:"none",backgroundColor:"rgb(126, 39, 126,0.6)",color:"rgba(255,255,255,0.6)",fontFamily:"'Balsamiq Sans',cursive",fontSize:"2vh",padding:"1vh",width:"30%"}}>Send</button>
        </div>
            </div> 
        </div>
    </div>)
}

// border:"inset 3px rgba(0,0,0,0.4)",
