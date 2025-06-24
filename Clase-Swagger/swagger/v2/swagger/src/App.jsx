import { useState } from 'react';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import { Tabs } from './components/Tabs';
import { Content } from './components/Content';
import { Response } from './components/Response';
import endpoint from './endpoint.json';
import './style.css';

export default function App() {
  
  const [content, setContent] = useState(endpoint[0]);
  const [response, setResponse] = useState('');

  const toggleContent = (data) => setContent(data);
  const toggleResponse = (data) => setResponse(data);

  return (
    <section className="content">

    <PanelGroup direction="horizontal">

      <Panel defaultSize={25} minSize={0} maxSize={50}>
        <Tabs toggleContent={toggleContent} />
      </Panel>
      
      <PanelResizeHandle className="handle" />

      <Panel defaultSize={50} minSize={25}>
        <Content content={content} toggleResponse={toggleResponse} />
      </Panel>
      
      <PanelResizeHandle className="handle" />

      <Panel defaultSize={25} minSize={0}>
        <Response response={response} />
      </Panel>

    </PanelGroup>
      
      
    </section>
  )
}