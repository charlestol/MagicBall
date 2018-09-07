import React, { Component } from 'react';

class MagicBall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: '',
      entered: false
    }

    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 25),
        userInput: '',
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  handleKeyPress(e){
      if(e.keyCode === 13){
         this.setState({
           entered: true
         });
         return this.ask();
      } else {
        this.setState({
          entered: false
        });
      }
   }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'If you believe so',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful',
      'I don\'t feel so good',
      'No way',
      'No',
      'If you have doubt, then no'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div className="container">
        <div
          className={!(this.state.entered) ? 'ball' : 'ball shakeAnim'}>
          <div className="inputbox">
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyPress}
              placeholder="Type Question"
              className="input"
            />
          </div>
          <h2 className="prompt">Ask the Magic Eight Ball!</h2>
          <br />
          <p className={!(this.state.entered) ? 'answer' : 'answer fadeIn'}>
            {answer}
          </p>
        </div>
      </div>
    );
  }
};

export default MagicBall;
