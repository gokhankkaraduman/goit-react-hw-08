import css from './Home.module.css';
import Spline from '@splinetool/react-spline';

function Home () {
    return (
        <section className={css.section}>
            <div className={css.container}>
                <div className={css.title}>
                    <h1>Where Connections Thrive.</h1>
                </div>
                <div className={css.td}>
                    <Spline
                        scene="https://prod.spline.design/rLKTICRxipdYtN5C/scene.splinecode" 
                    />
                </div>
            </div>
        </section>
    )
};

export default Home;

