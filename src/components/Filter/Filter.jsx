import PropTypes from 'prop-types';
import styles from './Filter.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Filter
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export { Filter };
