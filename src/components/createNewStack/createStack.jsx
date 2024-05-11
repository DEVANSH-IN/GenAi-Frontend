
import './createStack.css'; // Import your component'

function CreateStack({ play }) { 
  return (
    <div className="New_Stack" onClick={() => play()}>
      <p className="text">+ New Stack</p>
    </div>
  );
}

export default CreateStack;
