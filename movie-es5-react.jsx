
function Poster(props){
    return(
        <div class="row">
        <div className="col s12 m3">
            <img className="responsive-img" src={props.poster} />
        </div>
        </div>
    )
}

// function Application(){
var Application = React.createClass({
    getInitialState: function(){
            return{
                moviesToShow: []
            }
        },

    componentDidMount: function(){
        console.log("The application component mounted")
        var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
        $.getJSON(url, function(movieData){
            console.log(this);
            var nowPlayingArray =  [];
            for(let i = 0; i < movieData.results.length; i++){
                nowPlayingArray.push(movieData.results[i]);
            }
            this.setState({
                moviesToShow: nowPlayingArray
            });

        }.bind(this));		
    },

    render: function(){
        var imagePath = "http://image.tmdb.org/t/p/w300"
        return (
            <div>
            
                <div className="row">
                    <div className="col s12 center-align">
                        {/*Posters go here...*/}
                        {this.state.moviesToShow.map((movie, index)=>{
                            var moviePoster = imagePath + movie.poster_path
                            return <Poster key={index} poster={moviePoster} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
})

ReactDOM.render(
    <Application />,
    document.getElementById('root')
)