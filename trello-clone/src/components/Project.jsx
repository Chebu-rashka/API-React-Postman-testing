import { Link } from "react-router-dom";

export default function Project(props) {
  const {} = props;
  const project = props;
  console.log(props);
  return (
    <div className="m-10">
      <Link to={`/projects/${project.id}`}>
        <ul className="text-blue-600 divide-y divide-solid font-bold outl ">
          {project.name}
          {(project.boards || []).map((board, boardId) => {
            return <li key={boardId}>{board}</li>;
          })}
          {/* {project.cards?.map((card, cardId) => {
            return <li key={cardId}>{card}</li>;
          })} */}
        </ul>
      </Link>
    </div>
  );
}
