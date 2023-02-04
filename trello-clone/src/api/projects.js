import client from "../libs/client";

const apiProjects = {
  find: (cb) => {
    client
      .get("/projects")
      .then((res) => {
        cb(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        cb(null, error);
        console.log(error);
      });
  },
  insert: (title, description) => {
    return client.post("/projects", { title, description });
  },
  delete: (id) => {
    return client.delete(`/projects/${id}`);
  },
};
export default apiProjects;
