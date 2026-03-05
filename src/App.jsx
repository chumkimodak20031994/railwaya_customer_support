import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

import TicketCard from "./components/ticketCards/TicketCard";
import TaskStatus from "./components/taskStatus/TaskStatus";
import Banner from "./components/statusbar/Banner";
import Footer from "./components/footer/Footer";
import { toast, ToastContainer } from "react-toastify";

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

  const handleAddTask = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) {
      toast.warning("Ticket already in progress");
      return;
    }

    toast.success("Ticket added to In Progress");

    setInProgress([...inProgress, ticket]);
  };

  const handleComplete = (task) => {
    toast.success("Task Completed ");

    setResolved((prev) => [...prev, task]);

    setInProgress((prev) => prev.filter((item) => item.id !== task.id));
    // remove from ticket list (LEFT SIDE)
    setTickets((prev) => prev.filter((ticket) => ticket.id !== task.id));
  };

  return (
    <>
      <Navbar />
      <Banner inProgress={inProgress.length} resolved={resolved.length} />

      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-4 md:my-8">
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
      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
}

export default App;
