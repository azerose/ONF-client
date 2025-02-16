import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isAdminSidebarState } from '../../../../../commons/store';
import { styleSet } from '../../../../../commons/styles/styleSet';
import {
  IMember,
  IOrganization,
  IQuery,
  IRoleCategory,
  IScheduleCategory,
  IScheduleTemplate,
  IVacationCategory,
} from '../../../../../commons/types/generated/types';

import Check01 from '../../../../commons/input/check01';
import RowDataCells from './rowDataCells';

interface IScrollableTableProps {
  tab: string;
  onOpenEdit: (el: any) => void;

  isLocation?: boolean;
  data?: {
    members?: Pick<IQuery, 'fetchMembers'>;
    organizations?: Pick<IQuery, 'fetchOrganizations'>;
    roleCategories?: Pick<IQuery, 'fetchRoleCategories'>;
    scheduleCategories?: Pick<IQuery, 'fetchAllScheduleCategories'>;
    scheduleTemplates?: Pick<IQuery, 'fetchAllScheduleTemplates'>;
    vacationCategories?: Pick<IQuery, 'fetchVacationCategories'>;
  };
}

interface IStyle {
  isManage: boolean;
  isAdminSidebar?: boolean;
}

type IBodyData = Array<
  | IMember
  | IOrganization
  | IRoleCategory
  | IScheduleCategory
  | IScheduleTemplate
  | IVacationCategory
  | String
>;

let headerData: string[] = [];
let bodyData: IBodyData = [];

const HTML_TD_TAG = 'TD';

const ScrollableTable = (props: IScrollableTableProps) => {
  const [checkedList, setCheckedList] = useState<
    Array<string | {} | JSX.Element>
  >([]);
  const router = useRouter();
  const [isAdminSidebar] = useRecoilState(isAdminSidebarState);

  if (props.tab === '직원') {
    headerData = [
      '이름',
      '액세스 권한',
      '입사일',
      '지점',
      '직무',
      '근로정보명',
      '시급',
      '소정근로규칙',
      '최대근로규칙',
      '적용시점',
      '합류 여부',
      '메모',
    ];
    bodyData = props.data?.members?.fetchMembers ?? [];
  } else if (props.tab === '지점' || props.tab === '출퇴근 장소') {
    headerData = [
      '지점명',
      '출퇴근 장소',
      '근무지 주소',
      '좌표',
      'WiFi',
      '메모',
    ];
    bodyData = props.data?.organizations?.fetchOrganizations ?? [];
  } else if (props.tab === '직무') {
    headerData = ['직무명', '색깔', '메모'];
    bodyData = props.data?.roleCategories?.fetchRoleCategories ?? [];
  } else if (props.tab === '근로 정보') {
    headerData = [
      '근로정보명',
      '시급',
      '소정근로요일',
      '주휴요일',
      '소정근로규칙',
      '최대근로규칙',
      '메모',
    ];
    bodyData = [
      '일반근무',
      '₩ 9,160',
      '월, 화, 수, 목, 금',
      '일',
      '1주 40시간',
      '1주 52시간',
      '최저시급 낄낄',
    ];
  } else if (props.tab === '근무일정 유형') {
    headerData = [
      '근무일정 유형명',
      '색깔',
      '연장근무일정 여부',
      '휴일근무 미적용 여부',
      '메모',
    ];
    bodyData = props.data?.scheduleCategories?.fetchAllScheduleCategories ?? [];
  } else if (props.tab === '근무일정 템플릿') {
    headerData = [
      '템플릿명',
      '시간',
      '근무일정 유형',
      '지점',
      '직무',
      '휴게시간',
      '색깔',
      '메모',
    ];
    bodyData = props.data?.scheduleTemplates?.fetchAllScheduleTemplates ?? [];
  } else if (props.tab === '휴가 유형') {
    headerData = [
      '휴가 유형',
      '지점',
      '직무',
      '시간 옵션',
      '유급 시간',
      '차감 일수',
      '메모',
    ];
    bodyData = props.data?.vacationCategories?.fetchVacationCategories ?? [];
  }
  console.log('bodyData', bodyData);
  const onCheckedAll = useCallback((checked) => {
    if (checked) {
      const checkedListArray: Array<JSX.Element | string | {}> = [];
      bodyData.forEach((el) => checkedListArray.push(el));
      setCheckedList(checkedListArray);
    } else setCheckedList([]);
  }, []); // 외부에서 들어오는 데이터 props.data

  const onCheckedElement = useCallback(
    (checked, target) => {
      if (checked) setCheckedList([...checkedList, target]);
      else setCheckedList(checkedList.filter((el) => el !== target));
    },
    [checkedList],
  );
  console.log(props.data);
  return (
    <Wrapper
      isAdminSidebar={isAdminSidebar}
      isManage={router.asPath.includes('/manage')}
    >
      <Table>
        <Header>
          <Row>
            <HeaderContent>
              <Check01
                checked={
                  checkedList.length === 0
                    ? false
                    : checkedList.length === bodyData.length
                }
                onChange={(event) => onCheckedAll(event.target.checked)}
              />
            </HeaderContent>
            {headerData.map((el, i) => (
              <HeaderContent key={i}>
                <a>{el}</a>
              </HeaderContent>
            ))}
          </Row>
        </Header>
        <Body>
          {bodyData?.map((el: any, index: number) => (
            <Row
              key={index}
              className="bodyRow"
              onClick={(e) => {
                const target = e.target as HTMLInputElement | HTMLSpanElement;
                if (target.nodeName === HTML_TD_TAG) {
                  props.onOpenEdit(el);
                }
              }}
            >
              <BodyContent>
                <Check01
                  checked={checkedList.includes(el)}
                  onChange={(event) =>
                    onCheckedElement(event.target.checked, el)
                  }
                />
              </BodyContent>
              <RowDataCells data={el} tab={props.tab} />
            </Row>
          ))}
        </Body>
      </Table>
    </Wrapper>
  );
};

export default ScrollableTable;

const Wrapper = styled.div`
  width: calc(
    100vw - ${(props: IStyle) => (props.isAdminSidebar ? '30rem' : '21.5rem')}
  );
  overflow: scroll auto;
`;

const Table = styled.table`
  margin-bottom: 1rem;
  width: 100%;
`;

const Header = styled.thead`
  width: 100%;
  border-top: 1px solid #d8dfeb;
  border-bottom: 2px solid #d8dfeb;
`;

const Body = styled.tbody`
  th:not(:first-of-type) {
    padding-left: 0.5rem;
  }
`;

const Row = styled.tr`
  width: 100%;
  border-bottom: 1px solid #d8dfeb;

  &.bodyRow:hover {
    background-color: ${styleSet.colors.lightGray};
  }
`;

const HeaderContent = styled.th`
  text-align: left;
  padding: 0.5rem 0.25rem 0.5rem 0;
  min-width: 100px;

  a {
    font-family: ${styleSet.fonts.B};
    word-break: keep-all;
    padding: 0.25rem 0.5rem;
    white-space: nowrap;
    cursor: pointer;
    :hover {
      background-color: ${styleSet.colors.lightGray};
    }
  }

  :first-of-type {
    min-width: 65px;
    padding: 1rem 0 1rem 1rem;
  }
`;

const BodyContent = styled.td`
  text-align: left;
  width: 3rem;
  padding: 1rem 0 1rem 1rem;
`;
