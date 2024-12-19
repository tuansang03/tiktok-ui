import classNames from 'classnames/bind';
import styles from './FormPages.module.scss';
import { AppleIcon, FacebookIcon, GoogleIcon, KakaoTalkIcon, LineIcon, QRIcon, UserIcon } from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

const data = [
    {
        icon: <FacebookIcon />,
        title: 'Tiếp tục với Facebook',
        disabled: false,
    },
    {
        icon: <GoogleIcon />,
        title: 'Tiếp tục với Google',
        disabled: false,
    },
    {
        icon: <LineIcon />,
        title: 'Tiếp tục với Line',
        disabled: false,
    },
    {
        icon: <KakaoTalkIcon />,
        title: 'Tiếp tục với KakaoTalk',
        disabled: false,
    },
];

const MENU_LOGIN = {
    titleHeader: 'Đăng nhập vào TikTok ',
    data: [
        {
            icon: <QRIcon />,
            title: 'Sử dụng mã QR',
            disabled: false,
        },
        {
            icon: <UserIcon />,
            title: 'Số điện thoại/email/tên người dùng',
            disabled: false,
        },
        ...data,
        {
            icon: <AppleIcon />,
            title: 'Tiếp tục với Apple',
            disabled: false,
        },
    ],
    policy: `
    Bằng việc tiếp tục với tài khoản có vị trí tại 
    <a href="#" target="_blank" rel="noopener noreferrer">Việt Nam</a>, bạn phải đồng ý với 
    <a href="#" target="_blank" rel="noopener noreferrer">Điều khoản dịch vụ</a>, 
    đồng thời xác nhận rằng bạn đã đọc 
    <a href="#" target="_blank" rel="noopener noreferrer">Chính sách quyền riêng tư</a> của chúng tôi.
`,
    titleFooter: 'Bạn không có tài khoản?',
    toLink: 'Đăng ký',
};

const MENU_SIGNUP = {
    titleHeader: 'Đăng ký TikTok ',
    data: [
        {
            icon: <UserIcon />,
            title: 'Số điện thoại/email/tên người dùng',
            disabled: false,
        },
        ...data,
    ],
    policy: `
    Bằng việc tiếp tục với tài khoản có vị trí tại 
    <a href="#" target="_blank" rel="noopener noreferrer">Việt Nam</a>, bạn phải đồng ý với 
    <a href="#" target="_blank" rel="noopener noreferrer">Điều khoản dịch vụ</a>, 
    đồng thời xác nhận rằng bạn đã đọc 
    <a href="#" target="_blank" rel="noopener noreferrer">Chính sách quyền riêng tư</a> của chúng tôi.
`,
    titleFooter: 'Bạn đã có tài khoản?',
    toLink: 'Đăng nhập',
};
function FromPages() {
    const [isFormLogin, setIsFormLogin] = useState(true)//Mặc định hiển thị Form MENU_LOGIN trước

    const isLogin = isFormLogin ? MENU_LOGIN : MENU_SIGNUP;

    const handleChangeForm = () => {
        setIsFormLogin((prev) => !prev)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('main-form')}>
                <h1 className={cx('title')}>{isLogin.titleHeader}</h1>
                <div className={cx('body-form')}>
                    {isLogin.data.map((data) => (
                        <button className={cx(cx('button'))}>
                            <span className={cx('icon')}>{data.icon}</span>
                            <p className={cx('text')}>{data.title}</p>
                        </button>
                    ))}
                </div>
            </div>
            <div className={cx('policy')}>
                <p className={cx('text-policy')} dangerouslySetInnerHTML={{ __html: isLogin.policy }}></p>
            </div>
            <div className={cx('footer-form')}>
                <p className={cx('title-footer')}>
                    {isLogin.titleFooter}
                    <span className={cx('to')} onClick={handleChangeForm} >{isLogin.toLink}</span>
                </p>
            </div>
        </div>
    );
}

export default FromPages;
