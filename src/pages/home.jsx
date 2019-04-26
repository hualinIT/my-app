import React from 'react';
import { Link } from 'react-router-dom';
import TopTitle from 'components/topTitle'

// import { Anchor } from 'antd';
// const { Link } = Anchor;


class Home extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <TopTitle title="首页"/>
                {/* <Anchor>
                    <Link className="mb_20" href="/member" title="go to Member" />
                    <Link className="mb_20" href="/setState" title="go to setState"  />
                    <Link className="mb_20" href="/providerNew" title="go to providerNew"  />
                    <Link className="mb_20" href="/providerOld" title="go to providerOld"  />
                    <Link className="mb_20" href="/hooksExample" title="go to hooksExample"  />
                    <Link className="mb_20" href="/setStateBtn" title="go to setStateBtn"  />
                </Anchor> */}

                <div className="mb-20">
                    <Link to="/itemList">go to itemList</Link>
                </div>

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

                <div className="mb-20">
                    <Link to="/setStateBtn">go to setStateBtn</Link>
                </div>
            </div>
        );
    }
}

export default Home;
