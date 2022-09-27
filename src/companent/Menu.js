/* eslint-disable array-callback-return */
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import '../css/Menu.css'
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
 function Menu() { 
    const baseUrl="https://localhost:44363/api/contents"
    const[data, setData]=useState([]);
    const [modelInsert, setmodelInsert]=useState(true);
    const [modelEdit, setmodelEdit]=useState(false);
    const [modelDelete, setmodelDelete]=useState(false);
    const[managerSelected, setmanagerSelected]=useState({
      id:'',
      contents:''
    })
    const handleChange=e=>{
      const {name, value}=e.target;
      setmanagerSelected({
        ...managerSelected,
        [name]:value
      })
      console.log(managerSelected);

    }
    
    const openclosemodelEdit=()=>{
      setmodelEdit(!modelEdit);
      
    }
    const openClosemodelDelete=()=>{
      setmodelDelete(!modelDelete);
      
    }
    const openClosemodelInsert=()=>{
      setmodelInsert(!modelInsert);  
      }
    const requestGet=async()=>{
      await axios.get(baseUrl)
      .then(response=>{
        setData(response.data);
        }).catch(error=>{
          console.log(error);
        })
    }

    const requestPost=async()=>{
      delete managerSelected.id      
      await axios.post(baseUrl,managerSelected)
      .then(response=>{
        setData(data.concat(response.data));
        openClosemodelInsert();
        }).catch(error=>{
          console.log(error);
        })
    }
    

    const requestPut=async()=>{
      await axios.put(baseUrl+"/"+managerSelected.id, managerSelected)
      .then(response=>{
        var respuesta=response.data;
        var dataAssistant=data;
        dataAssistant.map(function (gestor) {
            if (gestor.id === managerSelected.id) {
              gestor.contents = respuesta.contents;
              window.location.reload(true);
            };
          });
        openclosemodelEdit();
        }).catch(error=>{
          console.log(error);
        })
    }
    const requestDelete=async()=>{
      await axios.delete(baseUrl+"/"+managerSelected.id)
      .then(response=>{
       setData(data.filter(gestor=>gestor.id!==response.data));
       window.location.reload(true);    
        openClosemodelDelete();
        }).catch(error=>{
          console.log(error);
        })
    }

    const selectManager=(gestor, caso)=>{
      setmanagerSelected(gestor);
      (caso==="Edit")?
      openclosemodelEdit(): openClosemodelDelete();
    }


    useEffect(()=>{
      requestGet();
    },[baseUrl])



  return (
    <div>
      <section class="vh-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card rounded-3">
          <div class="card-body p-4">

            <h4 class="text-center my-3 pb-3">To Do App</h4>

            <form class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
            <div class="col-12">
                <button type="submit" class="btn btn-primary" onClick={()=>openClosemodelInsert()}>New</button>
              </div> 
           
            </form>
            
            
            <table class="table mb-4">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">contents item</th>                  
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>

               {data.map(gestor=>(
                 <tr key={gestor.id}>
                 <th scope="row">{gestor.id}</th>
                 <td>{gestor.contents}</td>                 
                 <td>
                   <button type="submit" class="btn btn-danger" onClick={()=>selectManager(gestor,"Delete")}>Delete</button>
                   <button type="submit" class="btn btn-success ms-1" onClick={()=>selectManager(gestor,"Edit")}>Edit</button>
                 </td>
               </tr>
               ))}
              
                
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal isOpen={modelInsert}>
    <ModalHeader></ModalHeader>
    <ModalBody>
    <div class="col-12">
      <h2>New To do</h2>
                <div class="form-outline">
                  <input name='contents' onChange={handleChange} type="text" id="form1" class="form-control" />
                  <label class="form-label" for="form1">Enter a task here</label>
                </div>
              </div>
              

    </ModalBody>
    <ModalFooter>
              <div class="col-12">
                <button type="submit" class="btn btn-success" onClick={()=>requestPost()}>Save</button>{"    "}
                <button type="submit" class="btn btn-danger" onClick={()=>openClosemodelInsert()}>Cancel</button>
              </div>    
    </ModalFooter>
  </Modal>

  <Modal isOpen={modelEdit}>
    <ModalHeader></ModalHeader>
    <ModalBody>
    <div class="col-12">
                <div class="form-outline">
                  <input name='contents' onChange={handleChange} type="text" id="form1" class="form-control" value={managerSelected && managerSelected.contents}/>
                  
                </div>
              </div>     
    </ModalBody>
    <ModalFooter>
              <div class="col-12">
                <button type="submit" class="btn btn-success" onClick={()=>(requestPut())} >Edit</button>{"    "}
                <button type="submit" class="btn btn-danger" onClick={()=>openclosemodelEdit()}>Cancel</button>
              </div>    
    </ModalFooter>
  </Modal>

  <Modal isOpen={modelDelete}>
    <ModalHeader></ModalHeader>
    <ModalBody>
    Are you sure you want to delete value={managerSelected && managerSelected.contents} ? 
    </ModalBody>
    <ModalFooter>
              <div class="col-12">
                <button type="submit" class="btn btn-success" onClick={()=>(requestDelete())} >Yes</button>{"            "}
                <button type="submit" class="btn btn-danger" onClick={()=>openClosemodelDelete()}>No</button>
              </div>    
    </ModalFooter>
  </Modal>
</section>
    </div>
  )
}

export default Menu;