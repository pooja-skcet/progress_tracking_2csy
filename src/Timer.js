import React from 'react';
class Timer extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
 elapsedSeconds: 0
 };
 }
 componentDidMount() {
 this.timerID = setInterval(
 () => this.tick(),
 1000 // Update every second
 );
 }
 componentWillUnmount() {
 clearInterval(this.timerID);
 }
 tick() {
 this.setState(prevState => ({
 elapsedSeconds: prevState.elapsedSeconds + 1
 }));
 }
 render() {
 return (
 <div>
 <h2>Timer: {this.state.elapsedSeconds} seconds</h2>
 </div>
 );
 }
}
export default Timer