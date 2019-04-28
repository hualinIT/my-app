import React, { useState, useEffect} from 'react'
import { connect } from "react-redux";
import {Button} from 'antd';
import TopTitle from 'components/topTitle'
import GoHome from 'components/goHome'
import './index.scss'

const hooksExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log('mount===')
    }, 1);

    useEffect(() => {
        console.log('mount111===')
    });

    return (
        <div>
            <TopTitle  title="Hooks" />
            <GoHome />
            <div className="mb_20">
                <Button className="mr_10" type="private" onClick={() => setCount(count + 1)}>+</Button>
                <Button type="private" onClick={() => setCount(count - 1)}>-</Button>
            </div>

            <div className="mb_20">{count}</div>
            <p>注意看，组件拥有自己的“状态”，但它只是一个函数，不是 class。</p>
        </div>
    );
};

const mapStateToProps = state => {
    console.log('state====', state)

    return {
        reducer: state.wechat
    }
};

export default connect(mapStateToProps)(hooksExample);