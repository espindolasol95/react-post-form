{/*importazioni*/}
import React from 'react';
import axios from 'axios';
 

const PostForm =()=>{
    return(
        
        <div className="container">
            <h1 className='mb-4'>Crea un nuovo Post</h1>
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
      </form> 
     </div> 
   
    );
};
export default PostForm;

