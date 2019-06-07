import React from 'react';
import styled from 'styled-components';
import { LinkTo } from './utils';
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

const ContentList = ({setMobileList}) =>
  <div className='topdownMenu fixed'>
    <Content top="50px">
      <LinkTo path='/projects' color='#585858' setMobileList={setMobileList} padding="0px 20px">Projects</LinkTo>
    </Content>
    <Content top="100px">
        <LinkTo path='/study' color='#585858' setMobileList={setMobileList} padding="0px 20px">Study</LinkTo>
    </Content>
    <Content top="150px">
        <LinkTo path='/interest' color='#585858' setMobileList={setMobileList} padding="0px 20px">Interest</LinkTo>
    </Content>
  </div>

export default ContentList;