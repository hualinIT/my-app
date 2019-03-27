import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <p>这是首页</p>

                <div className="mb-20">
                    <Link to="/member">go to Member</Link>
                </div>

                <div className="mb-20">
                    <Link to="/setState">go to setState</Link>
                </div>

                <div className="mb-20">
                    <Link to="/provider">go to provider</Link>
                </div>

                <div className="mb-20">
                    <Link to="/providerOld">go to providerOld</Link>
                </div>
            </div>
        );
    }
}

export default Home;