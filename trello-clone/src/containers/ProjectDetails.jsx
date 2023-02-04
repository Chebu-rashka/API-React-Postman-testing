import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../hooks/useData";

export default function ProjectDetails(props) {
  const { getProject, addBoard } = useData();
  const [project, setProject] = useState();
  let { id } = useParams();
  useEffect(() => {
    if (id) {
      setProject(getProject(id));
    }
    console.log(id);
  }, [id]);
  //   useeffect maani render hiisnii daraa l ajillaj bgaa
  console.log(project);
  return (
    // anhni utga n undefined uchraas project bga esehee shalgaj bh ystoi
    // project && (
    //   <>
    //     {project.name} ,{project.description}
    //   </>
    // )
    project ? (
      <>
        <div className="bg-gradient-to-r from-violet-500 to-blue-400 p-10 text-white">
          <nav className="flex justify-between items-center text-3xl ">
            <h1 className="text-3xl font-bold ">Task Management</h1>
            <form class="flex items-center space-x-6">
              <div class="shrink-0">
                <img
                  class="h-16 w-16 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                  alt="Current profile photo"
                />
              </div>
              <label class="block">
                <span class="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100
    "
                />
              </label>
            </form>
          </nav>

          <div className="m-4 border-t-2">
            <div className="flex justify-between mb-8 mt-4 p-4 bg-white text-black rounded-md text-xl">
              <h2>{project.name}</h2>
              <div className="flex">
                <img
                  class="h-10 w-10 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                  alt="Current profile photo"
                />
                <img
                  class="h-10 w-10 object-cover rounded-full"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  alt="Current profile photo"
                />
                <img
                  class="h-10 w-10 object-cover rounded-full"
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Current profile photo"
                />
                <button className="border rounded-lg px-4 text-sm mx-4 hover:bg-blue-400">
                  + Invite
                </button>
              </div>
            </div>
            {/* <span className="text-sm text-gray-500">{project.description}</span> */}
            <div className="grid grid-cols-3 gap-10 p-4">
              {project?.boards?.map((board, boardIndex) => (
                <ul
                  className="flex flex-col bg-gray-100 rounded-xl text-black
                text-lg font-bold p-4"
                >
                  {board.title}
                  <img
                    src="https://kruschecompany.com/wp-content/uploads/2018/08/au9i1g9hn-1200x595.jpg"
                    alt="QA"
                  />{" "}
                  {board.cards.map((card, cardIndex) => (
                    <li className="p-4 my-4 border bg-white rounded-2xl text-sm font-light">
                      {card}
                    </li>
                  ))}
                  <li className="p-4 my-4 border bg-white rounded-2xl text-sm font-light">
                    Comment : {project.boards[boardIndex].comment}
                    {/* Board === project.boards[boardIndex] */}
                  </li>
                </ul>
              ))}
              <button
                className="flex flex-col justify-center items-center bg-gray-100 rounded-xl text-black
                text-lg font-bold p-4 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  const boardName = window.prompt("Board-iin neree oruulna uu");
                  console.log(boardName);
                  addBoard(project.id, boardName);
                }}
              >
                Add board
              </button>
            </div>
          </div>
        </div>
      </>
    ) : (
      <div>Loading</div>
    )
  );
}
//formik san suulgah
//validation hiih
// dashboard static garaad bn undseneesee ab
