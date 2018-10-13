import React from 'react';
import PropTypes from "prop-types";
import styles from './styles.scss';

const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>{context.t("About Us")}</li>
                    <li className={styles.listItem}>{context.t("SUPPORT")}</li>
                    <li className={styles.listItem}>{context.t("BLOG")}</li>
                    <li className={styles.listItem}>{context.t("PRESS")}</li>
                    <li className={styles.listItem}>{context.t("API")}</li>
                    <li className={styles.listItem}>{context.t("JOBS")}</li>
                    <li className={styles.listItem}>{context.t("PRIVACY")}</li>
                    <li className={styles.listItem}>{context.t("TERMS")}</li>
                    <li className={styles.listItem}>{context.t("DIRECTORY")}</li>
                    <li className={styles.listItem}>{context.t("LANGUAGE")}</li>
                </ul>
            </nav>
        </div>
        <div className={styles.column}>
            <span className={styles.copyright}> 2018 nomadgram</span>
        </div>
    </footer>
);

Footer.contextTypes = {
    t: PropTypes.func.isRequired
}

export default Footer;