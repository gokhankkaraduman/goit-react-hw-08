import css from './Home.module.css';
import Spline from '@splinetool/react-spline';

function Home () {
    return (
        <section className={css.section}>
            <div className={css.container}>
                <div className={css.titleContent}>
                    <h1 className={css.title}>Where Connections Thrive.</h1>
                    <p className={css.subtitle}>
                        Stay connected, never miss a call. With Nexora, managing your contacts is easier than ever. Organize your phonebook, streamline communication, and keep relationships thriving.
                    </p>
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

