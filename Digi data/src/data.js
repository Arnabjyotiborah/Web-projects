import { cleanup } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import "./css/data.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListIcon from '@mui/icons-material/List';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import InfoIcon from '@mui/icons-material/Info';
import { db } from './firebase';
import { InfoOutlined } from '@mui/icons-material';
function Data() {
  const [files,setfiles] =useState([]);

  useEffect(() => {
    db.collection("myfiles").onSnapshot(snapshot =>{
      setfiles(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })

  }, [])

  function formatBytes(bytes, decimals =2){
    if(bytes === 0) return '0 Bytes' ;
    const k =1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes','KB','MB','GB','TB','PB','EB','ZB','YB'];
    const i = Math.floor(Math.log(bytes)/Math.log(k));

    return parseFloat((bytes/Math.pow(k,i)).toFixed(dm)) + ' ' + sizes[i];
  }

  
  return (
    
    
    <div className='data'>
  
        <div className='data_header'>
          
            <div className='data_headerLeft'>
              <p>My Data</p>
              <ArrowDownwardIcon/>
             
            </div> 

            <div className='data_headerRight'>
              <ListIcon/>
              <InfoIcon/>
                
            
            </div>
          
        </div>

        <div className='data_content'>
          <div className='data_grid'>
            {
              files.map((file)=>{
                return<div className='data_file'>
                <InsertDriveFileIcon/>

                <p>{file.data.filename}</p>

              </div>
              })
            }

            
            

          </div>

          <div className='data_list'>
            <div className='detailsRow'>
              <p><b>Name</b><ArrowDownwardIcon/></p>
              <p><b>Owner</b></p>
              
              <p><b>Last Modified</b></p>
            
              <p><b>File size</b></p>
              


            </div>
            {
              files.map((file)=>{
                return <div className='detailsRow'>
                      <p>
                        <a href={file.data.fileURL}target ="_blank">
                        <InsertDriveFileIcon/>{file.data.filename}
                        </a>
                      </p>
                      <p>Me</p>
                      <p>{new Date(file.data.timestamp ?.seconds*1000).toUTCString()}</p>
                      <p>{formatBytes(file.data.size)}</p>
                    </div>
            
              })    
            }
          </div>

        </div>
    </div>
  )
}

export default Data