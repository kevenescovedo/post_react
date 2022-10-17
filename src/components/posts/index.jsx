import { PostCard } from "../PostCard";
import './style.css';

export const Posts = ({posts = []}) => {
   
   
    return (
        <div className='container'> <div className="posts">
        {posts.map((post) => {
         return(
         <PostCard post={post} key={post.id}/>
   
         );
        
        })}
       </div></div>
    );
}

