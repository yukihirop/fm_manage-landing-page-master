import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const ArticleContainer = styled.div`
  width: 100%;
  height: 100%;
`

interface ArticleProps {
  title: string
}

const Article = (props: ArticleProps) => {
  const [title, setTitle] = useState<ArticleProps['title']>('')

  return (
    <ArticleContainer>
    </ArticleContainer>
  )
}

export default Article

const active = css`
  background: red;
`
