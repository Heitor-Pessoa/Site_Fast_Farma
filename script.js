function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
}

function startChat(medico) {
  const chatContent = document.getElementById('chatContent');
  chatContent.innerHTML = `<p><strong>${medico}</strong> está pronto para te atender. Faça sua pergunta!</p>`;
  document.getElementById('chat').style.display = 'block';
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const chatContent = document.getElementById('chatContent');
  const message = input.value;
  chatContent.innerHTML += `<p>Você: ${message}</p>`;
  input.value = '';
}

function showMedicineInfo(medicine) {
  const medicineDetails = document.getElementById('medicineDetails');
  switch (medicine) {
      case 'med1':
          medicineDetails.innerHTML = '<strong>Paracetamol</strong><br>Preço: R$ 10,00<br>Dosagem: 500mg<br>Riscos: Dano hepático se tomado em grandes quantidades.';
          break;
      case 'med2':
          medicineDetails.innerHTML = '<strong>Ibuprofeno</strong><br>Preço: R$ 15,00<br>Dosagem: 200mg<br>Riscos: Problemas gastrointestinais e cardíacos.';
          break;
      case 'med3':
          medicineDetails.innerHTML = '<strong>Dipirona</strong><br>Preço: R$ 8,00<br>Dosagem: 500mg<br>Riscos: Reações alérgicas graves.';
          break;
      case 'med4':
          medicineDetails.innerHTML = '<strong>Amoxicilina</strong><br>Preço: R$ 20,00<br>Dosagem: 500mg<br>Riscos: Reações alérgicas e diarreia.';
          break;
      case 'med5':
          medicineDetails.innerHTML = '<strong>Omeprazol</strong><br>Preço: R$ 18,00<br>Dosagem: 20mg<br>Riscos: Dores de cabeça e náusea.';
          break;
  }
}

function showTab(tabId) {
  // Esconde todas as abas
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Mostra a aba selecionada
  const activeTab = document.getElementById(tabId);
  activeTab.classList.add('active');

  // Atualiza os botões para marcar qual está ativo
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  // Adiciona a classe 'active' ao botão que corresponde à aba
  const activeButton = Array.from(buttons).find(button => button.innerText.toLowerCase() === tabId.toLowerCase());
  activeButton.classList.add('active');
}

// Função para abrir o modal e mostrar informações do médico
function startChat(medico) {
  var modal = document.getElementById("medicoModal");
  var nome = document.getElementById("medicoNome");
  var especialidade = document.getElementById("medicoEspecialidade");
  var descricao = document.getElementById("medicoDescricao");

  // Aqui você pode personalizar as informações do médico
  if (medico === 'Dr. João Silva') {
      nome.textContent = "Dr. João Silva";
      especialidade.textContent = "Cardiologista";
      descricao.textContent = "Especialista em doenças do coração e sistema circulatório.";
  } else if (medico === 'Dra. Maria Souza') {
      nome.textContent = "Dra. Maria Souza";
      especialidade.textContent = "Cardiologista";
      descricao.textContent = "Especialista em doenças do coração e sistema circulatório.";
  }
  // Adicione mais condições para os outros médicos

  modal.style.display = "block"; // Mostra o modal
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById("medicoModal");
  modal.style.display = "none"; // Fecha o modal
}

// Função para abrir o modal e mostrar informações do médico
function startChat(medico) {
  var modal = document.getElementById("medicoModal");
  var nome = document.getElementById("medicoNome");
  var especialidade = document.getElementById("medicoEspecialidade");
  var idade = document.getElementById("medicoIdade");
  var telefone = document.getElementById("medicoTelefone");
  var email = document.getElementById("medicoEmail");
  var sexo = document.getElementById("medicoSexo");
  var avaliacao = document.getElementById("medicoAvaliacao");
  var dias = document.getElementById("medicoDias");
  var horario = document.getElementById("medicoHorario");

  // Aqui você pode personalizar as informações do médico
  if (medico === 'Dr. João Silva') {
      nome.textContent = "Dr. João Silva";
      especialidade.textContent = "Cardiologista";
      idade.textContent = "45 anos";
      telefone.textContent = "(11) 98765-4321";
      email.textContent = "dr.joao@exemplo.com";
      sexo.textContent = "Masculino";
      avaliacao.textContent = "Bom";
      dias.textContent = "Segunda a Sexta";
      horario.textContent = "08:00 - 18:00";
  } else if (medico === 'Dra. Maria Souza') {
      nome.textContent = "Dra. Maria Souza";
      especialidade.textContent = "Cardiologista";
      idade.textContent = "38 anos";
      telefone.textContent = "(11) 99876-5432";
      email.textContent = "dra.maria@exemplo.com";
      sexo.textContent = "Feminino";
      avaliacao.textContent = "Regular";
      dias.textContent = "Terça, Quinta e Sexta";
      horario.textContent = "09:00 - 16:00";
  } else if (medico === 'Dr. Carlos Lima') {
      nome.textContent = "Dr. Carlos Lima";
      especialidade.textContent = "Pediatra";
      idade.textContent = "50 anos";
      telefone.textContent = "(11) 99988-7766";
      email.textContent = "dr.carlos@exemplo.com";
      sexo.textContent = "Masculino";
      avaliacao.textContent = "Bom";
      dias.textContent = "Segunda a Quarta";
      horario.textContent = "08:30 - 17:30";
  }
  // Adicione mais condições para os outros médicos

  modal.style.display = "block"; // Mostra o modal
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById("medicoModal");
  modal.style.display = "none"; // Fecha o modal
}