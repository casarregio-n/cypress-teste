import * as yup from 'yup';

async function validaDadosFormulario(user) {
  const schemaLogin = yup.object().shape({
    email: yup
      .string()
      .email('O email digitado é inválido')
      .required('O campo email é obrigatório'),
    senha: yup.string().required('O campo de senha é obrigatório'),
  });

  const schemaCadastro = yup.object().shape({
    nome: yup.string().required('O campo de nome é obrigatório'),
    email: yup
      .string()
      .email('O email digitado é inválido')
      .required('O campo email é obrigatório'),
    senha: yup.string().required('O campo de senha é obrigatório'),
  });

  try {
    // Determina qual schema usar com base na presença do nome
    if (user.nome) {
      await schemaCadastro.validate(user);
    } else {
      await schemaLogin.validate(user);
    }

    return { valid: true, path: '', message: 'Validação foi um sucesso!' };
  } catch (erro) {
    // Retorna uma mensagem de erro
    return { valid: false, path: erro.path || '', message: erro.errors.join(', ') };
  }
}

export { validaDadosFormulario };

