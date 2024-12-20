import {Route, Routes, BrowserRouter} from 'react-router-dom'


import NavHeader from './components/header/header'
import MainPage from './pages/main/mainPage'
import HomePage from './pages/home/profile'
import ArrowUp from './components/arrowUp/arrowUp'
import ProfilePage from './pages/home/profile'

export default function Rotas (){
    return(
        <BrowserRouter>
        <NavHeader />
        <ArrowUp />
        <Routes>
            <Route path='/adega' element={<MainPage />} />
            <Route path='/my-profile' element={<ProfilePage />} />
        </Routes>
    </BrowserRouter>
    )
}