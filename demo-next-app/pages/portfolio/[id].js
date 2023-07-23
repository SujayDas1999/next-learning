import { useRouter } from "next/router";

const GetItem = () => {
  const router = useRouter();

  function loadProjHandler() {
    router.push("/portfolio");
  }

  return (
    <>
      <div>
        <h1>Get ID data</h1>
        <button onClick={loadProjHandler}>Load Portfolio Lists</button>
      </div>
    </>
  );
};

export default GetItem;
