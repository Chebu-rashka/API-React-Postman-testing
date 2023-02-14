import { Link } from "react-router-dom";
import Project from "../components/Project";
import { BsTrash } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import apiProjects from "../api/projects";
import { useState } from "react";

export default function Dashboard() {
  // projectsoos list orj irne
  const [list, setList] = useState("");
  const [projects, setProjects] = useState([]);

  const cb = (data, error) => {
    if (!error) setProjects(data);
    else console.log(error);
  };
  useEffect(() => {
    apiProjects.find(cb);
  }, []);
  return (
    <div>
      <div className=" m-12 mx-28  border-b-2 border-blue-500 p-2">
        <section className="font-bold text-3xl">Dashboard</section>
      </div>
      <div className="flex items-center ">
        <Link to={`/projects/create`}>
          <button
            className=" border hover:bg-black
             hover:text-white rounded-lg
           text-xs p-2 m-6 mx-28  "
          >
            + Create New Project
          </button>
        </Link>
        <input
          className=" h-8 rounded-lg border-gray-200"
          type={"search"}
          value={list}
          onChange={(e) => {
            setList(e.target.value);
          }}
        />
        <button
          className="border hover:bg-black hover:text-white rounded-lg
           text-xs p-2 m-6 "
        >
          search
        </button>
      </div>
      <div className="flex mx-28  ">
        <div class="flex flex-col cursor-pointer">
          <div class="overflow-x-auto sm:-mx-8 lg:-mx-8">
            <div class="py-4 inline-block min-w-full sm:px-8 lg:px-8">
              <table>
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-10 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-10 py-4 text-left"
                    >
                      Project Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-10 py-4 text-left"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-10 py-4 text-left"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-10 py-4 text-left"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-10 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, projectID) => (
                    <tr
                      key={projectID}
                      class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td class="px-6 py-4 text-sm font-medium text-gray-900">
                        {project.id}
                      </td>
                      <Link to={`/projects/1`}>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {project.title}
                        </td>
                      </Link>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {project.description}
                      </td>
                      <td class="text-sm text-gray-900 font-light bg-green-400 px-6 py-4 whitespace-nowrap">
                        {project.status}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {project.createdAt}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => {
                            apiProjects.delete(project.id).then(() => {
                              apiProjects.find(cb);
                            });

                            // project tatah huselt
                          }}
                        >
                          <BsTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-space items-center p-4 m-12 border bg-white rounded-xl w-96">
          {projects.map((project, projectId) => {
            return <Project {...project} />;
          })}
        </div> */}
      </div>
    </div>
  );
}

/// Javascript davt
// api
//database
