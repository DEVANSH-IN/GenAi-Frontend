import './tools_.css'
function tools(){
  return(
    <div className='tools_panel'>
        <div>
            <img src="../../assets/Wrench icon 1.svg" alt="" />
        </div>
        
        <div className='tools_name'>
            <label htmlFor="tools">Tools</label>
            <select id ="tools">
                <option value=""></option>
                 <option value="">Wikisearch</option>
                 <option value="">Gmail</option>
                 <option value="">GitHub</option>
                 <option value="">DuckDuckSearch</option>
            </select>
        </div>
    </div>
  )
}
export default tools