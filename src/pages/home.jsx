import React, { useEffect } from "react";
export default function Home(){
    
    return (
    <div id="home" style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"90vw",
        height:"90vh",
        padding:"5vw",
        backgroundColor:"white"
    }}>
        <div style={{
            backgroundColor:"rgba(255,255,255,0.44)",
            borderRadius:"3%",
            width:"70vw",
            display:"flex",
            flexDirection:"column",

            padding:"3vh",
            marginLeft:"auto",
            marginTop:"auto",
            marginBottom:"auto",
            height:"auto"
        }}>
        <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",fontFamily:"'Balsamiq Sans',cursive",fontSize:"5vh",marginBottom:"2vh"}}>
            About Me   
        </div>
         <div style={{
            backgroundColor:"rgba(255,255,255,0.44)",
            borderRadius:"3%",
            width:"70vw",
            display:"flex",
            flexDirection:"row",
            justifyContent:"flex-start",
            margin:"auto",
            height:"auto",
            lineHeight:"30px"
        }}>    <div style={{
            height:"auto",
            width:"auto",
            justifyContent:"center",
            alignItems:"flex-start",
            flexDirection:"column",
        }}>
             <img src={{}} style={{height:"30vh",width:"30vh",borderRadius:"50%", marginRight:"7vh"}}></img>
             <button style={{backgroundColor:"purple", border:'0px',color:"white",fontSize:"2vh"}} type="submit" formAction="mailto" href="amardeepsaah13@gmail.com">message me</button>
            </div>
            <div>
            I am currently an undergraduate student pursuing my B.Tech in Computer Science and engineering from Indian Institute of Information Technology Ranchi. I am Tech freak and a Full-stack developer. Being a Tech freak I am interested in various topics some of which are  Blockchain and web3, AI/ML , Cybersecurity , System design , Kernel Programming ..... and the list keeps growing. Among them I am currently inclined towards Blockchain developement and web3 space.     
        <br/><br/>
        <b>Here are few Tech stack that I am aquainted to or have worked with:-</b>
        <br/>
        <ul typeof="none">
            <li><b>Frontend</b>: Javascript, HTML, CSS, React .</li>
            <br></br>
            <li><b>Backend</b>: Django, NodeJS, ExpressJS .</li>
            <br></br>
            <li><b>Database Tools</b>: MongoDB, sqlite3 (django).</li>
            <br></br>
            <li><b>Web3 Frameworks</b>: web3.js, Ethers.js, Truffle, Hardhat.</li>
            <br></br>
            <li><b>Scripting Languages</b>: Shell, Python (&gt;3.7), C++17, Solidity (smart contract).</li>
        </ul>
        <br>
        </br>
        Apart from hugging the documentations all the time I do enjoy playing Badminton, Football and various competetive esports in my free time. <b>XD</b>
        </div> 
        </div>       
</div>
</div>
    )
}
