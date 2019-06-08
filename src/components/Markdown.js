import React from 'react';
import ReactMarkdown from 'react-markdown';
import useFetch from '../hooks/UseFecth';
import '../css/markdown.css';

const Markdown = (props) => {
  let mdfile = props.mdfile;

  const { md } = useFetch(mdfile);
  return ( 
    <div className='md'>
      <ReactMarkdown source={md} />
    </div>
  )
}

export default Markdown;