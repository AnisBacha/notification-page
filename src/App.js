import { useState } from 'react';
import Header from './Header'
import Notifications from './Notifications'
function App() {
  const [notifications, setNotifications] = useState([])
  return (
    <div className="App">
        <Header 
          notifications={notifications} 
          setNotifications={setNotifications} 
        />
        <Notifications notifications={notifications} setNotifications={setNotifications}/>
    </div>
  );
}

export default App;
