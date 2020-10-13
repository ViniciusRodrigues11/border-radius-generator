import React, { useState } from 'react'
import 'rc-slider/assets/index.css';


import './Main.css'

export default function Main(props) {

    const [TopLeft, setTopLeft] = useState(0)
    const [TopRight, setTopRight] = useState(0)
    const [BottomLeft, setBottomLeft] = useState(0)
    const [BottomRight, setBottomRight] = useState(0)


    const style = {
        borderTopLeftRadius: TopLeft + 'px',
        borderTopRightRadius: TopRight + 'px',
        borderBottomRightRadius: BottomRight + 'px',
        borderBottomLeftRadius: BottomLeft + 'px',
    }

    function handleTopLeft(event) {
        setTopLeft(event.target.value)
    }
    function handleTopRight(event) {
        setTopRight(event.target.value)
    }
    function handleBottomLeft(event) {
        setBottomLeft(event.target.value)
    }
    function handleBottomRight(event) {
        setBottomRight(event.target.value)
    }


    // useEffect(() => {
    //     setStyle({
    //         borderTopLeftRadius: `${TopLeft}+'px'`,
    //         borderTopRightRadius: TopRight,
    //         borderBottomRightRadius: BottomRight,
    //         borderBottomLeftRadius: BottomLeft,
    //     })

    // }, [TopLeft, TopRight, BottomLeft, BottomRight])



    return (
        <div className="main" id="main">

            <div className="controls">
                <h4>Controles</h4>

                <ul>
                    <li>
                        <p>Top Left</p>
                        <div Style="display: flex; align-items: center">
                            <p Style="width: 30px">{TopLeft}</p>
                            <input
                                type="range"
                                min="0"
                                max="200"
                                onChange={handleTopLeft}
                                value={TopLeft}
                            />
                        </div>

                    </li>
                    <li>
                        <p>Top Right</p>
                        <div Style="display: flex; align-items: center">
                            <p Style="width: 30px">{TopRight}</p>
                            <input
                                type="range"
                                min="0"
                                max="200"
                                onChange={handleTopRight}
                                value={TopRight}
                            />
                        </div>
                    </li>
                    <li>
                        <p>Bottom Left</p>
                        <div Style="display: flex; align-items: center">
                            <p Style="width: 30px">{BottomLeft}</p>
                            <input
                                type="range"
                                min="0"
                                max="200"
                                onChange={handleBottomLeft}
                                value={BottomLeft}

                            />
                        </div>
                    </li>
                    <li>
                        <p>Bottom Right</p>
                        <div Style="display: flex; align-items: center">
                            <p Style="width: 30px">{BottomRight}</p>
                            <input
                                type="range"
                                min="0"
                                max="200"
                                onChange={handleBottomRight}
                                value={BottomRight}
                            />
                        </div>
                    </li>
                </ul>
            </div>

            <div className="box" id="box" style={style}>
                <p>border-radius: {TopLeft}px {TopRight}px {BottomLeft}px {BottomRight}px;</p>
            </div>
        </div>
    )
}

