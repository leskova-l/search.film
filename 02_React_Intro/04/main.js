
/**
 * Не змогла зрозіміти task 4.1, властивість добавила, а що з нею робити?
 * */
const TWEETS = [
    {
        id: 1,
        author: 'bennettb83',
        text: 'Distinguishing between a muffin and chihuahua will be the next big hurdle in #machinelearning. @Redo @Louis_Monier',
        image: 'https://pbs.twimg.com/media/ChL0GdiU0AIWdC_.jpg',
        avatar: 'https://pbs.twimg.com/profile_images/697667697564200960/j72a_Ozw_bigger.jpg',
        likes: 233,
        retweets: 212,
        isLiked: true,
        isRetweeted: false
    },
    {
        id: 2,
        author: 'r00k',
        text: 'Beginner: I wrote 1,000 lines of code! Intermediate: I deleted 1,000 lines of code! Expert: I prevented code from being written!',
        avatar: 'https://pbs.twimg.com/profile_images/631229918819520512/NGocw_XD_bigger.jpg',
        likes: 2233,
        retweets: 1084,
        isLiked: false,
        isRetweeted: false
    },
    {
        id: 3,
        author: 'anechka45789',
        text: 'Nobody retweets me',
        image: 'https://styler.rbc.ua/static/img/c/a/cats_650x410.jpg',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
        likes: 3,
        retweets: 0,
        isLiked: false,
        isRetweeted: false
    },
    {
        id: 4,
        author: 'bendhalpern',
        text: `Sometimes when I'm writing Javascript I want to throw up my hands and say "this is bullshit!" but I can never remember what "this" refers to`,
        avatar: 'https://pbs.twimg.com/profile_images/774717065013948416/hx4dsWxS_400x400.jpg',
        likes: 9457,
        retweets: 10833,
        isLiked: true,
        isRetweeted: true
    },
];

const Tweet = React.createClass({
    getInitialState(){
        const {likes, retweets} = this.props;
        return{
            likes: likes,
            retweets: retweets,
            font: this.recalculateFont(likes, retweets)

        }
    },

    recalculateFont(likes, retweets){
        let font;
        if ((likes + retweets) <= 100 ) {
            font = 16;
        } else if ((likes + retweets) > 1000 ){
            font = 22;
        } else {
            font = 18;
        }
        return font;
    },

    handleLikes(){
        this.setState({
            likes: this.state.likes+1,
            font:  this.recalculateFont( this.state.likes+1, this.state.retweets)
        });
    },
    handleRetweets(){
        this.setState({
            retweets: this.state.retweets+1,
            font:  this.recalculateFont( this.state.likes, this.state.retweets+1)
        });
    },
    render() {
        const {
            avatar,
            author,
            text,
            image,
            retweets,
            likes
        } = this.props;

        return (
            <div className="tweet" style={{fontSize: this.state.font}}>
                <img className="tweet-avatar" src={avatar} />

                <div className="tweet-body">
                    <a
                        className="tweet-author"
                        href={`https://twitter.com/${author}`}
                        target="blank"
                    >
                        @{author}
                    </a>

                    <p className="tweet-text">
                        {text}
                    </p>

                    {
                        image &&
                        <img className="tweet-image" src={image} />
                    }

                    <div className="tweet-stats">
                        <div className="tweet-retweets" onClick={this.handleRetweets}>
                            <i className="tweet-stat-icon fa fa-retweet" />
                            {this.state.retweets || null}
                        </div>
                        <div className="tweet-likes" onClick={this.handleLikes}>
                            <i className="tweet-stat-icon fa fa-heart" />
                            {this.state.likes || null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

const Feed = React.createClass({
    render() {
        return (
            <div>
                {
                    TWEETS.map(tweet =>
                        <Tweet
                            key={tweet.id}
                            author={tweet.author}
                            text={tweet.text}
                            image={tweet.image}
                            avatar={tweet.avatar}
                            likes={tweet.likes}
                            retweets={tweet.retweets}
                        />
                    )
                }
            </div>
        );
    }
});

ReactDOM.render(
    <Feed />,
    document.getElementById('root')
);