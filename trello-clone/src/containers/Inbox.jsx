import { useParams } from "react-router-dom";

export default function Inbox(props) {
  let { id } = useParams();
  console.log(props);
  return <div>Inbox{id}</div>;
}
