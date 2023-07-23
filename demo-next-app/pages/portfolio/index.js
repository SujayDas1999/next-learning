import Link from "next/link";

export default function Index() {
  const portfolios = [
    { id: "max", name: "maximillian" },
    { id: "gay", name: "gaybriel" },
  ];

  return (
    <>
      <div>
        <h1>The portfolio page</h1>
        <ul>
          {portfolios &&
            portfolios.map((client) => {
              return (
                <li key={client.id}>
                  <Link
                    href={{
                      pathname: "/portfolio/{id}",
                      query: { id: client.id },
                    }}
                  >
                    {client.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
