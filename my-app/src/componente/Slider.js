
import { useMemo } from 'react';
import { useState } from 'react';
import flechegauche from '../image/left.png';
import flechedroite from '../image/right.png';
import '../styles/slider.scss';


function Slider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const currentSlide = useMemo(
        () => slides[currentIndex],
        [currentIndex, slides]
    );

    return (
        <section className="slider-container">
            {slides.length > 1 && (
                <div>
                    <img
                        src={flechegauche}
                        alt="arrow to switch to the left"
                        onClick={goToPrevious}
                        className="left-arrow"
                    />
                    <img
                        src={flechedroite}
                        alt="arrow to switch to the right"
                        onClick={goToNext}
                        className="right-arrow"
                    />
                </div>
            )}

            <div className="slider-container__slide">
                <img
                    src={currentSlide}
                    alt="appartement interior"
                    className="slider-picture"
                />
                <span className="slider-index">
                    {currentIndex + 1} / {slides.length}
                </span>
            </div>
        </section>
    );
}


export default Slider;