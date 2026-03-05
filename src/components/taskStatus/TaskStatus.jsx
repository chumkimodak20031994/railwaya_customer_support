import React from "react";

const TaskStatus = ({ inProgress, resolved, handleComplete }) => {
  return (
    <div>
      {inProgress.length === 0 ? (
        <p>Select a ticket to add to Task Status</p>
      ) : (
        inProgress.map((task) => (
          <div
            key={task.id}
            className="card bg-base-100 shadow-md rounded-lg mb-4 w-96"
          >
            <div className="card-body p-4">
              <h4 className="font-bold text-gray-800 text-md">{task.title}</h4>

              <button
                className="btn btn-success w-full mt-3"
                onClick={() => handleComplete(task)}
              >
                Complete
              </button>
            </div>
          </div>
        ))
      )}

      <h3 className="mt-6 font-bold text-gray-800">Resolved Tasks</h3>

      {resolved.length === 0 ? (
        <p className="text-sm text-gray-400">No resolved tasks yet.</p>
      ) : (
        <div className="space-y-3 mt-3">
          {resolved.map((task) => (
            <div
              key={task.id}
              className="bg-indigo-200 text-gray-800 p-3 rounded-md shadow-sm font-bold"
            >
              {task.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStatus;
