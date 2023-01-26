import { FormComponent } from "./styles"

export  function LoginForm() {
  return (
    <FormComponent>
      <h2>Login</h2>
        <form>
          <input placeholder="Usuário ou E-mail"/>
          <input placeholder="Senha"/>
          <button>Login</button>
        </form>
    </FormComponent>
  )
}
