// o componente é uma clasde que tem rneder ou função que retorna jsx, ou uma const
import './style.css';
export const PostCard = (props) => {
    return (  <div className='post'>
    <img src={props.post.cover} alt={props.post.title}></img>
  <div className="post-content">
    <h1>{props.post.title}</h1>
    <p>{props.post.body}</p>
    
  </div>
  </div>);
}