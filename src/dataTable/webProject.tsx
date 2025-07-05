import WebProjectBasicLayout from "../pages/webProjectBasicLayout";
import ImageEditor from "../pages/webProjects/ImageEditor";

const projects = [
  {
    id: "1",
    name: "Project One",
    component: (
      <WebProjectBasicLayout>
        <ImageEditor />
      </WebProjectBasicLayout>
    ),
  },
  { id: "2", name: "Project Two" },
  { id: "3", name: "Project Three" },
];

export default projects;
