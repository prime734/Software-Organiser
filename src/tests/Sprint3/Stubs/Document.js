import { React, useContext, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import { v4 } from "uuid";


const addDocument = (documents, newDocument) => {
    if (newDocument.name !== ""){
        if (newDocument.description === ""){
            return "No description provided"
        }
        if (newDocument.poster === ""){
            return "No poster provided"
        }
        documents.push(newDocument);
        return documents
    }
    else {
        return "No new document was added to the documents"
    }
};

function Document() {
    const [fileDescription, setFileDescription] = useState('No description provided ');
    const [filename, setfilename] = useState('');
    const [file, setfile] = useState(null);


    return (
        <div>
            <div class="body">
                <h3>Add A Document</h3>
                <div className="indiv">
                    <textarea className='input-description' type="text" placeholder="Description of the document" onChange={(event) => { setFileDescription(event.target.value) }} />
                    <div>
                        <input type="file" name="file" onChange={(event) => setfile(event.target.value)} />
                        <button className="add-doc-btn" onClick={handleUpload} >Add Document</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

module.exports = [addDocument]