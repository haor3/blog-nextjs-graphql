import { useEffect, useState } from 'react';
import { Container } from './styles/SecondNavBar';

export default function SecondNavBar(props) {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const handleScrollY = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollY);
  }, [scrollY]);

  return (
    <Container scrollY={scrollY} mode={props.mode}>
      <div>
        <a>Primary Care</a>
        <a>Hair</a>
        <a>Sex</a>
        <a>Skin</a>
        <a>Mental Health</a>
        <a>COVID-19</a>
        <a>Supplements</a>
      </div>
    </Container>
  );
}
