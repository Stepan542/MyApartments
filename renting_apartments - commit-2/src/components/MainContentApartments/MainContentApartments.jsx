{/*eoiurgoqwertghewtghreghrghreqigurehw */}
import { useState, useEffect, Fragment } from "react"
import axios from "axios"
import './MainContentApartmentsStyles.css'

export default function MainContentApartments() {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        {/* http://192.168.1.76:8000/api/apartments/ */}
        axios.get('http://192.168.1.76:8000/api/apartments/')
        .then(response => {
            setApartments(response.data);
        })

        .catch(error => {
            console.error('ERROR!', error);
        })
    }, [])
    
    return (
        <Fragment>
            {/* main__container should be -> main__container_apartments */}
            {/* make BEM metodology */}
            <div className="main__container">
                {apartments.map(apartment => (
                <div key={apartment.id} className="main__container__card">
                    <p className="main__container__card_name">{apartment.address}</p>
                    <img className="main__container__card_image" src={apartment.image_url}></img>
                    <button className="main__container__card_button">{apartment.button_text}</button>
                </div>
                ))}
            </div>
        </Fragment>
    )
}