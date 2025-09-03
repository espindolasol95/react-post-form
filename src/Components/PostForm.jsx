{/*importazioni*/}
import React from 'react';
import axios from 'axios';
 

const PostForm =()=>{
    return(
        
        <div className="container">
            <h1 className='mb-4 text-center'>Crea un nuovo Post</h1>
           <form>
              {/* Campo Autore */}
             <div className="row mb-3">
               <div className="col">
                <label htmlFor="author" className="form-label">Autore</label>
             <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              placeholder="Inserisci il tuo nome"
             
            />
          </div>
        </div>   
         {/* Campo Titolo */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="title" className="form-label">Titolo</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Inserisci il titolo del post"
              
            />
          </div>
        </div>
        {/* Campo Contenuto */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="body" className="form-label">Contenuto</label>
            <textarea
              className="form-control"
              id="body"
              name="body"
              rows="4"
              placeholder="Scrivi il contenuto del post..."    
            ></textarea>
          </div>
        </div> 
        {/* Checkbox*/}
        <div className="row mb-4">
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="isPublic"
                name="isPublic"
              />
              <label className="form-check-label" htmlFor="isPublic">Rendi il post pubblico
              </label>
            </div>
          </div>
        </div>

        {/* Pulsante di invio */}
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary">Invia</button>
          </div>
        </div>
      </form> 
     </div> 
   
    );
};
export default PostForm;

