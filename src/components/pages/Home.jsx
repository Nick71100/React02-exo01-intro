import { useState, useEffect } from "react";

function Home() {
  const [datas, setDatas] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20"
        );
        const data = await response.json();
        setDatas(data);
      } catch (err) {
        setError("Fetch failed. Try again.");
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h2>fetch-moi ça !</h2>

      <div className="cards">
        {error && <p>{error}</p>}
        {!datas && !error ? (
          <p>Loading...</p>
        ) : (
          datas.map((data, i) => (
            <article key={data.id}>
              <p>index : {i}</p>
              <p>data.id : {data.id}</p>
              <p>title : {data.title}</p>
            </article>
          ))
        )}
      </div>
    </main>
  );
}

export default Home;
