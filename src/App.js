import { Route, Routes } from 'react-router-dom';
import IconTabs  from './components/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<IconTabs />} />
    </Routes>
    </>
  );
}

export default App;
