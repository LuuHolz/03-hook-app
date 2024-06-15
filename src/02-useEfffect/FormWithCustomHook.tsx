import { useForm } from '../Hooks/useForm';



type Props = {
  onInputCahnge: ({ target }: { target: any}) => void;
  username: string;
  email: string;
  password: string;
  onResetForm: () => void;
}

const FormWithCustomHook = () => {

  const { onInputCahnge, username, email, password, onResetForm } : Props = useForm({
          username: '',
          email: '',
          password: ''
        });


  return (
    <>
      <h1>Formulario simple</h1>

      <hr /> 
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputCahnge}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="luciana@gmail.com"
        name="email"
        value={email}
        onChange={onInputCahnge}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputCahnge}
      />

      <button onClick={ onResetForm } className='btn btn-primary mt-2' >Borrar</button>
    </>
  );
};

export { FormWithCustomHook };
