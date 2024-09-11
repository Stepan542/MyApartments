import { Fragment, useState, useEffect } from "react"
import axios from "axios";
import "./AdminPanelStyles.css"

export default function AdminPanel() {
    const [apartments, setApartments] = useState([]);
    const [buttonTexts, setButtonTexts] = useState('');
    
    useEffect(() => {
        {/* http://192.168.1.76:8000/api/apartments/ */}
        axios.get('http://192.168.1.76:8000/api/apartments/')
        .then(response => {
            console.log('Current apartments data: ', response.data);
            setApartments(response.data);

            const initialButtonTexts = {};
            response.data.forEach(apartment => {
                initialButtonTexts[apartment.id] = apartment.button_text || '';
            });
            setButtonTexts(initialButtonTexts);
            console.log('Print data after foreach: ', initialButtonTexts);
        })

        .catch(error => {
            console.error('ERROR!', error);
        });
    }, [])

    const handleTextChange = (apartmentId, text) => {
        console.log(`Changing button text for apartment ID: ${apartmentId} into ${text}`);

        setButtonTexts(prevTexts => ({
            ...prevTexts, 
            [apartmentId] : text
        }));
    }

    const updateApartmentButtonText = async (apartmentId) => {
        console.log(`Updationg text for apartment: ${apartmentId}`);
        console.log('Text for button that sent: ', buttonTexts[apartmentId]);
        
        try {
            const response = await axios.put(`http://192.168.1.76:8000/api/apartments/${apartmentId}/`, {
                button_text: buttonTexts[apartmentId]
            });
            console.log('Button text updated!', response.data);

        } catch (error) {
            console.log('Error occured Stepa!', error);
        }
    }
    
    return (
        <Fragment>
            {/* main__container should be -> main__container_apartments */}
            {/* make BEM metodology */}
            <p className="main__container__name">IT IS A ADMIN PANEL</p>
            <div className="main__container">
                {apartments.map(apartment => (
                <div key={apartment.id} className="main__container__card">
                    <p className="main__container__card_name">{apartment.address}</p>
                    {/* Remove br in future */ }
                    <img className="main__container__card_image" src={apartment.image_url}></img><br />
                    <input type="text"
                     placeholder="Напишите здесь..."
                     value={buttonTexts[apartment.id]}
                     onChange={(e) => handleTextChange(apartment.id, e.target.value)}
                     className="main__container__card_input" />
                    <button className="main__container__card_button" 
                            onClick={() => updateApartmentButtonText(apartment.id)}>
                            Применить изменения
                    </button>
                </div>
                ))}
            </div>
        </Fragment>
    )
}