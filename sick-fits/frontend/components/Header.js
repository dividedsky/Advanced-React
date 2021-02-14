import Nav from './Nav';
import Link from 'next/link';

export default function MyHeader() {
  return (
    <header>
      <div className="bar">
        <Link href="/">sick fits</Link>
      </div>
      <div className="sub-bar">
        <p>search</p>
      </div>
      <Nav />
    </header>
  );
}
