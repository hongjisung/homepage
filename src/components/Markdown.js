import React from 'react';
import ReactMarkdown from 'react-markdown';
import useFetch from '../hooks/UseFecth';
import CodeBlock from './CodeBlock';
import '../css/markdown.css';

const Markdown = (props) => {
  let mdfile = props.mdfile;

  const { md } = useFetch(mdfile);
  return ( 
    <div className='md'>
      <ReactMarkdown
        source={md}
        renderers={{ code: CodeBlock }}
      />
    </div>
  )
}

export default Markdown;