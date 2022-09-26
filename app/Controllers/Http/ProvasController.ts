// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProvasController {
  ex1({ request }) {
    const dados = request.body();

    let resultado = {};
    let reajuste = 0;

    if (dados.tipoPessoa == "PF" && dados.cpf == null) {
      return (resultado = {
        tipo: "error",
        mensagem: "CPF não informado",
        dados: {
          tipoPessoa: dados.tipoPessoa,
          cpf: "<não informado>",
        },
      });
    } else if (dados.tipoPessoa == "PJ" && dados.cnpj == null) {
      return (resultado = {
        tipo: "error",
        mensagem: "CNPJ não informado",
        dados: {
          tipoPessoa: dados.tipoPessoa,
          cnpj: "<não informado>",
        },
      });
    } else if (dados.tipoPessoa == "PJ" && dados.sexo != null) {
      return (resultado = {
        tipo: "error",
        mensagem: "O campo sexo só é permitido para Pessoa Física",
        dados: {
          tipoPessoa: dados.tipoPessoa,
          sexo: dados.sexo,
        },
      });
    } else if (dados.tipoPessoa == "PJ" && dados.cargo != null) {
      return (resultado = {
        tipo: "error",
        mensagem: "O campo cargo só é permitido para Pessoa Física",
        dados: {
          tipoPessoa: dados.tipoPessoa,
          cargo: dados.cargo,
        },
      });
    } else if (dados.cpf != null && dados.cnpj != null) {
      return (resultado = {
        tipo: "error",
        mensagem:
          "Favor informar somente uma opção, CPF ou CNPJ, de acordo com o Tipo de Pessoa",
        dados: {
          tipoPessoa: dados.tipoPessoa,
          cpnj: dados.cnpj,
          cpf: dados.cpf,
        },
      });
    } else {
      if (dados.tipoPessoa == "PF") {
        if (dados.sexo == "M") {
          if (dados.cargo == "Estagiário") {
            reajuste = 100;
          } else if (dados.cargo == "Técnico") {
            reajuste = 60;
          } else if (dados.cargo == "Gerente") {
            reajuste = 30;
          } else if (dados.cargo == "Diretor") {
            reajuste = 20;
          } else if (dados.cargo == "Presidente") {
            reajuste = 10;
          }
        } else {
          if (dados.cargo == "Estagiário") {
            reajuste = 100;
          } else if (dados.cargo == "Técnico") {
            reajuste = 70;
          } else if (dados.cargo == "Gerente") {
            reajuste = 40;
          } else if (dados.cargo == "Diretor") {
            reajuste = 30;
          } else if (dados.cargo == "Presidente") {
            reajuste = 20;
          }
        }
      } else {
        reajuste = 25;
      }
      return (resultado = {
        nome: dados.nome,
        salarioOriginal: dados.salario,
        salarioReajustado: `${dados.salario * (1 + reajuste / 100)}`,
      });
    }
  }
}
