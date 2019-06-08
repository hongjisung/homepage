import React, { useState } from 'react';
import { LinkTo } from '../components/utils';

const showlength = 3;

const liststyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '30px',
  color: 'grey',
  padding: '0px 15px',
  borderBottom: '0.5px solid gainsboro',
}

const getList = (algoMdFiles, pagenum, shownum, setNum) => {
  const files = [];
  for (let i = pagenum * showlength + showlength; i > pagenum * showlength; i--) {
    if (algoMdFiles[i]) {
      files.push(i);
    }
  }

  return files.map( num =>
    <div style = {{
      ...liststyle,
      color: (shownum === num ? '#585858': 'grey')
    }} onClick = {() => setNum(num)}>
      <LinkTo
        path = {'/study/algorithm/' + num.toString()}
        color= {(shownum === num ? '#585858': 'grey')}
      >
        { num.toString() + '. ' + algoMdFiles[num] }
      </LinkTo>
    </div>
  );
}

const pageNums = (algoMdFiles, pagenum, setPagenum) => {
  let length = 0;
  const maxpage = Math.floor( (Object.keys(algoMdFiles).length - 1) / showlength);
  const result = [];

  for (let i = pagenum + 3; length < 7 && i >= 0; i--) {
    if (i >=0 && i <= maxpage) {
      result.push(i);
      length += 1;
    }
  }

  return result.map( num => 
    <div style = {{
      width: '40px',
      fontSize: '15px',
      color: (pagenum === num ? '#585858' : 'grey'),
      cursor: 'pointer'
    }} onClick = {() => setPagenum(num)}>
      ({num + 1})
    </div>
  );
}

const AlgoList = (props) => {
  const [pagenum, setPagenum] = useState(Math.floor( (Object.keys(props.algoMdFiles).length - 1) / showlength));

  
  return (
    <div>
      { getList(props.algoMdFiles, pagenum, props.num, props.setNum) }
      <div style = { {...liststyle, height: '25px'} }>
        { pageNums(props.algoMdFiles, pagenum, setPagenum) }
      </div>
    </div>
  )
}

export default AlgoList;