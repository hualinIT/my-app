import React from 'react'
import {Button} from 'antd';

import withTitle from 'hoc/withTitle'
import './index.scss'

class Member extends React.Component {

    static title = 'member'

    member = 1;

    state = {
        member: 2
    }

    componentDidMount() {
        fetch('http://47.101.11.2:3000/fdb')
        .then(function(response) {
            console.log({response})
            return response.json();
        })
        .then(function(myJson) {
            console.log({myJson});
        });
        console.log(1);
    }

    onChangeMember = () => {
        this.member = 10;
        // this.forceUpdate();
    }

    onChangeStateMember = () => {
        // this.setState(false)
        this.setState({ member: 10 })
    }

    render() {
        return (
            <div className="member-content">
                <div className="mb_20">
                    <Button className="mr_10" type="primary" onClick={this.onChangeMember} >changeMember</Button>
                    <Button type="primary" onClick={this.onChangeStateMember}>changeStateMember</Button>
                </div>

                <div className="content">
                    <p className="mb-10"><span>类成员状态：</span> {this.member}</p>
                    <p><span>state状态：</span> {this.state.member}</p>
                </div>
            </div>
        )
    }
}

export default withTitle(Member);
