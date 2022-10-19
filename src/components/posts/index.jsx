import { PostCard } from "../PostCard";
import './style.css';
import p from 'prop-types';

export const Posts = ({posts = []}) => {


    return (
        <div className='container'> <div className="posts">
        {posts.map((post) => {
         return(
         <PostCard {...post} key={post.id}/>

         );

        })}
       </div></div>
    );
}
Posts.defaultProps = {
  posts : []
}
Posts.propTypes = {
  posts: p.array,
}

