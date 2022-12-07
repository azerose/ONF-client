import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';
import { IStlyesProps } from './list.types';

export const Container = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-top: 1px solid ${styleSet.colors.gray};
  border-bottom: 1px solid ${styleSet.colors.gray};
`;

export const H2 = styled.h2`
  padding-right: 2rem;
  padding-bottom: 1rem;
  font-size: ${styleSet.fontSizes.strong};
  font-family: ${styleSet.fonts.EB};
`;

export const ColWrapper = styled.div`
  padding: ${(props) => (props.right ? 'none' : '1rem 0 1rem 1rem')};
  width: 100%;
  border-right: ${(props: IStlyesProps) =>
    props.right ? `1.2px solid ${styleSet.colors.darkGray}` : 'none'};
`;

// list

export const ListUl = styled.ul`
  width: 100%;

  li {
    padding: 0.5rem;
    width: 100%;
    border-bottom: 1px solid ${styleSet.colors.gray};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Preface = styled.span`
  padding: 4px;
  font-size: ${styleSet.fontSizes.small};
  color: ${styleSet.colors.white};
  background-color: ${styleSet.colors.subColor02};
  border-radius: 2px;
  text-align: center;
`;

export const DateStyle = styled.span`
  font-size: ${styleSet.fontSizes.small};
  color: ${styleSet.colors.darkGray};
`;

// detail

export const DetailTop = styled.div`
  padding-bottom: 1rem;
  width: 100%;
  border-bottom: 1px solid ${styleSet.colors.gray};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: ${styleSet.fontSizes.normal};
  font-family: ${styleSet.fonts.B};
`;

export const Contents = styled.div`
  padding: 1rem 0;
  width: 100%;
`;
