import { PostCard } from "../PostCard";
import './style.css';

export const Posts = (props) => {

    let {posts} = props;
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

