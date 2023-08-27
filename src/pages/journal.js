/* eslint-disable */

// My Starter JavaScript Template

// Journal Entry Form

// import "../Journal.css";
import React, { useState } from 'react';

function Journal() {
    // Define state to store journal entries
    const [entries, setEntries] = useState([]);
    const [entryTitle, setEntryTitle] = useState('');
    const [entryText, setEntryText] = useState('');

    // Function to add an entry
    const addEntry = (e) => {
        e.preventDefault();

        // Create a new entry object
        const newEntry = {
            title: entryTitle,
            text: entryText,
            date: new Date().toLocaleDateString(),
        };

        // Update the entries state
        setEntries([...entries, newEntry]);

        // Clear the input fields
        setEntryTitle('');
        setEntryText('');
    };

    return (
        <div>
            <h2 className="heading-results">Journal Your Heart!</h2>

            <form id="entryForm" onSubmit={addEntry}>
                <input
                    type="text"
                    className="entry-text-title"
                    placeholder="Title"
                    value={entryTitle}
                    onChange={(e) => setEntryTitle(e.target.value)}
                />
                <textarea
                    className="entry-text-box"
                    placeholder="Your journal entry..."
                    value={entryText}
                    onChange={(e) => setEntryText(e.target.value)}
                />
                <button type="submit">Add Entry</button>
            </form>

            <div id="entryResultsSection">
                {entries.map((entry, index) => (
                    <div key={index} className="single-entry-div">
                        <h3 className="single-entry-heading">{entry.title}</h3>
                        <p className="single-entry-date">Date Added: {entry.date}</p>
                        <p className="single-entry-text">{entry.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Journal;
