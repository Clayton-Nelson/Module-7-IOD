import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";
import { useNavigate, Outlet } from "react-router-dom";
import { useEmojiContext } from "../context/EmojiContext";

export default function MUIDashboardPage() {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="div">
          Dashboard
        </Typography>
          <Outlet />
          <CardActions>
          <button onClick={() => navigate("/MUI/dash/tasks")}>
            Show Tasks
          </button>
          <button onClick={() => navigate("/MUI/dash/messages")}>
            Show Messages
          </button>
          <button onClick={() => navigate(-1)}>Back</button>
          </CardActions>
      </CardContent>
    </Card>
  );
}

export function MUIDashboardMessages(props) {
  const { currentEmoji } = useEmojiContext();
  return (
    <div className="DashboardMessages">
      <p>Welcome to your dashboard, {currentEmoji.mood}</p>
    </div>
  );
}
export function MUIDashboardTasks(props) {
  const tasks = [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Decide on capstone project" },
    { id: 3, name: "Learn databases" },
  ];
  return (
    <div className="DashboardTasks">
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
