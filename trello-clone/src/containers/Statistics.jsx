import { useParams } from "react-router-dom";
import { useState } from "react";
import Calendar from "react-calendar";

export default function Statistics(props) {
  let { id } = useParams();
  console.log(props);
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-red-200 h-screen w-screen">
      <h1>Team Board</h1>
      <div className="">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="h-24">Selected date: {date.toDateString()}</div>
    </div>
  );
}
