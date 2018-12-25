import React from 'react'

class HelloWorld extends React.Component {
    render() {
        const todoList = ['learn React', 'Learn Redux']
        const isLogin = true
        return (
          <div>
             <h1> Hello React </h1>
             <ul>
                 {
                    todoList.map(item => 
                        <li>{item}</li>
                    )
                 }
             </ul>
             {isLogin ? <p>你已经登录</p> : <p>请登录</p>}
          </div>
        )
    }
}

export default HelloWorld