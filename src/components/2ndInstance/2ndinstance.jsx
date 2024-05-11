import './design.css'
function secondInstance(){
   return (
          <div className='parentofSecondInstance'>
              <div className='headOfpopup'>
                <h4 className='headingOfpopup'>Create New Stack</h4>
                <button style={{backgroundColor:'white',marginRight:'10px'}}>X</button>
              </div>

              <p className='name1'>Name :</p>
              <input className="name2" type="text" maxLength={30}/>

              <p className='desc1'>Description:</p>
              <input className='desc2' type="text" maxLength={200} autoFocus/>

              <div className='forButtons'>
                  <button id="one" >Cancel</button>
                  <button id ="two" >Create</button>
              </div>
          </div>
   )
}
export default secondInstance