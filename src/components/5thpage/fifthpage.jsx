import './5th_page.css'
import Genai from '../genai/genai'
import Agents from '../agents/agents.jsx'
import Tools from '../Tools/tools.jsx'
import LLMs from '../LLMs/LLMs.jsx'
import Interface from '../interface/buildUP.jsx'
function fifth(){
 return (
    <div className='parentOfAll'>
        <Genai />
        <div className='parentOf2'>
           <div className='selection_pane'>
                <Agents />
                <Tools />
                <LLMs />
           </div>
           <Interface />
        </div>
        
    </div>
 )
}
export default fifth;