import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
    return (
        <div className="">
            <div>
                <Routes>
                    <Route path='/*' element={<CustomerRoutes/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
