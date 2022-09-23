
import './Home.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/loadPosts';
import { Posts } from '../../components/posts';
import { Button } from '../../components/button';
import {SearchComponent} from '../../components/search'


class Home extends Component {
  state = {
    posts: [],
    allPosts : [],
    page: 0,
    postPerPage: 4,
    searchValue : "",
  }
  loadAMorePosts = () =>{
   const {page,postPerPage,allPosts,posts} = this.state;
   const nextPage = page + postPerPage;
  const nexPost = allPosts.slice(page,nextPage + postPerPage);
  posts.push(...nexPost);
  this.setState({posts, page: nextPage});

  }
  async componentDidMount(){
   this.loadPost();
  }
    loadPost = async () => {
      const {page,postPerPage,allPosts,posts} = this.state;
      

   let postsAndPhoto = await loadPosts();

    this.setState({posts: postsAndPhoto.slice(page, postPerPage), allPosts: postsAndPhoto});
    }
    handleChange = (e) => {
   let {target: {value}} = e;
   
 
  this.setState({ searchValue: value});
    }
    
  render() {
   

    //i!! duplo sinal de nagacao tranforma e valores em boleanos
    let {posts, page,postPerPage,allPosts,searchValue} = this.state;
    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());

    }): posts;
    let noMorePosts = page + postPerPage >= allPosts.length;
    return (
    <section className='container'>
   <SearchComponent searchValue={searchValue} handleChange={this.handleChange}/>
   
 {filteredPosts.length > 0 ? <Posts posts={filteredPosts}/> : <div><p>sem posts!!!!</p></div>}
 {!(searchValue != null && searchValue !== "")?<Button disabled={noMorePosts} onClick={this.loadAMorePosts} text="Load More Posts" /> : <div></div>}
    </section>
   
    );
  }
  
}

export default Home;
