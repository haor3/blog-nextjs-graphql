import { Container } from './styles/ToggleMode';

export default function ToggleMode(props) {
  return (
    <Container>
      <label className="switch">
        <input type="checkbox" onChange={props.onChange} defaultChecked />
        <span className="slider round"></span>
      </label>
    </Container>
  );
}
