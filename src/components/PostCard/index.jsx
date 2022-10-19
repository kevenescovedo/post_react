// o componente é uma clasde que tem rneder ou função que retorna jsx, ou uma const
import './style.css';
import p from 'prop-types';
export const PostCard = ({title,cover,body}) => {
    return (  <div className='post'>
    <img src={cover} alt={title}></img>
  <div className="post-content">
    <h1>{title}</h1>
    <p>{body}</p>

  </div>
  </div>);
}
PostCard.propTypes = {
  title: p.string.isRequired,
  cover: p.string.isRequired,
  body: p.string.isRequired,
  id: p.number.isRequired,
}
