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
            margin:"auto",
            height:"auto"
        }}>
        <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",fontFamily:"'Balsamiq Sans',cursive",fontSize:"5vh",margin:"auto",}}>
            About Me   
        </div>
         <div style={{
            backgroundColor:"rgba(255,255,255,0.44)",
            borderRadius:"3%",
            width:"70vw",
            display:"flex",
            flexDirection:"row",

            padding:"3vh",
            margin:"auto",
            height:"auto"
        }}>
             <img src={{}} style={{height:"30vh",width:"30vh",borderRadius:"50%", margin:"auto",padding:"1vh"}}></img>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et finibus velit, rutrum gravida diam. Nunc ut dolor quis lacus ultricies accumsan et in mi. Morbi nisl ipsum, facilisis id bibendum ac, consequat at arcu. Mauris id vestibulum velit. Vestibulum gravida congue quam. Praesent eu ultricies leo. Morbi ornare justo a lacus pharetra pellentesque. Nam molestie tincidunt odio. Vivamus a pellentesque elit, iaculis mattis felis.
        <br/><br/>
        Nullam ipsum magna, dictum vel orci ac, gravida molestie metus. Integer aliquet sem at ante lobortis tristique. Sed orci ipsum, ullamcorper eu gravida eu, fringilla a ex. Curabitur vehicula quis nisl nec viverra. Maecenas quis quam blandit, tempus velit ut, auctor lacus. Nam a nisl quis augue feugiat auctor quis et orci. Aliquam erat volutpat. Integer mollis lacus quis iaculis malesuada. In condimentum metus sit amet egestas faucibus. </div> 
       </div>
</div>
    )
}
