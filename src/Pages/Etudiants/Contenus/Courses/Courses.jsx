import React, {useState} from "react";
import "./Courses.css"
import Chapter from "./Chapter/Chapter.jsx";
import {Header} from "../../Accueil/Header/Header.jsx";

const Courses = ()=>{
    const [courses, setCourses] = useState([
        {
            id: 1,
            langue: "Fançais",
            description: "Français",
            chapters:[
                {
                    id: 1,
                    title: "Premier chapitre",
                    content:{
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, purus sed semper pulvinar, ex mauris finibus lectus, at condimentum turpis nisi vel ligula.",
                        images: ["image1.jpg","image2.jpg"]
                    }
                },
                {
                    id: 2,
                    title: "Deuxième chapitre",
                    content:{
                        text: "Consectetur adipiscing elit. Sed auctor, purus sed semper pulvinar, ex mauris finibus lectus, at condimentum turpis nisi vel ligula.",
                        images: [
                            "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                            "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        ]
                    }
                },
                {
                    id: 3,
                    title: "Troisième chapitre",
                    content:{
                        text: "Sed auctor, purus sed semper pulvinar, ex mauris finibus lectus, at condimentum turpis nisi vel ligula.",
                        images: [
                            "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                            "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        ]
                    }
                }
            ]
        }
    ])
    const [chapter,setChapter] = useState(courses[0].chapters[0])
    return <>
        <Header/>
        <div className="courses ">
            {
                courses.map(course => (
                    <div className="course-card" key={course.id}>
                        <ul className="chapters">
                            {
                                course.chapters.map(chapter=>{
                                    return <li className="list" onClick={()=>setChapter(chapter)}>{chapter.title}</li>
                                })
                            }
                        </ul>
                    </div>
                ))
            }
            <Chapter chapter={chapter}/>
        </div>
    </>
}

export default Courses