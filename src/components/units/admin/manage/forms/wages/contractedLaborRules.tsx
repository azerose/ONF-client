import styled from '@emotion/styled';
import { useState } from 'react';
import { styleSet } from '../../../../../../commons/styles/styleSet';
import Check01 from '../../../../../commons/input/check01';
import Footer from '../common/footer';
import Label from '../common/label';
import { IWagesProps } from './wages.types';

const ContractedLaborRules = (props: IWagesProps) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Check01
        checked={open}
        onChange={() => setOpen((prev) => !prev)}
        text="소정근로규칙 사용"
      />
      {open && (
        <>
          <FormContent>
            <Label width="10rem">소정근로시간</Label>
            <InputBox>
              <Select>
                <option>1일</option>
                <option>1주</option>
                <option>1개월</option>
              </Select>
              <HourBox>
                <HourInput type="number" />
                <LabelPerHour>시간</LabelPerHour>
              </HourBox>
            </InputBox>
          </FormContent>
          <FormContent>
            <Label width="10rem">연장근로 최소기준</Label>
            <InputBox>
              <Select>
                <option>1일</option>
                <option>1주</option>
                <option>1개월</option>
              </Select>
              <HourBox>
                <HourInput type="number" />
                <LabelPerHour>시간</LabelPerHour>
              </HourBox>
            </InputBox>
          </FormContent>
          <FormContent>
            <Label width="10rem">연장근로 최대기준</Label>
            <InputBox>
              <Select>
                <option>1일</option>
                <option>1주</option>
                <option>1개월</option>
              </Select>
              <HourBox>
                <HourInput type="number" />
                <LabelPerHour>시간</LabelPerHour>
              </HourBox>
            </InputBox>
          </FormContent>
          <FormContent>
            <Label width="10rem">단위기간</Label>
            <InputBox>
              <HourBox>
                <HourInput type="number" />
              </HourBox>
              <Select>
                <option>주</option>
                <option>개월</option>
              </Select>
            </InputBox>
          </FormContent>
        </>
      )}
      <Footer onCancel={props.onCancel} />
    </>
  );
};

export default ContractedLaborRules;

const FormContent = styled.div`
  display: flex;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Select = styled.select`
  outline: none;
  border: 1px solid ${styleSet.colors.gray};
  padding: 0.5rem;
`;

const HourBox = styled.div`
  display: flex;
  border: 1px solid ${styleSet.colors.gray};
`;

const HourInput = styled.input`
  width: 5rem;
  padding: 0.5rem;
  outline: none;
  border: none;
`;

const LabelPerHour = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: ${styleSet.colors.lightGray};
  border-left: 1px solid ${styleSet.colors.gray};
`;