import { Outlet, Link } from 'react-router'

export default function Layout() {
  return (
    <>
      <header>
        <Link to="/">
          <span>Countries of the World</span>
        </Link>

        <button>
          Dark Mode
        </button>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        Built by <a 
          href="https://nate-dev.com?utm_source=codebynate&utm_medium=web&utm_campaign=rest_countries"
          target="_blank"
          rel="noreferrer">Nate</a>
      </footer>
    </>
  )
}