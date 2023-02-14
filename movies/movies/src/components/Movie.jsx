export default function Movie({ item, itemId, ...props }) {
  // console.log(item, "movie");
  return (
    <>
      <div
        className="flex"
        onClick={() => {
          props.onClick();
        }}
      >
        <div className="w-64 mx-16 p-4">
          {" "}
          <img className="w-full" src={item?.i?.imageUrl} alt="image" />
        </div>

        <div className="flex flex-col items-start content-center pt-4">
          {/* <div>{item.id}</div> */}
          <div className="font-bold text-2xl">{item?.l}</div>
          {itemId === 0 ? (
            <div>Description: {item?.s}</div>
          ) : (
            <div>Star : {item?.s}</div>
          )}
          {itemId === 0 ? <div>{item?.q}</div> : <div> Type: {item?.q}</div>}

          {/* <div>{item?.qid}</div> */}
          {item.rank && <div>Rank: {item?.rank}</div>}
          {itemId === 0 ? (
            <div>{item?.y}</div>
          ) : (
            <div> Released year: {item?.y}</div>
          )}
        </div>
      </div>
    </>
  );
}
