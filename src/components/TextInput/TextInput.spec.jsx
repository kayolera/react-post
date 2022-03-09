import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should call handlechange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChage={fn} searchvalue={'testando'} />);
    const input = screen.getByPlaceholderText('');
    expect(input.value).toBe('testando');
  });

  test('it should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChage={fn} searchvalue="um valor qualquer" />);
    const input = screen.getByPlaceholderText('');
    const value = 'o valor';
    userEvent.type(input, value);

    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChage={fn} searchvalue="" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
