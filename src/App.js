import * as React from "react";
import "./styles.css";

import MapComponent from "./MapComponent";

import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import "react-reflex/styles.css";

export default function App() {
  const [selected, setSelected] = React.useState([]);

  const handleMarkerClick = React.useCallback((id) => {
    setSelected((prev) => Array.from(new Set([...prev, id])));
  }, []);

  return (
    <div className="App">
      <ReflexContainer orientation="vertical">
        <ReflexElement className="left-pane" propagateDimensions={true}>
          <MapComponent onMarkerClick={handleMarkerClick} selected={selected} />
        </ReflexElement>

        <ReflexSplitter />

        <ReflexElement className="right-pane" minSize="10" maxSize="800">
          <ul>
            {selected.map((id) => (
              <li key={id}>{id} selected</li>
            ))}
          </ul>
          <button onClick={() => setSelected([])}>reset</button>
        </ReflexElement>
      </ReflexContainer>
    </div>
  );
}
