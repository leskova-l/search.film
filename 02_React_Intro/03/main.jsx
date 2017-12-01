
const Flip = React.createClass({
    getInitialState(){
        return {}
    },
    handleFlip(e){
        const container = document.querySelector('.flip-container').classList.toggle('rotate');
    },
    render(){
        const style = {backgroundColor: this.props.color};
        return(
            <div className="flip-container" onClick={this.handleFlip}>
                <div className="flipper">
                    <div className="front">
                        <img src={this.props.src} alt="#"/>
                    </div>
                    <div className="back" style={style}>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(<Flip src = 'https://www.ctclove.ru/upload/iblock/ed3/ed3f06615adace6dbff959b6d84b84ce.jpg' color = 'green'/>,
    document.getElementById('root'));
