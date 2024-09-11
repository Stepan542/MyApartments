import { Fragment, useEffect } from "react"
import { quotes } from './quotes.js'
import { useState } from "react"
import { CSSTransition } from "react-transition-group";
import './MainContentQuotesStyles.css'
/*import { useRef } from "react";*/

export default function MainContentQuotes() {
    const [ActiveQuoteIndex, SetActiveQuoteIndex] = useState(0);
    const [inProp, SetInProp] = useState(true);
    /*const nodeRef = useRef(null)*/

    /*useEffect(() => {
        SetInProp(true);
    }, [ActiveQuoteIndex])*/

    /* Never write {currentIndex === quotes.length - 1 ? 0 : currentIndex + 1} */
    const handleNext = () => {
        console.log('Button next clicked')
        SetInProp(false);
        setTimeout(() => {
            SetActiveQuoteIndex((currentIndex) => 
                (currentIndex === quotes.length - 1 ? 0 : currentIndex + 1)
            );
        SetInProp(true);
        }, 500);
    };

    const handlePrevious = () => {
        SetInProp(false);
        setTimeout(() => {
            SetActiveQuoteIndex((currentIndex) => 
                (currentIndex === 0 ? quotes.length - 1 : currentIndex - 1)
            );
        SetInProp(true);
        }, 500);
    };

    const currentQuoteIndexNow = quotes[ActiveQuoteIndex] || {};
    console.log(quotes[ActiveQuoteIndex])

    return (
        <Fragment>
            <div className="main__container_quotes">
                <CSSTransition in={inProp} timeout={500} classNames="fade" unmountOnExit>
                <div className="main__container_quotes__quote">
                    <button className="main__container_quotes__quote_button-1" onClick={handlePrevious}>&#10143;</button>
                    <img src={ currentQuoteIndexNow.image || '' } alt="" className="main__container_quotes__quote_image" />
                    <p className="main__container_quotes__quote_name">{ currentQuoteIndexNow.name || ''  }</p>
                    <div className="main__container_quotes__quote_description">{ currentQuoteIndexNow.quote || ''  }</div>
                    <button className="main__container_quotes__quote_button-2" onClick={handleNext}>&#10143;</button>
                </div>
                </CSSTransition>
            </div>
        </Fragment>
    )
}