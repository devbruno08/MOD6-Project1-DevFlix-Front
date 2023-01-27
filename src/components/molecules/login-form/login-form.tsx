import { FormComponent } from "./styles"
import { useNavigate } from "react-router-dom"

export  function LoginForm() {

  const navigate = useNavigate();

  return (
    <FormComponent>
      <h2>Login</h2>
        <form>
          <input placeholder="Usuário ou E-mail"/>
          <input placeholder="Senha"/>
          <button onClick={() => navigate("/home")}>Login</button>
        </form>
    </FormComponent>
  )
}
