import React from 'react'
import { Link } from 'react-router-dom'

class SetState extends React.Component {
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

export default SetState;