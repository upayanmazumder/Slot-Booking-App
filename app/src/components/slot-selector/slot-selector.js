import React, { useState } from 'react';
import faculties from '../../data/mentors.json';
import slotStyles from "./slot-selector.module.css";
import Image from 'next/image';
import schedule from "../../data/schedule.json";

const getDaysWithDates = () => {
    const today = new Date();
    const days = Object.keys(schedule);

    return days.map((day, index) => {
        const currentDate = new Date(today.getTime() + index * 24 * 60 * 60 * 1000);
        const dateString = currentDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        const dayIndex = (today.getDay() + index) % 7;
        return { day: days[dayIndex], date: dateString };
    });
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

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const src = i <= rating ? '/media/star/orange.svg' : '/media/star/gray.svg';
            stars.push(
                <span key={i}>
                    <Image src={src} alt="star" width={20} height={20} />
                </span>
            );
        }
        return stars;
    };

    const daysWithDates = getDaysWithDates();

    return (
        <div className={slotStyles.slotSelector}>
            {isBooked ? (
                <div className={slotStyles.booked}>
                    <h4>Slot Booked</h4>
                    <p><strong>Mentor:</strong> {selectedMentor}</p>
                    <p><strong>Slot:</strong> {selectedSlot}</p>
                </div>
            ) : (
                <div className={slotStyles.book}>
                    <div className={slotStyles.mentors}>
                        <h4>Choose mentor</h4>
                        <ul>
                            {faculties.map((mentor, index) => (
                                <div key={index} className={slotStyles.mentor}>
                                    <Image src={mentor.imageSrc} alt={`${mentor.name}`} width={100} height={100} />
                                    <h5>{mentor.name}</h5>
                                    <p className={slotStyles.description}>{mentor.specialisation} Specialist <br />
                                        {mentor.boardPercentage}% 12th board <br />
                                        {renderStars(mentor.rating)}
                                    </p>
                                    <button
                                        className={selectedMentor === mentor.name ? slotStyles.selected : ''}
                                        onClick={() => handleMentorSelection(mentor.name)}
                                    >
                                        Select
                                    </button>
                                </div>
                            ))}
                        </ul>
                    </div>

                    <div className={slotStyles.slots}>
                        <h4>Available slots</h4>
                        <ul>
                            {daysWithDates.map(({ day, date }) => (
                                <div key={day}>
                                    <h5 className={slotStyles.day}>{day}</h5>
                                    <h5 className={slotStyles.date}>{date}</h5>
                                    <div className={slotStyles.day}>
                                        {schedule[day]?.map((slot) => (
                                            <button
                                                key={slot}
                                                className={`${slotStyles.slot} ${selectedSlot === `${day} - ${slot}` ? slotStyles.selected : ''}`}
                                                onClick={() => handleSlotSelection(day, slot)}
                                            >
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>

                    <div className={slotStyles.book}>
                        <button onClick={handleBooking}>Book</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SlotSelector;
