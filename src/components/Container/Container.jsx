import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={styles.container}>{children} hhh</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Container };
