import { Navbar_div } from './Navbar-file.jsx';
import { Body_top } from './Body-top-sec.jsx';
import { Talent_content } from './Body-talent.jsx';
import { Service_func } from './Body-service.jsx';
import { Body_descryption } from './Body-descryption.jsx';
import { BodyChoice } from './Body-choice.jsx';
import { Bottom_content } from './Body-Bottom.jsx';

function App() {

  return (
    <>
    <Navbar_div/>
    <Body_top/>
    <BodyChoice/>
    <Service_func/>
    <Body_descryption/>
    <Talent_content/>
    <Bottom_content/>
    </>
  )
}

export default App