# Avaliação 1

## Orientações gerais:

- Criar um projeto novo (pode ter qualquer nome).
- Ao final da prova, compactar a pasta do projeto inteira, sem a pasta "node_modules"
e enviar no classroom.
- O(s) controller(s) podem ter o(s) nome(s) que quiserem
- A(s) rotas(s) podem ter o(s) nome(s) que quiserem

## Questões

1. Fazer uma requisição POST que envie as seguintes informações: tipoPessoa, cpf, cnpj,
nome, sexo, cargo e salario. Ao final, deverá ser calculado o novo salário do
funcionário, conforme itens abaixo:    
1.1 - Validações:
a) (0,5 pontos) - Se no tipoPessoa foi informado "PF" e NÃO foi informado o CPF,
apresentar a mensagem: "CPF não informado".
b) (0,5 pontos) - Se no tipoPessoa foi informado "PJ" e NÃO foi informado o CNPJ,
apresentar a mensagem: "CNPJ não informado".
c) (0,5 pontos) - Se no tipoPessoa foi informado "PJ" e foi informado o sexo,
apresentar a mensagem: "O campo sexo só é permitido para Pessoa Física".
d) (0,5 pontos) - Se no tipoPessoa foi informado "PJ" e foi informado o cargo,
apresentar a mensagem: "O campo cargo só é permitido para Pessoa Física".
e) (0,5 pontos) - Se foram informados os campos cpf e cnpj ao mesmo tempo,
apresentar a mensagem: "Favor informar somente uma opção, CPF ou CNPJ, de
acordo com o Tipo de Pessoa".    
1.2 Cálculos:
a) (3,5 pontos) - Retornar um JSON com o nome, salário original e salário
reajustado. Para tanto, deve-se aplicar o percentual de ajuste para as Pessoas
Físicas, conforme tabelas abaixo. OBS: para as Pessoas Jurídicas, o percentual de
ajuste será 25%.

Tabela para funcionários homens:
Cargo Reajuste (%)
Estagiário 100
Técnico 60
Gerente 30
Diretor 20
Presidente 10

Tabela para funcionárias mulheres:
Cargo Reajuste (%)
Estagiário 100
Técnico 70
Gerente 40
Diretor 30
Presidente 20

1.3 Mensagem de Erro (1 ponto extra): As mensagens de erro do item 1.1 deverão ser
apresentadas da seguinte forma:
• JSON com 3 atributos: tipo, mensagem e dados
o O tipo deverá ser sempre “error“
o A mensagem deverá ser a mensagem informada no item
correspondente
o O atributo “dados” deverá conter um objeto com os campos
envolvidos com seus respectivos valores. Por exemplo, se cair na
validação da letra “c”:
{
“tipo”: “error”,
“codigo”: “DADOS_INCONSISTENTES”,
“dados”: {
“tipoPessoa”: “PF”,
“sexo”: “M”
}
}

2. (2 pontos) - Escolher uma tabela (pode escolher qualquer tema, exceto os já
trabalhados em aula) e fazer o migration com os campos que preferir, desde que
contenham no mínimo:
• 2 campos de texto
• 1 campo numérico
• 1 data

3. (2 pontos) - Fazer um seed da tabela escolhida com, ao menos, 5 registros.
