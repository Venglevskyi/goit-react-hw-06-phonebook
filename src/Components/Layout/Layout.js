import React from "react";
import PropTypes from "prop-types";

import styles from "./layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.Layout}>{children}</div>
);

export default Layout;
