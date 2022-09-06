import React, { useState } from "react"
import"./css/sidebar.css"
import firebase from "firebase"
import {storage} from './firebase'
import {db} from './firebase'
import DeleteIcon from '@mui/icons-material/Delete';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import { Modal } from "@mui/material";

function Sidebar(){
    const [open, setOpen]=useState(false);
    const [uploading, setUploading] = useState(false);
    const [file, setfile] = useState(false);
    const handleClose=()=>{
        setOpen(false);
    }

    const handleOpen=()=>{
        setOpen(true); 
    }
    const handleChange=(e)=>{
        if(e.target.files[0])
        {
            setfile(e.target.files[0])

        }

    }
    const handleUpload=(event)=>{
        event.preventDefault();
        setUploading(true);

        storage.ref(`files/${file.name}`).put(file).then(snapshot=>{
            storage.ref("files").child(file.name).getDownloadURL().then(url=>{
                db.collection("myfiles").add({
                    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                    filename:file.name,
                    fileURL :url,
                    size:snapshot._delegate.bytesTransferred,
                })

                setUploading(false);
                setfile(null);
                setOpen(false);
            })
                console.log(snapshot)
                
        })
    

        
             
    
    }

    return(
        <>
        <Modal open={open} onClose={handleClose}>
            <div className="modal_pop">
                <form>
                    <div className="modalHeading">
                        <h3>select file you want to upload</h3>
                    </div>

                    <div className="modalBody">
                        {
                            uploading ?(<p className="uploading">Uploading</p>) : (
                                <>

                                <input type ="file" onChange={handleChange}/>
                                <input type ="submit" className="post_submit" onClick={handleUpload}/>
                               </>

                            )
                        }
                        

                    </div>
                </form>
                </div>
        </Modal>
        <div className="sidebar">
            <div className="sidebar_btn">
                <button onClick={handleOpen}>
                    <span>Upload</span>

                </button>
            </div>
            <div className="sidebar_options">
                <div className="sidebar_option ">
                    <MobileScreenShareIcon/>
                    <span>My Drive</span>
         

                </div>
                <div className="Trash">
                    <DeleteIcon/>
                    <span>Trash</span>
                </div>
                
            </div>
            <hr></hr>
            <div className="progress_bar">
                <CloudCircleIcon/>
                <span>1 GB of 30 GB</span>
                
                    

                </div>
            <div className="bar">
            <progress size="tiny" value></progress>
                </div>    
        </div>
        </>
        
    )
}

export default Sidebar