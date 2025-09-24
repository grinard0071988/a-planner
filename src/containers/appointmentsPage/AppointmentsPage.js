import React from "react";
import { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import "./AppointmentsPage.css";
import "../../components/appointmentForm/AppointmentForm.css";
import "../../components/tileList/TileList.css";

export const AppointmentsPage = (props) => {
  // Define state variables for appointment info
  const appointments = props.appointments;
  const contacts = props.contacts;
  const addAppointment = props.addAppointment;
  // local States
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact info and clear data
    addAppointment(title, contact, date, time);
    // reseting values
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div className="appointments-page">
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts}
          className="appointment-form"
        />
      </section>
      <hr style={{ color: "#1e538b" }} />
      <section>
        <h2>Appointments</h2>
        <TileList className="tile-list" objArr={appointments} />
      </section>
    </div>
  );
};
