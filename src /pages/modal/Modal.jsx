import React from 'react'
import * as S from './Modal.styled'
import CommonModal from '../../components/modal/CommentModal'

export default function Modal() {
  return (
    <S.ModalLayout>
        <CommonModal />
    </S.ModalLayout>
  )
}
