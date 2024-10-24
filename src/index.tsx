import TypeDoc from "typedoc";
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { GlobalProviders } from "Shared/Contexts" 

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalProviders>
      <App />
    </GlobalProviders>
  </React.StrictMode>
);