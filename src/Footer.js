import { Footers } from './styled'
import { Titulo3, Titulo4 } from './styled'

const anoAtual = new Date().toLocaleDateString('pt-BR', {
  year: 'numeric'
});

function Footer(props) {
  return (
    <Footers>
      <Titulo3>Desenvolvido por Othon A. S. Fontenele</Titulo3>
      <Titulo4>{anoAtual}</Titulo4>
    </Footers>)
};

export default Footer;
