import React from 'react';
import '../../css/create-user-form.css';

function CreateUser() {
  return (
    <div className="container ">
      <div className="container-info row">
        <div className="col-2">
          <i>ICONO</i>
        </div>
        <form action="/" className='mb-3 col-10 create-user-form'>
            <div className="form-input d-inline-flex">
              <label style={{ "width": "8rem" }} htmlFor="username">Username:</label>
              <input style={{ "width": "24rem" }} className="form-control" type="text" id='username'/>
            </div>
            <div className="form-input d-inline-flex">
              <label style={{ "width": "8rem" }} htmlFor="password">Password:</label>
              <input style={{ "width": "24rem" }} className="form-control" type="password" id='password'/>
            </div>
            <div class="dropdown col-12 d-inline-flex">
                <div style={{ "width": "8rem" }}>
                  <span> Asign Areas:</span>
                </div>
                <button class="btn btn-secondary dropdown-toggle" style={{ "width": "24rem" }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  -----------------
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                </ul>
            </div>
            <div className="buttons d-flex justify-content-end">
              <button type="submit" className='btn btn-primary m-2 mt-4 mb-4 p-2.5'>Save</button>
              <button className='btn btn-primary m-2 mt-4 mb-4 p-2.5'>Cancel</button>
				    </div>
        </form>
      </div>
    </div>
  )
}

export {CreateUser}