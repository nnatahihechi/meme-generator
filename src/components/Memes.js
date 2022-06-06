import React, { useState } from 'react'
import memeDatas from '../memeData'
const Memes = () => {
    const [memeImage, setmemeImage] = useState([""]);
    function handleSubmit(e) {
        e.preventDefault();
    }

    const memeArray = memeDatas.data.memes
    const randomNum = Math.floor(Math.random() * memeArray.length + 10)
    function getMemeImage() {
        const newUrl = memeArray[randomNum].url
        console.log([newUrl])
        return setmemeImage([newUrl])
    }
    return (
        <div className="main">
            <form onSubmit={handleSubmit} className="meme-form">
                <div className="form-input">
                    <input type="text"
                        placeholder="shut up"
                        className="input"
                    />
                    <input type="text"
                        placeholder="and take my money"
                        className="input"
                    />
                </div>
                <button onClick={getMemeImage}
                > Get a new meme image 🖼</button>
            </form>

            <div className="meming">
                <img src={memeImage} />
            </div>
        </div>
    )
}

export default Memes