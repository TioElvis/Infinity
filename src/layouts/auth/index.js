import useAuth from "hooks/auth";
import { Link } from "react-router-dom";

function AuthLayout({ children, onSubmit, text, question, redirect }) {
  const { loadingAuth, hashError } = useAuth();

  return (
    <>
      <div className="w-screen h-screen bg-auth-background text-white grid place-content-cente">
        <form
          className="w-96 h-96 p-8 bg-form-backgound-auth m-auto rounded-lg flex flex-col justify-center"
          onSubmit={onSubmit}>
          {loadingAuth ? <p className="mb-2">Loading...</p> : <p className="mb-2">{text}</p>}
          {children}
          <span className="w-full flex justify-center p-4">
            <button>Send</button>
          </span>
          <section className="text-sm flex gap-2">
            {question}
            <Link to={`/auth/${redirect}`} className="text-red-400">
              click here
            </Link>
          </section>
          {hashError && <p>Something went wrong</p>}
        </form>
      </div>
    </>
  );
}

export default AuthLayout;
