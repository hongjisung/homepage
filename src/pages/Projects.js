import React from 'react';
import { Markdown } from '../components';

const Body = () =>
  <Markdown mdfile={ require('../markdowns/projects.md') } />

const Projects = () =>
  <main>
    <Body />
  </main>

export default Projects;