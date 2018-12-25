/**生命周期 实例--电子钟表 */
import React from 'react'

class DigitalClock extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           date: new Date()
       }
   }
   componentDidMount() {
       this.timer = setInterval(() => {
           this.setState({
               date: new Date()
           })
       }, 1000)
   }
//    componentDidUpdate(currentProps, currentState) {
//        console.log(currentState)
//    }
   componentWillUnmount() {
       //当组件中有定时器时，一定要记得在组件卸载时删掉
       clearInterval(this.timer)
   }
   render() {
       return (
          <div className="digital-clock-component jumbotron">
              <h1>{this.state.date.toLocaleTimeString()}</h1>
          </div>
       )
   }
}

export default DigitalClock