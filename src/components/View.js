import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  maxWidth: '640px',
  margin: '2rem auto 3rem',
};

const View = ({ title, children }) => (
  <section className={styles.view}>
    <h1 className={styles[`view__heading`]}>{title}</h1>
    {children}
  </section>
);

View.propTypes = {
  title: PropTypes.string.isRequired,
};

export default View;
