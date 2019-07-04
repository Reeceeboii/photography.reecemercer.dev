import React, { Component } from 'react';
import '../App.css';


class About extends Component {

  render(){
    const heartEmoji = <span role="img" aria-label="Heart Emoji">❤️</span>;
    return (
      <div className="ContentSection">
        <h1 className="Header">About</h1>
        <p className="TextSection">{`Hello! I'm Reece. My two main hobbies and interests are programming and photography. I already have
        a website dedicated to the programming side of things, so I figured it was time to do the same but for the photography.`}</p>
        <p className="TextSection">{`This isn't really anything serious, just a place for me to showcase any decent photos that I take.
        None of the pictures I upload have any watermarks or anything like that, so if you want to use them in something, feel free and go
        right ahead! All I ask is that unless the use is purely personal (i.e.) as a wallpaper etc... that you credit me somewhere. I'm
        not fussed how, even a link to my main website would be enough (www.reecemercer.dev)`}</p>
        <p className="TextSection">{`Anyway, I hope you enjoy. Peace and love and all that`}  {heartEmoji}</p>
      </div>
    );
  }
}

export default About
