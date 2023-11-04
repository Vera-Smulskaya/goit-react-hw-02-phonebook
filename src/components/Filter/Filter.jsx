import React, { Component } from 'react';
import css from './Filter.module.css';

export default class Filter extends Component {
state = {
filter: "",
}

handleFilterChange = event => {
this.setState({filter: event.target.value})
this.props.onFilter();
}

  render() {
    return (
      <div className={css.filterContainer}>
          <label className={css.filterLabel}>
            <p className={css.filterLabelText}>Find contacts by name: </p>
            <input type="text" className={css.filterInput}  name="filter" value={this.state.filter} onChange={this.handleFilterChange}></input>
        </label>
      </div>
    );
  }
}
