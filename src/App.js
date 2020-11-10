// * Libraries
import { BrowserRouter, Route } from 'react-router-dom';

// * Komponen
import Halaman_Login from './Pages/Halaman_Login';
import Halaman_Dashboard from './Pages/Halaman_Dashboard';
import Halaman_Pemesanan from './Pages/Halaman_Pemesanan';
import Halaman_Konfirmasi from './Pages/Halaman_Konfirmasi';
import Halaman_Receipt from './Pages/Halaman_Receipt';

// * Style / Css
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div id="app" className="Application">
                <Route exact path="/" component={Halaman_Login} />
                <Route path="/Dashboard" component={Halaman_Dashboard} />
                <Route path="/Pemesanan" component={Halaman_Pemesanan} />
                <Route path="/Konfirmasi" component={Halaman_Konfirmasi} />
                <Route path="/Receipt" component={Halaman_Receipt} />
            </div>
        </BrowserRouter>
    );
}

export default App;
