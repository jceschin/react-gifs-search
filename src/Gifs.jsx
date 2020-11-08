import React from 'react';
import Gif from './Gif.jsx';

const Gifs = (props) => {
    return (
        <div className="gif-list">
            {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
        </div>
    )
}

export default Gifs;