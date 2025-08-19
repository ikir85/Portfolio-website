import WebProjectBasicLayout from "../pages/webProjectBasicLayout";
import ImageEditor from "../pages/webProjects/ImageEditor";
import PuzzleGame from "../pages/webProjects/Puzzle";
import WeatherMood from "../pages/webProjects/WeatherMood";

const projects = [
  {
    id: "1",
    name: "Image editor",
    component: (
      <WebProjectBasicLayout>
        <ImageEditor />
      </WebProjectBasicLayout>
    ),
  },
  {
    id: "2",
    name: "Puzzle",
    component: (
      <WebProjectBasicLayout>
        <PuzzleGame />
      </WebProjectBasicLayout>
    ),
  },
  {
    id: "3",
    name: "Weather mood",
    component: (
      <WebProjectBasicLayout>
        <WeatherMood />
      </WebProjectBasicLayout>
    ),
  },
];

export default projects;
