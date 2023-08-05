
import React from 'react'
import Form from './Form'
function MovieDisplay(props) {

    const actors = props.movie.Actors
    const actorsList = actors?.split(', '); 
    console.log("Actors List", actorsList); 
    // const displayActors = props.movie.Actors.split(","); 
    // const answer_array = answer.split(',');
    // console.log("The List", displayActors); 
    const loaded = ()=>{
        console.log("Props", props); 
        return (
            <>
                <p id="fontS"> {props.movie.Year}&nbsp; &nbsp; <b>{props.movie.Title}</b>&nbsp; &nbsp;Rated: {props.movie.Rated}</p>
                <div className="flexy">

                    <div className="flexed">
                        <h3>Starring:</h3>
                        <ol style={{textAlign: 'left'}}>{actorsList.map(txt => <li>{txt}</li>)}</ol>
                        <h3>Awards:</h3>
                        <p>{props.movie.Awards}</p>
                    </div>

                    <div id="pic" className="flexed">
                        <img src={props.movie.Poster}/>
                    </div>

                    <div className="flexed">
                        <h3>Plot</h3>
                        <p>{props.movie.Plot}</p>
                    </div>
                    
                </div>
            </>
            )
        }

        const loading =()=>{
            return <h1>No Movie To Display</h1>
        }

        return props.movie ? loaded() : loading();
    }

  


export default MovieDisplay