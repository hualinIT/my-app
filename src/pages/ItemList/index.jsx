import React from 'react'
import {Button, List} from 'antd';

import withTitle from 'hoc/withTitle'
import './index.scss'

class ItemList extends React.Component {
    constructor(){
        super();
        this.state = {
            datas:  this.buildData(20) || []
        }
    }

    buildData = (length) => {
        let len = length, tempArr = [];
        for (let i = 1; i <= len; i++) {
            tempArr.push({
                name: `a${i}`,
                id: `b${i}`
            })
        }
        return  tempArr;
    }

    reverseSort = () => {
        this.setState((prestate) => ({
            datas: prestate.datas.reverse()
        }))
    }

    removeFirstItem = () => {
        this.setState((prestate) => {
            prestate.datas.splice(0,1);
            return {
                datas: prestate.datas
            }
        })
    }

    render() {
        const {datas} = this.state;

        return (
            <div className="item-content">
                <div className="mb_20">
                    <Button className="mr_10" type="primary" onClick={this.reverseSort}>倒序操作</Button>
                    <Button type="primary" onClick={this.removeFirstItem}>remove first</Button>
                </div>

                <div className="item-list-wrap">
                    <ul className="item-list">
                        {datas.map((item, index) => {
                            // return <li key={index}>{item.name}<input type="text" /></li>
                            // return <li key={item.id}>{item.name}<input type="text"/></li>

                            console.log(React.createElement(Item, { item: item, key: item.id, className: "hhh" }))
                            return  <Item className="item-li" item={item} key={item.id}  />
                        })}
                    </ul>
                </div>

                {/* <List
                    size="large"
                    bordered
                    dataSource={datas}
                    renderItem={itemData => (<List.Item>{<Item item={itemData} key={itemData.id} />}</List.Item>)}
                /> */}

            </div>
        )
    }
}

class Item  extends React.PureComponent {
    componentDidMount() {
        console.log('===>mount')
    }

    componentDidUpdate() {
        console.log('===>didUpdate')
    }

    componentWillUnmount() {
        console.log('===>unmount')
    }
    
    render() {
        let {item, className} = this.props;

        console.log(React.createElement("li", { className: className }, item.name, React.createElement("input", { type: "text" })))
        return React.createElement("li", { className: className }, item.name, React.createElement("input", { type: "text" }));
            // <li className="className">{item.name} <input type="text"/></li>
    }
}

export default withTitle(ItemList);
