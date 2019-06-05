import React from 'react';
import { Link } from 'react-router-dom';

const linkstyle = (props) => {
  return ({
    'textDecoration': 'none',
    'color': (props.color? props.color : "white"),
    'cursor': 'pointer',
    'padding': (props.padding? props.padding : "0px 0px")
  })
}

const LinkTo = (props) =>
  <Link exact to={props.path} onClick={props.setMobileList} style={linkstyle(props)}>
    { props.children }
  </Link>

export {
  LinkTo
};