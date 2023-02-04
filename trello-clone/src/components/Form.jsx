import { useFormik } from "formik";
import apiProjects from "../api/projects";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Form() {
  // useEffect(() => {
  //   addProject();
  // }, []);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      description: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      // email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: (values) => {
      apiProjects
        .insert(values.title, values.description)
        .then((res) => {
          console.log(res.data);
          navigate("/dashboard", { replace: true });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });
  console.log(formik);
  return (
    <div className="flex flex-col m-10 ">
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        button
      </button>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          className="block mb-5"
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title ? (
          <p className="text-red-500">{formik.errors.title}</p>
        ) : null}
        <label htmlFor="description">Description</label>
        <textarea
          className="block mb-5"
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.errors.description && formik.errors.description ? (
          <p className="text-red-500">{formik.errors.description}</p>
        ) : null}
        <button
          type="submit"
          className=" bg-blue-600 text-white rounded-lg text-xs p-2"
        >
          Create a Project
        </button>
      </form>
    </div>
  );
}
