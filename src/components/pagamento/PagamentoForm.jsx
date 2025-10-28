import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './PagamentoForm.module.css'

function PagamentoForm({ btnText }) {
  const [form, setForm] = useState({
    cpf: '',
    dataPagamento: '',
    mesPagamento: '',
    valor: ''
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await fetch(`${process.env.REACT_APP_API_URL}/pagamento/${form.cpf}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dataPagamento: form.dataPagamento,
        mesPagamento: form.mesPagamento,
        valor: form.valor
      })
    })
    
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input type="text" text="CPF do Aluno" name="cpf" placeholder="Digite o CPF" handleOnChange={handleChange} value={form.cpf}/>
      <Input type="date" text="Data do Pagamento" name="dataPagamento" placeholder="Selecione a data" handleOnChange={handleChange} value={form.dataPagamento}/>
      <Input type="text" text="Mês do Pagamento" name="mesPagamento" placeholder="Ex: Janeiro" handleOnChange={handleChange} value={form.mesPagamento}/>
      <Input type="number" text="Valor" name="valor" placeholder="Valor do pagamento" handleOnChange={handleChange} value={form.valor}/>
      <SubmitButton text={btnText}/>
    </form>
  )
}

export default PagamentoForm