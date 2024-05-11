import './pop.css'
import Newstack from '../createNewStack/createStack'
function popup(){
    return (
        <div className='popup'>
            <h3 className='createNewStack'>Create New Stack</h3>
            <p className='content'>Start building your generative AI apps with our essential tools and frameworks.</p>
            <Newstack/>
        </div>
    )
}
export default popup