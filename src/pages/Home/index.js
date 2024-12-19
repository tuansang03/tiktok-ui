import ViewVideo from '~/components/ViewVideo';

function Home() {
    const CATEGORIES = 'for-you';

    return (
        <div style={{ height: '2000px' }}>
            <ViewVideo type={CATEGORIES} />
        </div>
    );
}

export default Home;
