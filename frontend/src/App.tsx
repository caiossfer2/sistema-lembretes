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

function App() {

  const [reminderName, setReminderName] = useState<string>();
  const [reminderDate, setReminderDate] = useState<string>();
  const [remindersList, setRemindersList] = useState<IReminderListingItem[]>();


  const handleSubmit = async () =>{
    if((reminderName && reminderDate) && reminderName.length > 0 && reminderDate.length > 0){
      const reminderController = new ReminderController();
      try {
        await reminderController.create({name: reminderName, date: new Date(reminderDate)});
        getReminders()
        //mensagem
      } catch (error) {
        
      }
    }else{
      //mensagem
    }
  }

  const handleReminderExclusion = async (id: string) =>{
    const reminderController = new ReminderController();
    try {
      await reminderController.delete(id);
      getReminders()
    } catch (error) {
      
    }

  }
  
  const getReminders = async () =>{
    const reminderController = new ReminderController();
    try {
      const data = await reminderController.getRemindersListing();
      setRemindersList(data);
    } catch (error) {
      
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
