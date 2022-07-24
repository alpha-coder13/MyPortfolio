import React from "react";

export default function Experience(props){
    const pages=props.pages;
    return (
        <div>
            {pages.map((nm)=>{
                console.log(nm.id);
                return(
                    <div id={nm.id} style={{
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
                            backgroundColor:"rgba(255,255,255,0.44)",
                            borderRadius:"3%",
                            width:"70vw",
                            display:"flex",
                            flexDirection:"column",
                
                            padding:"3vh",
                            margin:"auto",
                            height:"auto"
                        }}>
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontFamily:"'Balsamiq Sans',cursive",fontSize:"5vh",margin:"auto",}}>
                            {nm.id}
                        </div>
                
                        </div>
                    </div>
                )
            })}
    </div>
    )
}
