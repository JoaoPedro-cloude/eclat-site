window.SITE = {
  nome: "Eclat",

  whatsapp: {
    numero: "5564993412229", // só dígitos, ex.: 5511999998888
    mensagem: "Olá, Eclat! Vim pelo site e quero conversar sobre um projeto.",
  },

  contato: {
    email: "digitalmedia.eclat@gmail.com",
    // Opcional: chave do Web3Forms (https://web3forms.com). Se vazio, usa FormSubmit.
    web3formsChave: "",
    assunto: "Novo contato pelo site Eclat",
  },

  frames: {
    total: 160, // valor impresso pelo fatiar_frames.sh
    desktop: "assets/frames/desktop/f_{n}.webp",
    mobile: "assets/frames/mobile/f_{n}.webp",
    // Celular: ponto horizontal (0 a 1) que fica no centro da tela em cada momento da rolagem.
    // Começa na câmera com a luz vermelha e termina no monitor com o set iluminado.
    foco: [[0, 0.49], [0.35, 0.48], [0.6, 0.45], [0.85, 0.65], [1, 0.77]],
  },
};
