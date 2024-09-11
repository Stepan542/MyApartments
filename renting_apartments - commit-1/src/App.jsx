import Header from "./components/Header"
import { Fragment } from "react"
import MainContentApartments from "./components/MainContentApartments"
import MainContentQuotes from "./components/MainContentQuotes"

export default function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <p className='main__greeting'>Добро пожаловать!</p>
                <MainContentApartments />
                <MainContentQuotes />
            </main>
        </Fragment>
    )
}