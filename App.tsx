import {ContextProvider} from './context/ContextProvider';
import {Home} from './screens/Home';

export default function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}
