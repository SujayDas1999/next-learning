import Link from "next/link";

export default function Index() {
  return (
    <>
      <div>Hello</div>
      <ul>
        <li>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/clients"}>Client</Link>
        </li>
      </ul>
    </>
  );
}
