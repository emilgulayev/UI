import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.scss';
import App from './App';
import rootReducer from './Reducers'
const store = createStore(rootReducer,
  {
    Images:{container: []},
    Labels: { container: [], searchQuery: '', dummyNewLabel: true },
    Tools: {
      currentSelector:"classification",
      boundingBox: {
        isSelected: false,
        currentImage:"",
        files: [],
        labels: []
      },
      polygon: {
        isSelected: false,
        currentImage:"",
        files: [],
        labels: []
      },
      classification: {
        isSelected: true,
        currentImage:"",
        files: [],
        labels: []
      }
    }
  }
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


