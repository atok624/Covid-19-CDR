import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './features/Navigation/navigation';

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="App">
      {location.pathname !== '/' && <Navigation />}
      <Outlet />
    </div>
  );
}

export default App;
