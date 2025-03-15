import css from './Home.module.css';
import Spline from '@splinetool/react-spline';

function Home () {
    return (
        <section className={css.section}>
            <div className={css.container}>
                <div className={css.titleContent}>
                    <div>
                        <h1 className={css.title}>Connecting the</h1>
                        <h1 className={css.title}>world</h1>
                    </div>
                    <p className={css.subtitle}>
                        Keep your contacts organized and accessible with Nexora. No more lost numbers or scattered lists—just a seamless way to store, manage, and connect with the people who matter most. Stay in control of your phonebook and simplify your communication like never before.
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

