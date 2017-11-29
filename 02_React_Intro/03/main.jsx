const Flip = React.createClass({
    getInitialState(){

    },
    handleFlip(e){

    },
    render(){
        return(
            <div className="flip-container" onClick={this.handleFlip}>
                <div className="flipper">
                    <div className="front">
                        <img src={this.props.src} alt="#"/>
                    </div>
                    <div className="back">
                       <div className="color" style={background:this.props.color}></div>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(<Flip src = 'http://buildingontheword.org/wp-content/uploads/2016/08/cat.jpg' color = '#f6f6f6'/>,
    document.getElementById('root'));
