import { ReactNode } from 'react'
import { P, Wrapper } from './styles'
import { Icon } from '@iconify/react';
import React from 'react';

interface ReminderTextProps{
  children: ReactNode;
  onClick: () => void;
}

function ReminderText({children, onClick} : ReminderTextProps) {
  return (
    <Wrapper>
      <P>{children}</P>
      <Icon icon='mdi:close-circle' color='red' onClick={onClick} />
    </Wrapper>
  )
}

export default ReminderText