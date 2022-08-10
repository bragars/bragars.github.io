import React from 'react'
import Logo from './Images/ScrollVertical';
import './styles.css';

const ScrollArrow = (props) => {
	return (
		<div id="icon" className="d-grid justify-content-center">
      <div id="disappear">
        { props ? (<Logo id="disappear" width={180} />) : (<></>) }
      </div>
    </div>
  );
}

export default ScrollArrow;
