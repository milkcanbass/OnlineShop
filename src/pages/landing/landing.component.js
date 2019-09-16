import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sampleAction } from '../../redux/sample/sample.action';

import './landing.styles.scss';

import Top from '../../components/top/top.component';

const LandingPage = props => {
  // destructing state and function from redux
  const { sampleAction, sampleState } = props;

  const [text, setText] = useState({ Input: '' });

  const handleChange = e => {
    setText({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    sampleAction(text.Input);
  };

  return (
    <div>
      <Top />
      <h1 className="title">Submitted text: {sampleState}</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" className="Input" name="Input" onChange={e => handleChange(e)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  // Set state. state.sample.sampleState, <= sample comes from rootReducer
  sampleState: state.sample.sampleState,
});

const mapDispatchToProps = dispatch => ({
  // Set action.
  sampleAction: text => dispatch(sampleAction(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);
