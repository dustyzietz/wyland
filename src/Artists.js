import React from "react";
import Prismic from "prismic-javascript";


export default function Artists() {
  const [doc, setDocData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const apiEndpoint = "https://gallery-website.cdn.prismic.io/api/v2";
      const Client = Prismic.client(apiEndpoint);
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "paintings")
      );
      if (response) {
        setDocData(response.results[0]);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>{doc && doc.data.artist[0].text}</h1>
    </div>
  );
}
