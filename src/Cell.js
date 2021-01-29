import React, {Component} from 'react'
import { chanceLightStartsOn } from './Helpers'
import "./Cell.css"


/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

class Cell extends Component {
  static defaultProps = {
    chanceLightStartsOn: 0.3, 
  }

  constructor(props) {
    super(props);
    this.state = {
      isLit :  (Math.random() < this.props.chanceLightStartsOn )
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    // call up to the board to flip cells around this cell
    this.props.flipCellsAroundMe();
  }

  render() {
    let classes = "Cell" + (this.state.isLit ? " Cell-lit" : "");

    return (
        <td className={classes} onClick={this.handleClick} />
    )
  }
}


export default Cell