// contato.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Substitua pelas suas credenciais do Supabase
const supabaseUrl = "https://site-web.supabase.co"   // Project URL
const supabaseKey = "sb_publishable_0QtYe3535fpI70jONxLQDQ_y6RXNbGP"               // Publishable key (anon)
const supabase = createClient(supabaseUrl, supabaseKey)

// Seleciona o formulário
const form = document.getElementById('form-contato')

// Adiciona evento de envio
form.addEventListener('submit', async (e) => {
  e.preventDefault()

  // Captura os valores dos campos
  const nome = form.nome.value
  const email = form.email.value
  const mensagem = form.mensagem.value

  // Insere no banco de dados
  const { error } = await supabase
    .from('contatos')
    .insert([
      { nome, email, mensagem }
    ])

  // Feedback para o usuário
  if (error) {
    alert("Erro ao enviar: " + error.message)
  } else {
    alert("Mensagem enviada com sucesso!")
    form.reset()
  }
})