import React from "react";

const Chapter = ({chapter,setChapter})=>{
    return <div className="chapter" onClick={()=>setChapter(chapter)}>
        <div className="content">{chapter.content.text}</div>
        <div className="images">
            <img src={chapter.content.image} alt={chapter.title} />
        </div>
    </div>
}

export default Chapter