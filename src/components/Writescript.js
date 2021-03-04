import React from 'react'
import './writescript.css'
const Writescript = () => {
    return (
        <div className="container ">
                <h1 className="text-left head">Write a script</h1>
                <form className=""> 
                    <div className="form-row">
                        <div class="form-group w-100 h-25 ">
                            <label for="exampleFormControlTextarea3"></label>
                            <textarea class="form-control" id="exampleFormControlTextarea3" rows="18"  ></textarea>
                        </div>
                        
                        <div class="col text-center mt-5">
                            <button class="btn btn-default  btn-primary w-22">Generate Video</button>
                        </div>
                    </div>
                    
                </form>
            
            
        </div>
    )
}

export default Writescript
