import React from 'react'
import withTitle from 'hoc/withTitle'
import './index.scss'

class SetStateBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {importBtn: []};
    }

    componentDidMount() {
        this.setState(preState => ({
            importBtn: preState.importBtn.unshift(<div className="btn">按钮一</div>)
        }))
    }

    // addBtn = () => {
    //     this.setState(preState => {
    //         console.log("preState", preState, preState.importBtn, typeof(preState.importBtn))
    //         return {importBtn: preState.importBtn.unshift(<div className="btn">按钮一</div>)}
    //     })
    // }

    render() {
        const {importBtn} = this.state;
        console.log('importBtn==>', this.state, importBtn)

        return <div className="stateBtns">
            <div className="add_btn" onClick={this.addBtn}>add button</div>
            <div className="btns">
                {importBtn && [].concat(importBtn).map(item => item)}
            </div>
        </div>;
    }
}

export default withTitle(SetStateBtn);
