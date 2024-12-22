import React, { useState } from 'react';
import faculties from '../../data/mentors.json';

const schedule = {
    Monday: ["8:00 AM", "8:30 AM", "9:00 AM", "10 AM", "10:30 AM", "11:00 AM"],
    Tuesday: ["9:00 AM", "9:30 AM"],
    Wednesday: ["10:00 AM"],
    Thursday: ["9:00 AM"],
    Friday: ["8:30 AM", "10:00 AM"],
    Saturday: ["11:00 AM"],
    Sunday: ["9:00 AM", "10:00 AM", "11:00 AM"],
};

const SlotSelector = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [isBooked, setIsBooked] = useState(false);

    const handleSlotSelection = (day, slot) => {
        const key = `${day} - ${slot}`;
        setSelectedSlot(selectedSlot === key ? null : key);
    };

    const handleMentorSelection = (mentor) => {
        setSelectedMentor(selectedMentor === mentor ? null : mentor);
    };

    const handleBooking = () => {
        if (selectedMentor && selectedSlot) {
            setIsBooked(true);
        } else {
            alert("Please select both a mentor and a slot.");
        }
    };

    return (
        <div className="slot-selector">
            {isBooked ? (
                <div className="booking-summary">
                    <h1>Booking Confirmed</h1>
                    <p><strong>Mentor:</strong> {selectedMentor}</p>
                    <p><strong>Slot:</strong> {selectedSlot}</p>
                </div>
            ) : (
                <>
                    <h1>Slot and Mentor Selector</h1>
                    <div className="mentors">
                        <h2>Choose a Mentor</h2>
                        <div className="mentors-container">
                            {faculties.map((mentor, index) => (
                                <div
                                    key={index}
                                    className={`mentor ${selectedMentor === mentor.name ? 'selected' : ''}`}
                                    onClick={() => handleMentorSelection(mentor.name)}
                                >
                                    <img src={mentor.imageSrc} alt={`${mentor.name}`} />
                                    <h3>{mentor.name}</h3>
                                    <p><strong>Specialist In:</strong> {mentor.specialisation}</p>
                                    <p><strong>Rating:</strong> {mentor.rating} / 5</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="schedule">
                        <h2>Choose a Slot</h2>
                        {Object.entries(schedule).map(([day, slots]) => (
                            <div key={day} className="day-schedule">
                                <h3>{day}</h3>
                                <div className="slots-container">
                                    {slots.map((slot) => (
                                        <div
                                            key={slot}
                                            className={`slot ${selectedSlot === `${day} - ${slot}` ? 'selected' : ''}`}
                                            onClick={() => handleSlotSelection(day, slot)}
                                        >
                                            {slot}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="summary">
                        <h2>Selected Slot and Mentor</h2>
                        {selectedMentor || selectedSlot ? (
                            <div>
                                {selectedMentor && <p><strong>Mentor:</strong> {selectedMentor}</p>}
                                {selectedSlot && <p><strong>Slot:</strong> {selectedSlot}</p>}
                            </div>
                        ) : (
                            <p>No slot or mentor selected</p>
                        )}
                    </div>

                    <div className="booking">
                        <button onClick={handleBooking}>Book</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SlotSelector;
