import { useEffect, useState } from "react";
import DeleteProgress from "./DeleteProgress";

const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("Timer set");

    const timer = setTimeout(() => {
      onConfirm();
      console.log("Timer fired");
    }, TIMER);

    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
    }; // Clean up the timer on unmount
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <DeleteProgress timer={TIMER} />
    </div>
  );
}
