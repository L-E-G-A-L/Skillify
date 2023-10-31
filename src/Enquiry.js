import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PC.css";

function InquiryInbox() {
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost/getEnquiries.php")
            .then((response) => {
                setInquiries(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, []);

    const markAsRead = (index) => {
        const updatedInquiries = [...inquiries];
        updatedInquiries[index].read = true;
        setInquiries(updatedInquiries);
    };

    return (
        <div className="inquiry-page">
            <nav className="pc-nav">
                <h6 className="pc-h6">DASHBOARD</h6>
                <ul className="pc-nav-list pc-ul">
                    <li className="pc-li">
                    <a href="pc" className="pc-a">
                    Home
                    </a>
            </li>
                </ul>
            </nav>
            <div className="inquiry-container">
                <h2>Inquiries Inbox</h2>
                {loading ? (
                    <p>Loading inquiries...</p>
                ) : (
                    <ul>
                        {inquiries.map((inquiry, index) => (
                            <li key={index} className="inquiry-item">
                                <strong>Name: {inquiry.firstName} {inquiry.lastName}</strong>
                                <p>Email: {inquiry.email}</p>
                                <p>Phone: {inquiry.phone}</p>
                                <p>Message: {inquiry[" message"]}</p>
                                {!inquiry.read ? (
                                    <button onClick={() => markAsRead(index)} className="mark-as-read-button">
                                        Mark as Read
                                    </button>
                                ) : (
                                    <span className="read-status">Read</span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <footer className="pc-footer">
                <p>&copy; 2023 Program Coordinator Website</p>
            </footer>
        </div>
    );
}

export default InquiryInbox;
