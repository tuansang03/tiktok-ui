import classNames from 'classnames/bind';
import styles from './ViewVideo.module.scss';
import Button from '~/components/Button';
import { LoveIcon, CommentIcon, LikeIcon, ShareIcon, AddFollowIcon, AddFollowCheckIcon } from '../Icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function VideoAction({ video }) {
    return (
        <div className={cx('wrapper-action')}>
            <div className={cx('action-item')}>
                <Button className={cx('btn-action')}>
                    <Image className={cx('image-avatar')} src={video.user.avatar}></Image>
                    <button className={cx('follow-icon')}>
                        <AddFollowIcon />
                    </button>
                </Button>
            </div>
            <div className={cx('action-item')}>
                <Button className={cx('btn-action')}>
                    <LoveIcon />
                </Button>
                <span className={cx('info-count')}>{video.likes_count}</span>
            </div>
            <div className={cx('action-item')}>
                <Button className={cx('btn-action')}>
                    <CommentIcon />
                </Button>
                <span className={cx('info-count')}>{video.comments_count}</span>
            </div>
            <div className={cx('action-item')}>
                <Button className={cx('btn-action')}>
                    <LikeIcon />
                </Button>
                <span className={cx('info-count')}>{video.views_count}</span>
            </div>
            <div className={cx('action-item')}>
                <Button className={cx('btn-action')}>
                    <ShareIcon />
                </Button>
                <span className={cx('info-count')}>{video.shares_count}</span>
            </div>
        </div>
    );
}

export default VideoAction;
