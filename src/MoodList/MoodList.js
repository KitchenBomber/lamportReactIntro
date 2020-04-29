import React, { Component } from 'react';
// this looks a little different, has small imporvemnt on speed
class MoodList extends Component{
    render(){
        return(
            <h2>{JSON.stringify( this.props.listOfMoods )} </h2>
// This type of thing sort of replaces the console.log handshake we've used.





        )//end return
    }//end render
}//end class

export default MoodList;
