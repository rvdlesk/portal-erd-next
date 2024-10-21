
import { ClockLoader } from 'react-spinners'; 

const LoadingContent = () => {
    return (  
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
        <ClockLoader  size={50} color={"#0B7B30"} /> <br/>
      </div>
    );
}
 
export default LoadingContent;