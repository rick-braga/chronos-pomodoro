import Maintemplate from '../../templates/MainTemplate';
import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';

function Home() {
  return (
    <Maintemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </Maintemplate>
  );
}

export default Home;
