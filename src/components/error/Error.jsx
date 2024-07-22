//CSS
import './error.css'

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <h2 className="error__subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <a className="error__link" href="/">
        Retourner sur la page d'accueil
      </a>
    </div>
  )
}

export default Error
