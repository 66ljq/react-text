/**
 * State(状态）
 * 组件 内部 的数据 可以动态改变
 * this.setState()是更新state的唯一途径
 * 实例 -- 点赞
 */

import React from 'react'

class LikesButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
        this.increaseLikes = this.increaseLikes.bind(this)
    }
    increaseLikes() {
        //console.log(this)//js 类中方法没有绑定this,需要手动绑定,否则undefined
        this.setState({
            likes: ++this.state.likes
        })
    }
    render() {
        return (
            <div className="likes-button-component">
               <button type="button"
                       className="btn btn-outline-primary btn-lg"
                       onClick={this.increaseLikes}
                >
                点赞 {this.state.likes}
               </button>
            </div>
        )
    }
}

export default LikesButton