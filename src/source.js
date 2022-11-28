import { useState, useEffect } from 'react';
import axios from 'axios';

const src =
  'https://newsapi.org/v2/top-headlines/sources?apiKey=cd5eaaf55e834b5eb73c67ef48bfbcdd';

function SourceComponent() {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    axios.get(src).then(data => {
      setSources(data.data.sources);
    });
  }, []);

  return (
    <div className="Source">
      {sources.map(source => {
        return <p>{source.name}</p>;
      })}
    </div>
  );
}

export default SourceComponent;
