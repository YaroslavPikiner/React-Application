import React from 'react';

interface TodoFormProps {
    inputTitle: string;
    changeHandler: (event: string) => void;
    addHandler: (event: any) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ inputTitle, changeHandler, addHandler }) => {
    return (
        <>
            <div className="col s12">
                <div className="row">

                    <div className="input-field col s6">
                        <input onChange={(e) => changeHandler(e.target.value)} value={inputTitle} type="text" className="validate" />
                        <label className='active' htmlFor="first_name">First Name</label>
                    </div>
                </div>
                <button disabled={inputTitle ? false : true} onClick={addHandler} className="btn waves-effect waves-light" >Add
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </>
    )
}

export default TodoForm;