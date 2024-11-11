const viaCEP = "https://viacep.com.br/ws/";

export const getCEP = async (cep) => {
  const regexCEP = /^\d{5}-?\d{3}$/;

  if (!regexCEP.test(cep)) {
    throw new Error(
      "CEP inválido. Por favor, insira um CEP no formato 12345-678 ou 12345678."
    );
  }

  try {
    const response = await fetch(`${viaCEP}${cep}/json/`);

    if (!response.ok) {
      throw new Error("Erro ao consultar o CEP");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na consulta de CEP:", error);
    throw error;
  }
};
