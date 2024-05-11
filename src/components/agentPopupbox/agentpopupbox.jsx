import './agentpopupbox_.css'
import Agents from "../agents/agents"
function agentpopupbox(){
return(
    <div className='superparent'>
        <div className='agent_parent'>
              <img src="../../assets/Luc (3) 1.jpg" alt="" />
              <p>Agents</p>
        </div>
        <div className="same">
            <label htmlFor="name">Agent Name</label>
            <input type="text" id="name"/>
        </div>
        <div className="same">
            <label htmlFor="role">Role</label>
            <input type="text" id="role" />
        </div>
        <div className="same">
            <label htmlFor="goal">Goal</label>
            <input type="text" id="goal"/>
        </div>
        <div className="same">
            <label htmlFor="Backstory">Backstory</label>
            <input type="text" id="Backstory"/>
        </div>
        <div className="same">
            <label htmlFor="Capability">Capability</label>
            <input type="text" id="Capability"/>
        </div>
        <div className="same">
            <label htmlFor="Tasks">Tasks</label>
            <input type="text" />
        </div>
        <div className="same">
            <label htmlFor="output consumer Agent">output consumer Agent</label>
            <input type="text" />
        </div>
        <div className="same">
            <label htmlFor="Tool List">Tool List</label>
            <input type="text" />
        </div>
    </div>
)
}
export default agentpopupbox;