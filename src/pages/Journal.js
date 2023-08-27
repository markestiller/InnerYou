/* eslint-disable */

// My Starter JavaScript Template

// Journal Entry Form

// import "../Journal.css";
import React, { useState } from 'react';

function Journal() {
<<<<<<< HEAD
=======
    // Define state to store journal entries
>>>>>>> f8e035d (journal work)
    const [entries, setEntries] = useState([]);
    const [entryTitle, setEntryTitle] = useState('');
    const [entryText, setEntryText] = useState('');

<<<<<<< HEAD
    const addEntry = (e) => {
        e.preventDefault();

        const newEntry = {
            title: entryTitle,
            text: entryText,
            date: new Date().toLocaleDateString(),
        };

        setEntries([...entries, newEntry]);
        setEntryTitle('');
        setEntryText('');
    };

    return (
        <div>
            <header>
                <h1 className="title">My Personal Journal</h1>
            </header>

            <section className="section journal-section">
                <div className="container">
                    <div className="container-row container-row-journal">
                        <div className="container-item container-item-journal">
                            <form id="entryForm" onSubmit={addEntry}>
                                <label htmlFor="entry-title" className="journal-label">
                                    Entry Title
                                </label>
                                <input
                                    type="text"
                                    name="entry-title"
                                    id="entry-title"
                                    className="entry-text-title"
                                    placeholder="Name of entry ✏️"
                                    value={entryTitle}
                                    onChange={(e) => setEntryTitle(e.target.value)}
                                />
                                <label htmlFor="entry" className="journal-label">
                                    Today's Entry
                                </label>
                                <textarea
                                    name="daily-entry"
                                    id="entry"
                                    className="entry-text-box"
                                    placeholder="What's on your mind today? 💭"
                                    value={entryText}
                                    onChange={(e) => setEntryText(e.target.value)}
                                ></textarea>
                                <button className="btn-main entry-submit-btn" type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section sectionEntryResults" id="entryResultsSection">
                <div className="container">
                    <div className="container-row entryResultRow">
                        {entries.map((entry, index) => (

                            <div key={index} className="entry-container">
                                <div className="single-entry-div">
                                    <div className="entry-info">
                                        <h3 className="single-entry-heading">{entry.title}</h3>
                                        <p className="single-entry-date">Date Added: {entry.date}</p>
                                    </div>
                                    <p className="single-entry-text">{entry.text}</p>
                                </div>
                            </div>
                        ))}
=======
    // Function to add an entry
    const addEntry = (e) => {
        e.preventDefault();
>>>>>>> f8e035d (journal work)

        // Create a new entry object
        const newEntry = {
            title: entryTitle,
            text: entryText,
            date: new Date().toLocaleDateString(),
        };

<<<<<<< HEAD
                    </div>
                </div>
            </section>
=======
        // Update the entries state
        setEntries([...entries, newEntry]);

        // Clear the input fields
        setEntryTitle('');
        setEntryText('');
    };

    return (
        <div>
            <h2 className="heading-results">Journal Entries</h2>

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
>>>>>>> f8e035d (journal work)
        </div>
    );
}

<<<<<<< HEAD
export default Journal;
=======
export default Journal;
>>>>>>> f8e035d (journal work)
