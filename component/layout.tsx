import Link from "next/link";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <div className="navBar">
        <ul>
          <li>
            <Link href="/mentalFlashcard">
              <a>Mental card</a>
            </Link>
          </li>
          <li>
            <Link href="/inputFlashcard">
              <a>Input card</a>
            </Link>
          </li>
          <li>
            <Link href="/choicesFlashcard">
              <a>Multiple choices card</a>
            </Link>
          </li>
        </ul>
      </div>
      <span className="seperate"></span>

      {children}

      <div className="footer"></div>
    </div>
  );
};
