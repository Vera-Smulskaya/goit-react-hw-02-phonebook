import React, { Component } from 'react';
import css from './Filter.module.css';

export default class Filter extends Component {
  render() {
    return (
      <div className={css.filterContainer}>
          <label className={css.filterLabel}>
            <p className={css.filterLabelText}>Find contacts by name: </p>
            <input type="text" className={css.filterInput}></input>
        </label>
      </div>
    );
  }
}
