import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'
import SectionTitleBottom from '../SectionTitleBottom'
// Demo styles, see 'Styles' section below for some notes on use.
import { Color } from './styles'
import { ContainerMaxWidth } from '../MaxWidthContainer'
export default function QuestionSection () {
  return (
    <Color>
      <ContainerMaxWidth>
        <SectionTitleBottom>Perguntas e respostas frequentes</SectionTitleBottom>
        <Accordion
          preExpanded={['1']}
        >
          <AccordionItem uuid={'1'}>
            <AccordionItemHeading>
              <AccordionItemButton >
                Qual formato das aulas?
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                O Treinamento é 100% online e as aulas são disponibilizadas em vídeo.
                    </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Como vou assistir as aulas?
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Você receberá o acesso a plataforma por email assim que seu pagamento for aprovado.
                    </p>
            </AccordionItemPanel>

          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Por quanto tempo terei acesso ao treinamento?
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Seu acesso será vitálicio, para que você possar assistir as aulas no seu tempo.
                    </p>
            </AccordionItemPanel>

          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Como são feitas as liberações das aulas?
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                As aulas serão liberadas semanalmente.
                    </p>
            </AccordionItemPanel>

          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Como funcionam os bonûs?
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Todos os bônus incluídos para a turma serão entregues ao longo do treinamento, ou mesmo ao final dele, de acordo com o cronograma de liberação dos módulos.
                    </p>
            </AccordionItemPanel>

          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                E se eu perceber que esse treinamento não é pra mim?
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              Você tem 7 dias para experimentar o treinamento e decidir se é para você ou não.
              Caso decida não continuar basta pedir reembolso pela própia plataforma e não precisa nem explicar o motivo.
                    </p>
            </AccordionItemPanel>

          </AccordionItem>

        </Accordion>

      </ContainerMaxWidth>
    </Color>
  )
}
