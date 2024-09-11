import Header from "./components/Header/Header"
import { Fragment, useState } from "react"
import MainContentApartments from "./components/MainContentApartments/MainContentApartments"
import MainContentQuotes from "./components/MainContentQuotes/MainContentQuotes"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import AdminPanel from './components/AdminPanel/AdminPanel'

// export default function App() {
//     return (
//         <Fragment>
//             <Router>
//                 <Routes>
//                     {/* <Route exact path="/" element={<MainContentApartments />}></Route> */}
//                     <Route path='/admin-panel' element={<AdminPanel />}></Route>
//                 </Routes>
//             </Router>

//             <Header />
//             <main>
//                 <p className='main__greeting'>Добро пожаловать!</p>
//                 <MainContentApartments />
//                 <MainContentQuotes />
//             </main>
//             <Footer />
//         </Fragment>
//     )
// }

function AppContent() {
    const location = useLocation();
    
    return (
        <Fragment>
            {location.pathname == '/admin-panel' ? (
                <main>
                    <AdminPanel />
                </main>
            ) : (
                <>
                    <Header />
                    <main>
                        <p className='main__greeting'>Добро пожаловать!</p>
                        <MainContentApartments />
                        <MainContentQuotes />
                    </main>
                    <Footer />
                </>
            )}
        </Fragment>
    );
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<AppContent />} /> 
                <Route path='/admin-panel' element={<AppContent/>} />
            </Routes>
        </Router>
    )
}
