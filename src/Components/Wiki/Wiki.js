import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Wiki.css';
import AdderDocument from '../AdderDocument/AdderDocument';
import AdderWiki from '../AdderWiki/AdderWiki';

function Wiki(props) {
  const [documents, setDocuments] = useState([]);     //array to store documents
  let navigate = useNavigate();

  useEffect(() => {
    props.project.Documents.map((docu) => {
      setDocuments(documents => [...documents, docu]);    //populates local array of documents
    })
  }, [])

  const showDocument = (file) => {    //function to be called when the file needs to be shown
    let path = '/showdocument';
    navigate(path, {
      state: {
        file: file,
        project : props.project
      },
    });
  }

  return (
    <div>
        <div className="wiki-div">
          <h6 className="title-h">Project Description</h6>
          <p className="projdesc">{props.project.ProjectDesc}</p>

          <h6 className="title-h">Project Wiki</h6>
          <p className="projdesc">{props.project.ProjectWiki}</p>
        </div>
        <div className="docu-div">
          <h6 className="title-hd">Documents</h6>
          {documents.length === 0 ? <h6>No documents</h6> :
           documents.map((doc, index) => {
            return (
              <div key={index} className="doc-div" onClick={() => showDocument(doc)}>
                <p className="doc-name">{doc.filename}</p>
              </div>
            )
           })
          }

        </div>
        <AdderWiki project = {props.project} />
        <AdderDocument project={props.project} />
    </div>
  )
}

export default Wiki
