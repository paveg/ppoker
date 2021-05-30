import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import Link from 'next/link'

export const Footer: React.VFC = (): JSX.Element => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          href={'https://ppoker.vercel.app/'}
        >
          <span className="ml-3 text-xl sm:text-center">ppoker</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2021 Ryota Ikezawa —
          <a
            href="https://twitter.com/_pavlog"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @_pavlog
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="https://twitter.com/_pavlog">
            <a
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Go to Twitter profile page."
              className="px-4 py-2 text-xs hover:bg-gray-200 text-black m-1 rounded-md transition duration-500 select-none focus:outline-none focus:shadow-outline"
            >
              <TwitterIcon />
            </a>
          </Link>
          <Link href="https://github.com/paveg/ppoker">
            <a
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Go to Github repository page."
              className="px-4 py-2 text-xs hover:bg-gray-200 text-black m-1 rounded-md transition duration-500 select-none focus:outline-none focus:shadow-outline"
            >
              <GitHubIcon />
            </a>
          </Link>
        </span>
      </div>
    </footer>
  )
}
