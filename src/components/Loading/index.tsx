import * as S from './styles';

export default function Loading() {
  return (
    <S.Container>
      <S.LoadingSpinner aria-label='loading-spinner'/>
    </S.Container>
  );
}