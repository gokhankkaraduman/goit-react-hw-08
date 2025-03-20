import Spline from '@splinetool/react-spline';
import css from './MainLoading.module.css';

function MainLoading() {
    return (
        <div className={css.mainLoadingContainer}>
            <div className={css.splineWrapper}>
                <Spline
                    scene="https://prod.spline.design/5W52Wn43T4if7YZN/scene.splinecode"
                />
            </div>
        </div>
    );
}

export default MainLoading;