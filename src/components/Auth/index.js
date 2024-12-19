import classNames from 'classnames/bind';
import styles from './Auth.module.scss';

const cx = classNames.bind(styles);

function AuthForm({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default AuthForm;
