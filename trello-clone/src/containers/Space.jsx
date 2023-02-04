import { useParams } from "react-router-dom";

export default function Space(props) {
  let { id } = useParams();
  console.log(props);
  return <div>Space{id}</div>;
}
