import Header from "./components/Header/Header"
import { Fragment } from "react"
import MainContentApartments from "./components/MainContentApartments/MainContentApartments"
import MainContentQuotes from "./components/MainContentQuotes/MainContentQuotes"
import Footer from "./components/Footer/Footer"

export default function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <p className='main__greeting'>Добро пожаловать!</p>
                <MainContentApartments />
                <MainContentQuotes />
            </main>
            <Footer />
        </Fragment>
    )
}