import React, { Component } from 'react';
import Mood from '../Mood/Mood';

// this looks a little different, has small imporvemnt on speed
class MoodList extends Component{
    componentDidMount(){
        console.log('MoodList mounted');
    }
    render(){
        return(
            this.props.listOfMoods.map( (item) => <Mood key={ item.mood } myMood={ item }/> )
             
            // <h2>{JSON.stringify( this.props.listOfMoods )} </h2>
// This type of thing sort of replaces the console.log handshake we've used.





        )//end return
    }//end render
}//end class

export default MoodList;
