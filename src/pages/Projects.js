import React from 'react';
import { Markdown } from '../components';

const Body = () =>
  <Markdown name='projects' />

const Projects = () =>
  <main>
    <Body />
  </main>

export default Projects;