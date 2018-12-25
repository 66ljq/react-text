/**
 * Props(属性）
 * 组件像一个函数一样，接受特定的输入（props）,产出特定的输出（React elements）
 * V = f(props)
 * 组件内必须像纯函数一样，不能修改props
 * 实例 -- 名片
 */

import React from 'react'

//函数组件
const NameCard = (props) => {
    const {name, number, isHuman, tags} = props
    return (
        <div className="alert alert-success">
            <h4 className="alert-heading">{name}</h4>
            <ul>
                <li>电话: {number}</li>
                <li>{isHuman ? '人类' : '外星生物'}</li>
                <hr/>
                <p>
                    { tags.map((tag, index) => (
                        <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
                    ))}
                </p>
            </ul>
        </div>
    )
}

//类组件
// class NameCard extends React.Component {
//     render() {
//        const {name, number, isHuman, tags} = this.props
//        return (
//            <div className="alert alert-success">
//                <h4 className="alert-heading">{name}</h4>
//                <ul>
//                    <li>电话: {number}</li>
//                    <li>{isHuman ? '人类' : '外星生物'}</li>
//                    <hr/>
//                    <p>
//                        { tags.map((tag, index) => (
//                            <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
//                        ))}
//                    </p>
//                </ul>
//            </div>
//        )
//     }
// }

export default NameCard