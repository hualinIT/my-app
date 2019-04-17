import React from 'react'

// import TopTitle from 'components/topTitle'
// import GoHome from 'components/goHome'

import withTitle from 'hoc/withTitle'

import './index.scss'

class Member extends React.Component {

    static title = 'member'

    member = 1;

    state = {
        member: 2
    }

    onChangeMember = () => {
        this.member = 10;
    }

    onChangeStateMember = () => {
        this.setState(false)
        // this.setState({ member: 10 })
    }

    render() {
        return (
            <div className="member-content">
                {/* <TopTitle title="Member" />
                <GoHome /> */}

                <div className="content">
                    <p className="mb-10"><span>类成员状态：</span> {this.member}</p>
                    <p><span>state状态：</span> {this.state.member}</p>
                </div>

                <div className="buttons">
                    <button className="mr-10" onClick={this.onChangeMember} >changeMember</button>
                    <button onClick={this.onChangeStateMember}>changeStateMember</button>
                </div>
            </div>
        )
    }
}

export default withTitle(Member);
