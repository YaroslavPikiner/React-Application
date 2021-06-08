import React, { useState, useRef, useContext, createContext, useReducer } from 'react';
// interface IUser {
//     name: string;
//     age?: number;
// }


// const Title = () => {
//     const [value1, setValue] = useState(0);
//     const [value2, setSetValue] = useState<number | undefined>(undefined);
//     const [val, setTiVal] = useState<Array<number>>([])
//     const [vala, setVala] = useState<IUser>({ name: 'YarrroslaV' })

//     // useRef 

//     const ref1 = useRef<HTMLElement>(null!);
//     const ref2 = useRef<HTMLElement | null>(null);

//     interface ITheme {
//         bac: string,
//         color: string,
//     }

//     const context = createContext<ITheme>({
//         bac: 'Red',
//         color: 'White'
//     })

//     const themeContext = useContext<ITheme>(context)


//     type TitleProps = {
//         title: string,
//         test?: any,
//         number?: number
//     }

// }





// const Title1: React.FC<{ title: string }> = ({ title }) => {
//     return <h1>{title}</h1>
// }

// const Title = ({ title }: TitleProps) => <p>{title}</p>





const App = () => {
    interface State { count: number }
    type Action = { type: 'increment' | 'decrement' }


    const counterReducer = ({ count }: State, { type }: Action) => {
        switch (type) {
            case 'decrement': return { count: count - 1 }
            case 'increment': return { count: count + 1 }
            default: return {};
        }
    }

    const [state, dispatch] = useReducer(counterReducer, { count: 0 })

    dispatch({ type: 'decrement' })
    dispatch({ type: 'increment' })

    return (
        <>
            {count}
            {/* <button onClick={handleDec}>Dec -</button>
            <button onClick={handleInc}>Inc +</button> */}
        </>
    )
}

export default App;
