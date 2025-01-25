import LoginForm from "../../components/LoginForm/LoginForm";

function SignIn() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle"></i>
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </main>
  );
}

export default SignIn;
