import React, { useEffect, useState } from 'react';
import { Container } from './components/Container/styles';
import { Card } from './components/Card/styles';
import { Title } from './components/Title/styles';
import TextField from './components/TextField';
import { Button } from './components/Button/styles';
import ReminderText from './components/ReminderText';
import { FormWrapper } from './components/FormWrapper/styles';
import { ListWrapper } from './components/ListWrapper/styles';
import { IReminderListingItem } from './types/IReminderListingItem';
import { ReminderController } from './controllers/reminderController';
import { ReminderDate } from './components/ReminderDate/styles';
import { IMessage } from './types/IMessage';
import ResultMessage from './components/ResultMessage';

function App() {

  const [reminderName, setReminderName] = useState<string>();
  const [reminderDate, setReminderDate] = useState<string>();
  const [remindersList, setRemindersList] = useState<IReminderListingItem[]>();
  const [message, setMessage] = useState<IMessage>()

  function formatDateToISO(dateString: string) {
    let dateArr = dateString.split('/');
    const day = dateArr[0];
    dateArr[0] = dateArr[1]
    dateArr[1] = day;
    return new Date(dateArr.join())
}

  const handleSubmit = async () =>{
    if((reminderName && reminderDate) && reminderName.length > 0 && reminderDate.length > 0){
      const reminderController = new ReminderController();
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      const formattedDate = formatDateToISO(reminderDate)
      if(formattedDate >= today && !isNaN(+formattedDate)){
        try {
          await reminderController.create({name: reminderName, date: formattedDate});
          getReminders()
          setMessage({text: "Lembrete cadastrado", type: "success"})
        } catch (error) {
          setMessage({text: "Erro ao cadastrar lembrete", type: "error"})
        }
      }else{
        setMessage({text: "A data deve ser válida e no mínimo para hoje", type: "error"})
      }
    }else{
      setMessage({text: "Preencha todos os campos", type: "error"})
    }
  }

  const handleReminderExclusion = async (id: string) =>{
    const reminderController = new ReminderController();
    try {
      await reminderController.delete(id);
      getReminders()
    } catch (error) {
      setMessage({text: "Erro ao remover lembrete", type: "error"})
    }

  }
  
  const getReminders = async () =>{
    const reminderController = new ReminderController();
    try {
      const data = await reminderController.getRemindersListing();
      setRemindersList(data);
    } catch (error) {
      setMessage({text: "Erro ao recuperar lembretes", type: "error"})
    }
  }

  useEffect(() => {
    getReminders();
  }, []);


  return (
    <Container>
      <Card>
        <FormWrapper>
          <Title>Novo lembrete</Title>
          <TextField value={reminderName} setValue={setReminderName} label='Nome' placeholder='Nome do lembrete'/>
          <TextField value={reminderDate} setValue={setReminderDate} label='Data' placeholder='Data do lembrete (no formato dd/mm/yy)'/>
          {message && <ResultMessage  text={message.text} type={message.type}/>}
          <Button onClick={handleSubmit}>Criar</Button>
        </FormWrapper>
        <ListWrapper>
          <Title>Lista de lembretes</Title>
          {
            !remindersList ? <p>Ainda não há lembretes cadastrados</p> :
            remindersList.map((reminder, index)=> (
              <div key={index}>
                <ReminderDate>{reminder.date}</ReminderDate>
                {
                  reminder.remindersNames.map((reminderName, index) =>(
                    <ReminderText key={index} onClick={() => handleReminderExclusion(reminderName.id)}>{reminderName.name}</ReminderText>
                  ))
                }
              </div>
            ))
          }
        </ListWrapper>
      </Card>
    </Container>
  );
}

export default App;
