import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../css/markdown.css'

const mainMarkdown = `
## Jisung Hong(홍지성)
- rhfktj@gmail.com

## Eduation
- Study computer science, korea university (2013~)
`;

const Main = () =>
  <div className="md">
    <ReactMarkdown source={mainMarkdown}/>
  </div>

export default Main;