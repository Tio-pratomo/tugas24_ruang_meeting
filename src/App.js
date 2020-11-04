// * Libraries
import { BrowserRouter, Route } from 'react-router-dom';

// * Komponen
import Halaman_Login from './Komponen/Halaman_Login';
import Halaman_Dashboard from './Komponen/Halaman_Dashboard';
import Halaman_Pemesanan from './Komponen/Halaman_Pemesanan';

// * Style / Css
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div id="app" className="Application">
                <Route exact path="/" component={Halaman_Login} />
                <Route path="/Dashboard" component={Halaman_Dashboard} />
                <Route path="/Pemesanan" component={Halaman_Pemesanan} />
            </div>
        </BrowserRouter>
    );
}

export default App;
