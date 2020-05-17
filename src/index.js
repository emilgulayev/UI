import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.scss';
import App from './App';
import rootReducer from './Reducers'
const store = createStore(rootReducer,
  {
    Images:{container: [],currentImage: ""},
    Labels: { container: [], searchQuery: '', dummyNewLabel: true,newCanvasLabel:false , canvasLabelCurds:{top:60,left:0}},
    Tools: {
      currentSelector:"classification",
      boundingBox: {
        isSelected: false,
        labels: {}
      },
      polygon: {
        isSelected: false,
        labels: {}
      },
      classification: {
        isSelected: true,
        labels: {}
      }
    },
      Toggles:{
          imagesVisible: true,
          labelsVisible: true,
          classificationLabelsIsVisible:true,
          boundingBoxLabelsIsVisible:false,
          polygonLabelsIsVisible:false,
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


