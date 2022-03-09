import './styles.css';
import p from 'prop-types';
export const TextInput = ({ searchvalue, handleChage }) => {
  return <input className="text-input" type="search" onChange={handleChage} value={searchvalue} placeholder="" />;
};

TextInput.propTypes = {
  searchvalue: p.string.isRequired,
  handleChage: p.func.isRequired,
};
