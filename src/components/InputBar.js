import React from "react";

class InputBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
      this.props.onInputChange(event.target.value);
    }

    handleSubmit(event) {
      this.props.onSubmit(event);
    }

    render() {
        const inputValue = this.props.inputValue;
        return(
            <div className="InputBar">
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Memo" autoComplete="off" required value={inputValue} onChange={this.handleInputChange} />
                <button type="submit" className="add">Add</button>
              </form>
            </div>
        );
    }

}

export default InputBar;