import Test from '../components/Test';
import Name from '../components/Name';

import {
  useApplicationStateColor,
  useApplicationStateLanguage,
} from '../ApplicationState';

const Home = () => {
  console.log('render, Home');

  const [language, setLanguage] = useApplicationStateLanguage();
  const [color] = useApplicationStateColor();

  return (
    <div>
      {language} {color}
      <Test />
      <Name />
      <button onClick={() => setLanguage('RANDOM')}>set language</button>
    </div>
  );
};
export default Home;
