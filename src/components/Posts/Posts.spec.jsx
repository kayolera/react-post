const { render, screen } = require('@testing-library/react');
import { Posts } from '.';

const props = {
  posts: [
    {
      id: 1,
      cover: 'cover',
      body: 'Body',
      title: 'Title',
    },
    {
      id: 2,
      cover: 'cover 2',
      body: 'Body 2',
      title: 'Title 2',
    },
    {
      id: 3,
      cover: 'cover 3',
      body: 'Body 3',
      title: 'Title 3',
    },
  ],
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);
    expect(screen.getAllByRole('heading', { name: /Title/i })).toHaveLength(3);
  });

  it('should not render posts', () => {
    render(<Posts />);
    expect(screen.queryAllByRole('heading', { name: /Title/i })).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
