import { useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Salect'
import SubmitButton from '../form/SubmitButton'
import styles from './CadastroForm.module.css'

function CadastroForm({btnText}){
  const [form, setForm] = useState({
    nome: '',
    dataNascimento: '',
    nomeResponsavel: '',
    cpf: '',
    telefone: '',
    categoria: ''
  })

  
  const categorias = [
    { value: '', label: 'Selecione...' },
    { value: 'SUB_9', label: 'SUB 9' },
    { value: 'SUB_12', label: 'SUB 12' },
    { value: 'SUB_15', label: 'SUB 15' }
  ]

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await fetch(`${process.env.REACT_APP_API_URL}/aluno`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input type="text" text="Nome do Aluno" name="nome" placeholder="Insira o nome do aluno" handleOnChange={handleChange} value={form.nome}/>
      <Input type="date" text="Data de Nascimento" name="dataNascimento" placeholder="Insira a data de nascimento" handleOnChange={handleChange} value={form.dataNascimento}/>
      <Input type="text" text="Nome do Responsável" name="nomeResponsavel" placeholder="Insira o nome do responsável" handleOnChange={handleChange} value={form.nomeResponsavel}/>
      <Input type="text" text="CPF do aluno" name="cpf" placeholder="Insira o CPF do aluno" handleOnChange={handleChange} value={form.cpf}/>
      <Input type="text" text="Telefone do responsável" name="telefone" placeholder="(99)99999-9999" handleOnChange={handleChange} value={form.telefone}/>
      <Select name="categoria" text="Selecione a categoria" handleOnChange={handleChange} value={form.categoria} options={categorias}/>
      <SubmitButton text={btnText}/>
    </form>
  )
}

export default CadastroForm