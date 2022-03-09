import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';
const fn = jest.fn();
describe('<Button />', () => {
  it("should render the button with the text 'Load more'", () => {
    render(<Button text="Load more" onClick={fn} />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalled();
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="Load more" onClick={fn} disabled={true} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    render(<Button text="Load more" onClick={fn} disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const { container } = render(<Button onClick={fn} text="Load more" disabled={true} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
