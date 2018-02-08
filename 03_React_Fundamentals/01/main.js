// ### Задания
//
// #### 1. Небольшая игра-кликер
//
// ⭐️
//
// Напишите небольшую игру-кликер.
//
//     Работать должно так. Вначале по центру экрана маленький круг (цвет на ваше усмотрение). При каждом клике на него, он увеличивается в размере. Так пока не достигнет максимального. Потом сначала.
//
//     Используйте только только inline-стили в этом задании.
const style = {
    width: 50,
    height: 50,
    borderRadius: '100%',
    backgroundColor: 'purple'
};
const Circle = React.createClass({
    getInitialState(){
        return {

        }
    },

    handleClick(){},

    render(){
        return(
            <div onClick={this.handleClick} style={style}></div>
        )
    }
});

ReactDOM.render(<Circle />, document.getElementById('root'));