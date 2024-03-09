// import formbricks from "@formbricks/js";

// if (typeof window !== "undefined") {
//   formbricks.init({
//     environmentId: "cls9kb3lj000ayvb3kh6p06bl",
//     apiHost: "https://form.ketzim.com",
//     debug: true, // remove when in production 
//   });
// }

import React from 'react';
import formbricks from '@formbricks/js';

class FormbricksComponent extends React.Component {
  componentDidMount() {
    // Este código será executado apenas no lado do cliente após o componente ser montado
    formbricks.init({
      environmentId: 'cls9kb3lj000ayvb3kh6p06bl',
      apiHost: 'https://form.ketzim.com',
      debug: true, // remova quando em produção
    });
  }

  render() {
    // Renderize aqui o que você precisa, por exemplo, um contêiner para o formulário
    // Se o Formbricks injeta o formulário em algum elemento específico, você deve incluí-lo aqui.
    // Por exemplo, se ele espera um elemento com um id específico, você pode fazer:
    return <div id="formbricks-form"></div>; // Certifique-se de que o ID corresponde ao que o Formbricks espera
  }
}

export default FormbricksComponent;
