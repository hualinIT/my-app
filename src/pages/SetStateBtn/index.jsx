import React from 'react'
import withTitle from 'hoc/withTitle'
import './index.scss'
import { Upload, Icon, message } from 'antd';

function getBase64(img, callback) {
    const reader = new FileReader();

    reader.onload = function(e){
        // var pic = document.getElementById("preview");
        // pic.src= reader.result;
        // callback(reader.result);

        var imgs = new Image();
        var isAlphaBackground = false;

        imgs.onload = function(){
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext("2d");
            // var canvas = document.getElementById("myCanvas");
            var originWidth = this.width;
            var originHeight = this.height;
            canvas.width = originWidth;
            canvas.height = originHeight;
            ctx.clearRect(0, 0, originWidth, originHeight);
            ctx.drawImage(imgs,0,0);
            var imageData = ctx.getImageData(0, 0, originWidth, originHeight).data;

            for (var index = 3; index < imageData.length; index += 4) {
                if (imageData[index] != 255) {
                    isAlphaBackground = true;
                    break;
                }
            }

            // 绘制水印
            // ctx.font="20px microsoft yahei";
            // ctx.fillStyle = "rgba(255,255,255,0.5)";
            // ctx.fillText("my images",100,100);
            // image.src = canvas.toDataURL("image/png")
        }

        imgs.src = reader.result
    }

    reader.onprogress = function(res) {
        console.log(res)
    }

    reader.readAsDataURL(img);

}

function beforeUpload(file) {
    console.log('===>before',file)
    return false;
    // getBase64(file, (r) => {console.log(file)})

    // const isJPG = file.type === 'image/jpeg';
    // if (!isJPG) {
    //     message.error('You can only upload JPG file!');
    // }
    // const isLt2M = file.size / 1024 / 1024 < 2;
    // if (!isLt2M) {
    //     message.error('Image must smaller than 2MB!');
    // }
    // return isJPG && isLt2M;
}

class SetStateBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {importBtn: [], loading: false};
    }

    handleChange = (info) => {
        console.log('---->handleChange', info)
        if (info.file.status === 'uploading') {
        this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }

    componentDidMount() {
        // var img = new Image();

        // img.onload=function(){
        //     var canvas = document.getElementById("myCanvas");
        //     var ctx = canvas.getContext("2d");
        //     ctx.drawImage(img,0,0);
        //     ctx.font="20px microsoft yahei";
        //     ctx.fillStyle = "rgba(255,255,255,0.5)";
        //     ctx.fillText("my images",100,100);
        // }

        // img.src = 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3162030773,185836582&fm=173&app=49&f=JPEG?w=218&h=146&s=A0B058954069250D6B2DEC630300F051'
    }

    componentDidUpdate() {}

    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;

        return (
            <div className="stateBtns">
                <Upload
                    name="file"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    // action="//jsonplaceholder.typicode.com/posts/"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                </Upload>
            </div>
        )
    }
}

export default withTitle(SetStateBtn);
