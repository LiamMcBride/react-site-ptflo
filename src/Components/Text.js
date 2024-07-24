import './Text.css';

export function Header1({children}) {
  return (
    <h1 className="custom-h1">{children}</h1>
  );
}

export function NameHeader({children}) {
    return (
        <div className="name-header">
            <h1 className="custom-h1">{children}</h1>
            <div className="highlight"></div>
        </div>
    )
}

export function Header2({children}) {
  return (
    <h2 className="custom-h2">{children}</h2>
  );
}

export function Header3({children}) {
  return (
    <h3 className="custom-h3">{children}</h3>
  );
}

export function Header4({children}) {
  return (
    <h4 className="custom-h4">{children}</h4>
  );
}

export function Header5({children}) {
  return (
    <h5 className="custom-h5">{children}</h5>
  );
}

export function CustomMedium({children}) {
  return (
    <p className="custom-medium">{children}</p>
  );
}

export function LargeSubtext({children}) {
  return (
    <p className="large-subtext">{children}</p>
  );
}

