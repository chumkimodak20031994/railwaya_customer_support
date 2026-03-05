import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

import TicketCard from "./components/ticketCards/TicketCard";
import TaskStatus from "./components/taskStatus/TaskStatus";
import Banner from "./components/statusbar/Banner";
import Footer from "./components/footer/Footer";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    const loadTickets = async () => {
      const res = await fetch("/ticket.json");
      const data = await res.json();
      setTickets(data);
    };

    loadTickets();
  }, []);

  // Add ticket to In Progress
  // const handleAddTask = (ticket) => {
  //   alert("Ticket added to In Progress");

  //   setInProgress((prev) => [...prev, ticket]);
  // };
  const handleAddTask = (ticket) => {
    alert("Ticket added to In Progress");

    // prevent duplicate
    if (inProgress.find((t) => t.id === ticket.id)) return;

    setInProgress([...inProgress, ticket]);
  };

  // Complete task
  const handleComplete = (task) => {
    alert("Task Completed");

    setResolved((prev) => [...prev, task]);

    setInProgress((prev) => prev.filter((item) => item.id !== task.id));
  };

  return (
    <>
      <Navbar />
      <Banner inProgress={inProgress.length} resolved={resolved.length} />

      <div className="grid md:grid-cols-3 gap-6 container mx-auto">
        {/* LEFT SIDE */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                handleAddTask={handleAddTask}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-xl font-bold mb-4">Task Status</h2>

          <TaskStatus
            inProgress={inProgress}
            resolved={resolved}
            handleComplete={handleComplete}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
