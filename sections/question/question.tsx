import { useState } from 'react'
import styled from '@emotion/styled'
import Collapse from '@mui/material/Collapse'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { InnerWrapper, Wrapper } from 'sections/shared/shared.styles'
import { segmentText } from 'utils/segmentText'

const SectionWrapper = styled(Wrapper)`
  background-color: #ffebdc;
`

const SectionInnerWrapper = styled(InnerWrapper)``

const Title = styled.h2``

const FAQWrapper = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid;
  width: 70%;
`

const FAQ = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

const FAQAnswer = styled.p`
  white-space: pre-line;
`

type QuestionItemProps = {
  question: string
  answer: string
}

function QuestionItem({ question, answer }: QuestionItemProps) {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <FAQWrapper>
      <FAQ onClick={handleClick}>
        <h3>{question}</h3>
        {open ? <RemoveCircleIcon /> : <AddCircleOutlineIcon />}
      </FAQ>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <FAQAnswer>{segmentText(answer)}</FAQAnswer>
      </Collapse>
    </FAQWrapper>
  )
}

export function Question({ questions }: { questions: QuestionItemProps[] }) {
  return (
    <SectionWrapper>
      <SectionInnerWrapper>
        <Title>Frequently Asked Questions</Title>
        <ul style={{ padding: 0 }}>
          {questions.length > 0 &&
            questions.map((item, index) => (
              <QuestionItem key={index} {...item} />
            ))}
        </ul>
      </SectionInnerWrapper>
    </SectionWrapper>
  )
}
