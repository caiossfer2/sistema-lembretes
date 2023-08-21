import React from 'react'
import { IMessage } from '../../types/IMessage'
import { GreenText, RedText } from './styles'

function ResultMessage({text, type} : IMessage) {
  return (
    <div>
        {type === 'error' ? <RedText>{text}</RedText> : <GreenText>{text}</GreenText>}
    </div>
  )
}

export default ResultMessage