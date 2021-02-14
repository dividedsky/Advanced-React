import Link from 'next/link';

export default function Nav() {
  return (
    <nav class="navbar">
      <Link href="/products">products</Link>
      <Link href="/sell">sell</Link>
      <Link href="/orders">orders</Link>
      <Link href="/account">account</Link>
      <Link href="/cart">cart</Link>
    </nav>
  );
}
