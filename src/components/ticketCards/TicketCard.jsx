import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TicketCard = ({ ticket, handleAddTask }) => {
  return (
    <div
      className="card card-border bg-base-100 w-100 shadow-md"
      onClick={() => handleAddTask(ticket)}
    >
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title text-left">{ticket.title}</h3>
          {/* <div className=""> */}
          {/* <span className="badge badge-xs badge-warning flex gap-2 ">
            <FontAwesomeIcon icon={faCircle} />
            {ticket.status}
          </span> */}
          <span
            className={`badge badge-xs flex gap-2 items-center ${
              ticket.status === "Open" ? "badge-success" : "badge-warning"
            }`}
          >
            <FontAwesomeIcon
              icon={faCircle}
              className={
                ticket.status === "Open" ? "text-green-700" : "text-yellow-700"
              }
            />
            {ticket.status}
          </span>
          {/* </div> */}
        </div>

        {/* <p>{ticket.description.substring(0, 300)}....</p>
         */}
        <p className="text-gray-500">
          {ticket.description.length > 100
            ? ticket.description.slice(0, 100) + "..."
            : ticket.description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex gap-1">
            <span className="text-gray-500">
              #{String(ticket.id).padStart(3, "0")}
            </span>

            <span
              className={`${
                ticket.priority === "High"
                  ? "text-green-500"
                  : ticket.priority === "Medium"
                    ? "text-yellow-400"
                    : "text-red-600"
              }`}
            >
              {ticket.priority.toUpperCase()} PRIORITY
            </span>
          </div>

          <div className="flex gap-1 items-center text-sm text-gray-500">
            <span>{ticket.customer}</span>
            <FontAwesomeIcon icon={faCalendar} />
            <span>{ticket.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
