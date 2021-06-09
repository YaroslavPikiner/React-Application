import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    const inc = () => {
        setCount(() => count + 1)
    }


    const dec = () => {
        setCount(() => count - 1)
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    {count}
                    <button onClick={dec}>Dec - </button>
                    <button onClick={inc}>Inc +</button>
                </div>
            </div>
        </>
    )
}

export default Counter;