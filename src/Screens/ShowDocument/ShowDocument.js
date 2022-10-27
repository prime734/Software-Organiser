import { React,useEffect, useContext, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { storage } from '../../firebase';
import { ref,listAll, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import './ShowDocument.css'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner"
import { db } from "../../firebase";
import {collection,  getDocs,  setDoc,  doc,  deleteDoc,} from "firebase/firestore";


function ShowDocument() {
    const { state } = useLocation();
    const {file} = state;      //state from previous page
    const {project} = state;  
    const fileRef = ref(storage, "files/");
    const [Url, setUrl] = useState('');            // url for file which is about to be displayed
    const [isLoading, setIsLoading] = useState(true); 
    let navigate = useNavigate();
  useEffect(() => {
    /* download all the files url from storage*/
    listAll(fileRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          if(url.includes(file.file)){setUrl(url);}  
        });

      });
        setIsLoading(false); 
    });

  }, []);
  /* a function which delete a specified document*/
  function onDeleteDoc(){
    const doc = project.Documents.filter(object => {
      return object.filename !== file.filename;
    })
    /* update documents into database */
    updatedocs(doc);  
  }
  const updatedocs = async (newarr) => {
    //handles updating Documents array into the database
    await setDoc(
      doc(db, "Projects", project.id),
      {
        Documents: newarr,
      },
      { merge: true }
    );
    alert("Document Deleted");
    goBack();
  };
  /* change path to landing to unable changes to reflect*/
    const goBack = () => {
        let path = '/landing';
        navigate(path);
    };
    return (
        <div>
          <div>
            <Header />
          </div>
          <div >
            <div className='filename'>{file.filename}</div>
            {isLoading && <div> <LoadingSpinner /> </div>}
            {!isLoading &&
            <div>
              <object width="100%" height="700px" data={Url} type="application/pdf" >   </object>
            </div>} 
        </div>
        <button className='delete-doc-btn' onClick={() => onDeleteDoc()}>Delete Document</button>
          <div>
            <Footer />
          </div> 
        </div>
    )
}
export default ShowDocument