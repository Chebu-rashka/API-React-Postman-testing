import { createContext, useEffect, useRef, useState } from "react";

const DataContext = createContext({
  projects: [],
  getProject: (projectId) => {},
});
const DataConsumer = DataContext.Consumer;

// provider=component gadna taldaa root maygaar bn, shareleh buh info n provider dotroo l bn
//hooson tag n React.Fragment

const DataProvider = (props) => {
  const projectsRef = useRef([]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Project 1",
      // description:
      //   " A project description is a high-level overview of why you’re doing a project.
      //    The document explains a project’s objectives and its essential qualities.
      //    Think of it as the elevator pitch that focuses on what and why without delving into how. ",
      // boards: [{ cards: "card1",  }],
      boards: [
        {
          title: "To Do",
          cards: [
            "Coding assessments",
            "Usability Testing",
            "Deploy code to production",
          ],
          status: ["Stuck", "In process", "Completed"],
          comment: "bla bla",
        },
        {
          title: "Done",
          cards: [
            "Coding assessments",
            "Usability Testing",
            "Deploy code to production",
          ],
          status: ["Stuck", "In process", "Completed"],
          comment: "bla bla",
        },
        {
          title: "In Process",
          cards: [
            "Coding assessments",
            "Usability Testing",
            "Deploy code to production",
          ],
          status: ["Stuck", "In process", "Completed"],
          comment: "bla bla",
        },
        {
          title: "In review",
          cards: ["Debugging", "User Testing", "Final reviews"],
          status: ["Stuck", "In process", "Completed"],
        },
      ],
      // cards: ["Task 1", "Task 2", "Task 3"],
      createdBy: "Zoe",
      createdDate: new Date("2022-03-02"),
    },
  ]);
  const addProject = (projectName) => {
    setProjects([
      ...projects,
      { name: projectName, id: projects.length + 1, createdDate: new Date() },
    ]);
  };
  const addBoard = (projectId, boardTitle) => {
    console.log(projectId, boardTitle);
    const projectIndex = projectsRef.current.findIndex((project) => {
      return projectId === project.id;
    });
    console.log("index", projectIndex);
    const tmp = [...projectsRef.current];
    tmp[projectIndex].boards.push({
      title: boardTitle,
      cards: [],
      status: [],
      comment: "",
    });
    console.log(tmp);
    // if (tmp.length > 0) {
    //   localStorage.setItem("local", JSON.stringify(tmp));
    // }
    setProjects(tmp);
    // setTimeout(() => {
    //   setProjects(tmp);
    // }, 5000);

    // projects[projectIndex].boards.push();
  };
  // buh oorchlolt local ruu save
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem("local", JSON.stringify(projects));
    }
    projectsRef.current = projects;
  }, [projects]);
  // anhni uda achaalah ued local deer data bvl projects ruuga set-lene
  useEffect(() => {
    // alert("new board ");
    const temp = localStorage.getItem("local");
    const tempProjects = temp.length > 4 ? JSON.parse(temp) : [];
    // ‘[]’ > 4
    // setProjects(tempProjects);
  }, []);

  // const boards = [
  //   {
  //     id: 1,
  //     title: "Board 1",
  //     description: "Board ",
  //   },
  // ];

  // const cards = [
  //   {
  //     boardId: 1,
  //     title: "Card 1",
  //     description: "Bla bla",
  //     comments: [{
  //       type:"bla bla",
  //       user:{name:"dd"}
  //     }],
  //   },
  // ];
  const getProject = (projectId) => {
    return projects.find((project) => {
      console.log(project.id, projectId);
      return project.id == projectId;
    });
  };

  return (
    <DataContext.Provider
      value={{ projects, getProject, addProject, addBoard }}
    >
      <div>{props.children}</div>
    </DataContext.Provider>
  );
};
export { DataConsumer, DataProvider };
export default DataContext;
