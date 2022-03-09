import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
const mock = {
  id: 1,
  cover: 'cover',
  body: 'Body',
  title: 'Title',
};
describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard post={mock} />);
    expect(screen.getByRole('img', { name: mock.title })).toHaveAttribute('src', mock.cover);
    expect(screen.getByRole('heading', { name: mock.title })).toBeInTheDocument();
    expect(screen.getByText(mock.body)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard post={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
