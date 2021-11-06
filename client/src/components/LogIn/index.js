import React from 'react'

const LogIn = () => {
    return (
        <div>
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Log In</h5>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-check">

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
        
        <div className='card'>
            <div className='card-body'>
            <h5 className='card-title'>Sign Up</h5>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-check">

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>      
        
        
        </div>
    )
}

export default LogIn
