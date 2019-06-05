import React from 'react';
import ReactMarkdown from 'react-markdown';
import useFetch from '../hooks/UseFecth';
import '../css/markdown.css'

const connectStudy = require('../markdowns/study.md');
const connectProjects = require('../markdowns/projects.md');
const connectHome = require('../markdowns/home.md');

const Markdown = (props) => {
  let mdfile = undefined;
  switch(props.name) {
    case 'study':
      mdfile = connectStudy;
      break;
    case 'projects':
      mdfile = connectProjects;
      break;
    case 'home':
      mdfile = connectHome;
      break;
    default:
      console.log('wrong route');
  }

  const { md } = useFetch(mdfile);
  return ( 
    <div className='md'>
      <ReactMarkdown source={md} />
    </div>
  )
}

export default Markdown;