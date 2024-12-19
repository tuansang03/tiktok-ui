import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
import FromPages from './FormPages';
import { CLoseIcon } from '../Icons';
import { UserAuth } from '../Store/AuthContext';

const cx = classNames.bind(styles);

function Login() {
    const { setOpenFormLogin } = UserAuth();

    const handleCloseForm = () => {
        setOpenFormLogin(false)
    }

    return (
        <div className={cx('form-wrapper')}>
            <div className={cx('from')}>
                <div className={cx('tab-control')} onClick={handleCloseForm}>
                    <CLoseIcon />
                </div>
                <FromPages />
            </div>
        </div>
    );
}

export default Login;
