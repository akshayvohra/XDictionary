import { useState } from "react";

export default function XDictionary() {
    // Dictionary state
    const dictionary = [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ];

    // State to hold user input and search result
    const [searchTerm, setSearchTerm] = useState("");
    const [definition, setDefinition] = useState("");

    // Function to handle the search
    const handleSearch = () => {
        // Normalize input (case-insensitive search)
        const term = searchTerm.trim().toLowerCase();
        const foundWord = dictionary.find(item => item.word.toLowerCase() === term);

        // Update definition based on search result
        if (foundWord) {
            setDefinition(foundWord.meaning);
        } else {
            setDefinition("Word not found in the dictionary.");
        }
    };

    return (
        <div className="container">
            <h1>XDictionary</h1>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Enter a word..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {definition && (
                <div className="result">
                    <h3>Definition:</h3>
                    <p>{definition}</p>
                </div>
            )}
        </div>
    );
}
