import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar';
import PropTypes from 'prop-types';
import Login from '~/components/Auth/login';
import AuthForm from '~/components/Auth';
import { UserAuth } from '~/components/Store/AuthContext';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { openFormLogin } = UserAuth();

    // useEffect(() => {
    //     document.body.style = openFormLogin ? 'overflow-y: hidden' : 'overflow-y: overlay';
    // }, [openFormLogin]);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            {openFormLogin && <AuthForm>{openFormLogin && <Login />}</AuthForm>}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
