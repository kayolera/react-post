import { PostCard } from '../PostCard';
import p from 'prop-types';

import './styles.css';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard post={post} key={post.id} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: p.arrayOf(
    p.shape({
      cover: p.string.isRequired,
      title: p.string.isRequired,
      body: p.string.isRequired,
      id: p.number.isRequired,
    }),
  ),
};
