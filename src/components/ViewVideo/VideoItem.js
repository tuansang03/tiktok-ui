import classNames from 'classnames/bind';
import styles from './ViewVideo.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack, faPlay, faUpLong } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import VideoAction from './VideoAction';
import { VolumeIcon, MoreIcon, MusicIcon, VolumeMuteIcon } from '../Icons';
import Video from './Video/Video';
import { Wrapper as PopperWrapper } from '../Popper';
const cx = classNames.bind(styles);

function VideoItem({ video }) {
    console.log(video);

    const videoRef = useRef();
    const descriptionRef = useRef(null);

    const [isExpanded, setisExpanded] = useState(false); //Trạng thái của description
    const [isPlaying, setIsPlaying] = useState(true); //Trạng thái của video
    const [toggled, setToggled] = useState(false); //Trạng thái nút on/off

    //Xử lý ẩn hiện description
    const toggleDescription = (e) => {
        e.stopPropagation();
        setisExpanded((prev) => !prev);
    };

    //Xử lý play/pause video
    const handlePlayAndPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    //Xử lý nút chuyển đổi on/off
    const handleToggled = (e) => {
        e.stopPropagation();
        setToggled(!toggled);
    };

    const renderMore = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <ul className={cx('wrapper-more')}>
                        <li>
                            <div>
                                <FontAwesomeIcon className={cx('up-icon')} icon={faUpLong} />
                            </div>
                            <span className={cx('more-title')}>Cuộn tự động</span>
                            <button
                                className={cx('toggle-btn', { toggled: toggled })}
                                onClick={(e) => {
                                    handleToggled(e);
                                }}
                            >
                                <span className={cx('thumb')}></span>
                            </button>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon className={cx('up-icon')} icon={faHeartCrack} />
                            </div>
                            <span className={cx('more-title')}>Không quan tâm</span>
                        </li>
                        <li>
                            <div>
                                <FontAwesomeIcon className={cx('up-icon')} icon={faFlag} />
                            </div>
                            <span className={cx('more-title')}>Báo cáo</span>
                        </li>
                    </ul>
                </PopperWrapper>
            </div>
        );
    };

    const [volume, setVolume] = useState(0); //Volume mặc định được đặt là 0
    const [prevVolume, setPrevVolume] = useState(1); // Lưu trữ giá trị volume trước khi tắt

    const handleChangeVolume = (e) => {
        let newVolume;
        if (e && e.target) {
            newVolume = parseFloat(e.target.value);
        } else {
            newVolume = e;
        }

        // Cập nhật volume state
        setVolume(newVolume);
        // Điều chỉnh volume video qua ref
        if (videoRef.current) {
            console.log('videoref cha: ', videoRef);
            console.log('videoelement cha: ', videoRef.current);
            videoRef.current.setVolumeVideoChild(newVolume);
        }
    };

    const handelOnOffVolume = (e) => {
        e.stopPropagation();
        if (volume === 0) {
            // Nếu volume là 0, khôi phục giá trị trước đó

            handleChangeVolume(prevVolume);
        } else {
            // Nếu volume khác 0, tắt âm lượng
            setPrevVolume(volume);
            handleChangeVolume(0);
        }
    };

    const x = video.meta.video.resolution_x;
    const y = video.meta.video.resolution_y;
    const isHorizontal = x > y;

    // useEffect(() => {
    //     const videoElement = videoRef.current;
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     setIsPlaying(false);
    //                     handlePlayAndPause();
    //                 } else {
    //                     setIsPlaying(true);
    //                     handlePlayAndPause();
    //                 }
    //             });
    //         },
    //         {
    //             threshold: 0.5,
    //         },
    //     );
    //     observer.observe(videoElement);
    //     return () => {
    //         observer.disconnect();
    //     };
    // });

    // useEffect(() => {
    //     let options = {
    //       rootMargin: "0px",
    //       threshold: [0.25, 0.75]
    //     };

    //     let handlePlay = (entries, observer) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           videoRef.current.play();
    //         } else {
    //           videoRef.current.pause();
    //         }
    //       });
    //     };

    //     let observer = new IntersectionObserver(handlePlay, options);

    //     observer.observe(videoRef.current);
    //   });

    return (
        <article className={cx('wrapper-item', { horizontal: isHorizontal })}>
            <div className={cx('video-item')} onClick={handlePlayAndPause}>
                <Video ref={videoRef} src={video.file_url}></Video>

                <div className={cx('icon-container')}>
                    <div className={cx('volume')}>
                        <div className={cx('icon-volume')} onClick={handelOnOffVolume}>
                            {volume === 0 ? <VolumeMuteIcon /> : <VolumeIcon />}
                        </div>
                        <div className={cx('change')}>
                            <input
                                className={cx('icon-change')}
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={handleChangeVolume}
                                onClick={(e) => e.stopPropagation()}
                            ></input>
                        </div>
                    </div>
                    <Tippy interactive offset={[43, 36]} placement="right" render={renderMore}>
                        <div className={cx('icon-more')}>{<MoreIcon />}</div>
                    </Tippy>
                </div>
                {!isPlaying && (
                    <span className={cx('icon-play', { show: !isPlaying })}>
                        <FontAwesomeIcon icon={faPlay} />
                    </span>
                )}
                <div className={cx('info')}>
                    <div className={cx('title')}>
                        <Link href="#" className={cx('nickname')}>
                            {video.user.nickname}
                        </Link>
                        <span className={cx('dot')}> · </span>
                        <p className={cx('time')}>{video.published_at.split(' ')[0].split('-').reverse().join('-')}</p>
                    </div>
                    <div className={cx('container-des')}>
                        <p ref={descriptionRef} className={cx('description', { expanded: isExpanded })}>
                            {video.description}
                        </p>
                        <span onClick={(e) => toggleDescription(e)} className={cx('more')}>
                            {isExpanded ? '' : 'thêm'}
                        </span>
                    </div>
                    <p className={cx('hide-less')} onClick={(e) => toggleDescription(e)}>
                        {isExpanded ? 'ẩn bớt' : ''}
                    </p>
                    <div className={cx('music')}>
                        <span className={cx('icon-music')}>{<MusicIcon />}</span>
                        <Link className={cx('music-link')} href="#">
                            {video.music}
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx('video-action')}>
                <VideoAction video={video} />
            </div>
        </article>
    );
}
export default VideoItem;
