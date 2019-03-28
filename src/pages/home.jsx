import React from 'react';
import { Link } from 'react-router-dom';

import TopTitle from 'components/topTitle'

class Home extends React.Component {
    render() {
        return (
            <div>
                <TopTitle title="首页"/>

                <div className="mb-20">
                    <Link to="/member">go to Member</Link>
                </div>

                <div className="mb-20">
                    <Link to="/setState">go to setState</Link>
                </div>

                <div className="mb-20">
                    <Link to="/providerNew">go to providerNew</Link>
                </div>

                <div className="mb-20">
                    <Link to="/providerOld">go to providerOld</Link>
                </div>

                <div className="mb-20">
                    <Link to="/hooksExample">go to hooksExample</Link>
                </div>
            </div>
        );
    }
}

export default Home;