
import { useForm } from 'react-hook-form';


type FormData = {
    firstName: string,
    lastName: string,
}

const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>First Name</label>
                <input {...register("firstName", { required: true })} />
                {errors.firstName?.type === 'required' && "First name is required"}

                <div>
                    <label>Last Name</label>
                    <input {...register("lastName", { required: true })} />
                    {errors.lastName?.type === 'required' && "Last name is required"}
                </div>
                <div>
                    <button type="submit">
                        SetValue
                    </button>
                </div>
            </form>

        </>

    )
}

export default LoginForm