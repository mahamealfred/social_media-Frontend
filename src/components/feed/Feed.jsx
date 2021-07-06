import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css";
import { useState , useEffect} from "react";
import axios from "axios";



export default function Feed() {
    const [posts,setPosts]=useState([]);

    useEffect(() => {
        const fetchPost= async () =>{
            const res=await axios.get("posts/timeline/60ddf9a694c74023705491ed")
           setPosts(res.data)
        };
        

    fetchPost();
      
    },[]);
    return (
        <div className="feed">
           <div className="feedWrapper">
           <Share />
           {posts.map(p=>(
               <Post key={p._id} post={p}/>

           ))}
           
           </div>
        </div>
       
    )
}
