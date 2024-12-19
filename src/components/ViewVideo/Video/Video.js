import classNames from 'classnames/bind';
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function Video({ src, ...props }, ref) {
    const videoRef = useRef();
    // const videoElement = videoRef.current;
    // console.log('videoref con: ', videoRef);
    // console.log('videoelement con: ', videoElement);
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
        setVolumeVideoChild(newVolume) {
            videoRef.current.volume = newVolume;
            videoRef.current.muted = false;
        },
    }));

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current.muted = true; // Tắt tiếng để đảm bảo autoplay
                        videoRef.current.play().catch((error) => console.warn('Auto-play failed:', error));
                    } else {
                        videoRef.current.pause();
                    }
                });
            },
            { threshold: 0.5 },
        );

        observer.observe(videoRef.current);

        return () => {
            observer.unobserve(videoRef.current);
            observer.disconnect();
        };
    }, []);

    return (
        <div className={cx('video-container')}>
            <video loop src={src} {...props} ref={videoRef}></video>
        </div>
    );
}

export default forwardRef(Video);
