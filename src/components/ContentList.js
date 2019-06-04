import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../css/ani.css';

const Content = styled.div`
  position: fixed;
  background-color: white;
  top: ${({top}) => top};
  height: 50px;
  width: 100%;
  font-size: 20px;
  color: black;
  display: flex;
  align-items: center;
  border-top: 1px solid #585858;
  border-bottom: 1px solid #585858;
`;

const LinkTo = (props) =>
  <Link exact to={props.path} onClick={props.setMobileList} style={{ padding: "0px 20px", textDecoration: 'none', color: "black" }}>
    { props.children }
  </Link>

const ContentList = ({setMobileList}) =>
  <div className='topdownMenu fixed'>
    <Content top="50px">
      <LinkTo path='/projects' setMobileList={setMobileList}>Projects</LinkTo>
    </Content>
    <Content top="100px">
        <LinkTo path='/study' setMobileList={setMobileList}>Study</LinkTo>
    </Content>
    <Content top="150px">
        <LinkTo path='/interest' setMobileList={setMobileList}>Interest</LinkTo>
    </Content>
  </div>

export default ContentList;