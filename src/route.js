import App from './App';
import React, { useState } from 'react';

import Mounting from './Pages/Mounting';
import Unmounting from './Pages/Unmounting';
import { Updating } from './Pages/Updating';

const Routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'mounting',
        element: <Mounting />,
      },
      {
        path: 'updating',
        element: <Updating />,
      },
      {
        path: 'unmounting',
        element: <Unmounting />,
      },
    ],
  },
];

export default Routes;
