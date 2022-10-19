import { React,useEffect, useContext, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { storage } from '../../firebase';
import { ref,listAll, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import './ShowDocument.css'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner"
function ShowDocument() {
    const { state } = useLocation();
    const {file} = state;      //state from previous page
    const fileRef = ref(storage, "files/");
    const [Url, setUrl] = useState('');            // url for file which is about to be displayed
    const [isLoading, setIsLoading] = useState(true); 
    
  useEffect(() => {
    //setIsLoading(false)
    listAll(fileRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          if(url.includes(file.file)){setUrl(url);}  
        });

      });
        setIsLoading(false); 
    });

  }, []);

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
          <div>
            <Footer />
          </div> 
        </div>
    )
}
export default ShowDocument