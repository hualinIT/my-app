import React from 'react'
import withTitle from 'hoc/withTitle'
import './index.scss'
import '../../common/imgs/r_004.jpg'

class SetStateBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {importBtn: []};
    }

    componentDidMount() {
        this.setState(preState => ({
            importBtn: preState.importBtn.unshift(<div className="btn">按钮一</div>)
        }))

        var img = new Image();
        img.src = '../../common/imgs/r_004.jpg'

        img.onload=function(){
        //准备canvas环境
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        // 绘制图片
        ctx.drawImage(img,0,0);
        // 绘制水印
        ctx.font="20px microsoft yahei";
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillText("my images",100,100);
        }

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
            <canvas id="myCanvas" width="1000" height="500" >
              our browser does not support the HTML5 canvas tag.
            </canvas>
        </div>;
    }
}

export default withTitle(SetStateBtn);


/* <canvas id="myCanvas" width="1000" height="500" >
Your browser does not support the HTML5 canvas tag.
</canvas>
<script>
    //准备img对象 
    var img = new Image();   
    img.src = './img/demo.jpg';
 
    // 加载完成开始绘制
    img.onload=function(){
       //准备canvas环境 
       var canvas=document.getElementById("myCanvas");
       var ctx=canvas.getContext("2d");
       // 绘制图片
       ctx.drawImage(img,0,0);
       // 绘制水印
       ctx.font="20px microsoft yahei";
       ctx.fillStyle = "rgba(255,255,255,0.5)";
       ctx.fillText("my images",100,100);
    }
</script> */