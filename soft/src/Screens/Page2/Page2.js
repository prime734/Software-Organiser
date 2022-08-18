import { useNavigate } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function Page2() {
    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/';
        navigate(path);
    }

    return (
        <div>
            <div class="header">
                <Header />
            </div>
            <div class="body">
                <h1>Welcome</h1>
                <button class="okbutton" onClick={routeChange}>GO BACK</button>
            </div>
            <div class="footer">
                <Footer />
            </div>
        </div>
    );
}

export default Page2;
