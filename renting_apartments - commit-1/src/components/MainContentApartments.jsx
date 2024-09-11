import { Fragment } from "react"

export default function MainContentApartments() {
    return (
        <Fragment>
            {/* main__container should be -> main__container_apartments */}
            {/* make BEM metodology */}
            <div className="main__container">
                <div className="main__container__card">
                    <p className="main__container__card_name">Кенесары, 50</p>
                    <img className="main__container__card_image" src="https://alakt-photos-kr.kcdn.kz/webp/95/95be4bef-5891-4ebe-b509-62032994a3c2/19-full.webp"></img>
                    <button className="main__container__card_button">Забронировать</button>
                </div>

                <div className="main__container__card">
                    <p className="main__container__card_name">Бейбитшелик, 24</p>
                    <img className="main__container__card_image" src="https://www.kn.kz/uploads/cache/o_gallery_full/images/objects/8617206_original.jpg"></img>
                    <button className="main__container__card_button">Забронировать</button>
                </div>

                <div className="main__container__card">
                    <p className="main__container__card_name">Тауелсиздик, 34/2</p>
                    <img className="main__container__card_image" src="https://alakt-photos-kr.kcdn.kz/webp/e9/e932eac6-54a3-4faf-8725-5a8ba56be1fe/5-full.webp"></img>
                    <button className="main__container__card_button">Забронировать</button>
                </div>

                <div className="main__container__card">
                    <p className="main__container__card_name">Аль-Фараби, 30</p>
                    <img className="main__container__card_image" src="https://alakt-photos-kr.kcdn.kz/webp/d0/d0461b0f-748f-4558-9d97-d1e8143c36b2/2-full.webp"></img>
                    <button className="main__container__card_button">Забронировать</button>
                </div>
            </div>
        </Fragment>
    )
}