import { useEffect, useState } from "react";

export default function Details(props) {
  const [datas, setDatas] = useState([]);
  const fetchDetails = (id) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "90e3748dedmshb648a361e42e785p1f5b80jsn865a9a0b2215",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(
      `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${id}&currentCountry=US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setDatas(response.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    props?.id && fetchDetails(props.id);
    // && unen bol ajilna
  }, [props]);
  // console.log(props);

  return (
    <>
      {/* <pre>{JSON.stringify(datas.ratings, null, 2)}</pre> */}
      <div>
        {datas?.map((data, dataId) => {
          return <h2 key={dataId}>{title}</h2>;
        })}
      </div>
    </>
  );
}
