import './styles.css';
import { useEffect, useState, useCallback } from 'react';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(4);
  const [searchvalue, setSearchvalue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filterdPosts = searchvalue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchvalue.toLocaleLowerCase());
      })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const pstsAndPhotos = await loadPosts();

    setPosts(pstsAndPhotos.slice(page, postsPerPage));
    setAllPosts(pstsAndPhotos);
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const handleChage = (e) => {
    const { value } = e.target;
    setSearchvalue(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        {!!searchvalue && <h1>Search value: {searchvalue}</h1>}

        <TextInput searchvalue={searchvalue} handleChage={handleChage} />
      </div>

      {filterdPosts.length > 0 && <Posts posts={filterdPosts} />}

      {filterdPosts.length === 0 && <p>Nao existem posts :(</p>}

      <div className="button-container">
        {!searchvalue && <Button text="Load more posts" onClick={loadMorePosts} disabled={noMorePosts} />}
      </div>
    </section>
  );
};

// export class Home2 extends Component{

//   state = {
//     posts: [],
//     allPosts: [],
//     page:0,
//     postsPerPage:4,
//     searchvalue: ''

//   }

//  async componentDidMount(){
//    await this.loadPosts();
//  }

//  loadPosts = async () => {
//   const pstsAndPhotos = await loadPosts();
//   const {page,postsPerPage} = this.state;
//   this.setState({posts: pstsAndPhotos.slice(page,postsPerPage)
//   ,allPosts:pstsAndPhotos
//   })

//  }

//  loadMorePosts = ()=>{

//    const {page,postsPerPage,allPosts,posts} =  this.state;
//    const nextPage = page + postsPerPage;
//    const nextPosts = allPosts.slice(nextPage,nextPage+postsPerPage);
//    posts.push(...nextPosts);
//    this.setState({posts,page:nextPage});
//  }

//  handleChage = (e) => {
//     const {value} = e.target;
//    this.setState({searchvalue: value})
//  }

//   render(){
//     const {posts,page,postsPerPage,allPosts , searchvalue} = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     const filterdPosts = !!searchvalue ?
//     allPosts.filter(post => {
//       return post.title.toLowerCase().includes(searchvalue.toLocaleLowerCase())
//     })
//     : posts;

//         return (
//      <section className='container'>
//           <div className='search-container'>
//           {!!searchvalue && (<h1>Search value: {searchvalue}</h1>)}

//          <TextInput searchvalue={searchvalue} handleChage={this.handleChage}/>

//           </div>

//         {filterdPosts.length > 0 && (
//           <Posts posts={filterdPosts} />
//         )}

//         {filterdPosts.length === 0 && (
//           <p>Nao existem posts :(</p>
//         )}

//       <div className='button-container'>

//         {!searchvalue && (
//    <Button text="Next Page"
//    onClick={this.loadMorePosts}
//    disabled={noMorePosts}
//    />
//         )}

//       </div>
//      </section>

//     );
//   }

// }
