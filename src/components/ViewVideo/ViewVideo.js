import classNames from 'classnames/bind';
import styles from './ViewVideo.module.scss';
import VideoItem from './VideoItem';
import { useEffect, useState } from 'react';
import * as listVideoService from '~/services/listVideoService';

const cx = classNames.bind(styles);

function ViewVideo({ type = '' }) {
    const [page, setPage] = useState(1);
    const [listVideo, setListVideo] = useState([]);

    useEffect(() => {
        listVideoService.getVideos({ page, type }).then((data) => setListVideo(data || []));
    }, [page]);


    console.log(listVideo);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {listVideo.map((video) => (
                    <VideoItem key={video.id} video={video}></VideoItem>
                ))}
            </div>
        </div>
    );
}

export default ViewVideo;
