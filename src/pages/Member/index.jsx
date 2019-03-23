import React from 'react'
import { Link } from 'react-router-dom'

import './css.scss'

class Member extends React.Component {

    member = 1;

    state = {
        member: 2
    }

    onChangeMember = () => {
        this.member = 10;
    }

    onChangeStateMember = () => {
        this.setState({member: 10})
    }

    render() {
        return (
            <div className="member-content">
                <div className="mb-10 nav">
                    <Link to="/">go to Home</Link>
                </div>

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

export default Member;