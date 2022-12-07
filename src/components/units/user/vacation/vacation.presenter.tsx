import { CaretDownOutlined, CloseOutlined } from '@ant-design/icons';
import * as S from './vacation.styles';
import Btn01 from '../../../commons/button/btn01';
import { styleSet } from '../../../../commons/styles/styleSet';
import { IVacationContainerProps } from './vacation.types';
import VacationSelectComponent from './vacationSelect.presenter.';

const VacationPresenter = (props: IVacationContainerProps) => {
  return (
    <S.MainWrapper>
      <S.HeaderWrapper>
        <S.HeaderTitleWrapper>
          <h3>
            <S.HeaderIconWrapper>
              <CloseOutlined onClick={props.onClickCancel} />
            </S.HeaderIconWrapper>
            {props.isWorking ? '근무일정 생성 요청' : '휴가 생성 요청'}
          </h3>
        </S.HeaderTitleWrapper>
        <S.HeaderBtnWrapper>
          <Btn01
            text={'다음: 승인권자 선택'}
            bgC={`${styleSet.colors.primary}`}
            color={`${styleSet.colors.white}`}
          ></Btn01>
        </S.HeaderBtnWrapper>
      </S.HeaderWrapper>
      {props.isWorking ? (
        <>
          <section>
            <S.LabelSection>
              <S.LabelStyle>직무</S.LabelStyle>
              <S.SelectWrapper onClick={props.onClickPositionOpen}>
                팀원
                <CaretDownOutlined />
              </S.SelectWrapper>
              {props.isPosition ? (
                <>
                  <div>
                    <VacationSelectComponent
                      isPosition={props.isPosition}
                      isTemplate={false}
                      isVacation={false}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
            </S.LabelSection>
            <S.WorkingLabelSection>
              <S.LabelStyle>근무일정 템플릿들</S.LabelStyle>
              <S.SelectWrapper onClick={props.onClickTemplate}>
                선택안됨
                <CaretDownOutlined />
              </S.SelectWrapper>
              {props.isTemplate ? (
                <>
                  <VacationSelectComponent
                    isPosition={false}
                    isTemplate={props.isTemplate}
                    isVacation={false}
                  />
                </>
              ) : (
                <></>
              )}
            </S.WorkingLabelSection>
          </section>
        </>
      ) : (
        <>
          <S.LabelSection>
            <S.LabelStyle>휴가유형</S.LabelStyle>
            <S.SelectWrapper onClick={props.onClickVaction}>
              선택안됨
              <CaretDownOutlined />
            </S.SelectWrapper>
            {props.isVacation ? (
              <>
                <VacationSelectComponent
                  isTemplate={false}
                  isPosition={false}
                  isVacation={props.isVacation}
                />
              </>
            ) : (
              <></>
            )}
          </S.LabelSection>
        </>
      )}

      <S.VacationMainWrapper>
        <S.CalendarWrapper>
          <S.RequireDateStyle>요청날짜</S.RequireDateStyle>
          <section>캘린더</section>
        </S.CalendarWrapper>
        {props.isWorking ? (
          <>
            <S.VacationListWrapper>
              <S.WorkingDateWrapper>
                <S.WorkingDate>11/28 - 12/4</S.WorkingDate>
                <S.TimeWrapper>
                  <S.TimePlan>
                    계획: 36시간
                    <S.TimeRestStyle>(휴가:0분)</S.TimeRestStyle>
                  </S.TimePlan>
                  <S.TimeRestStyle>소정: 40시간</S.TimeRestStyle>
                </S.TimeWrapper>
              </S.WorkingDateWrapper>
            </S.VacationListWrapper>
          </>
        ) : (
          <>
            <S.VacationListWrapper>
              <S.VacationTotalWrapper>
                <S.ArticleTitleWrapper>
                  <S.ArticleTitleStyle>12월 휴가 통계</S.ArticleTitleStyle>
                </S.ArticleTitleWrapper>
                <S.VacationContentsWrapper>
                  <S.ListContentsWrapper>
                    <S.ChangeVacationTitleStyle>
                      휴가시간 변화
                    </S.ChangeVacationTitleStyle>
                    <span>0 8시간</span>
                  </S.ListContentsWrapper>
                  <S.ListContentsWrapper>
                    <S.GroupOfVacationStyle>
                      휴가 그룹 없음(2022.01.01 - 12.31)
                    </S.GroupOfVacationStyle>
                    <span>
                      잔여일수는
                      <S.GroupOfVacationStyle>0</S.GroupOfVacationStyle>일
                      입니다.
                    </span>
                  </S.ListContentsWrapper>
                </S.VacationContentsWrapper>
              </S.VacationTotalWrapper>
              <S.WorkingListWrapper>
                <S.ArticleTitleWrapper>
                  <S.ArticleTitleStyle>근무 일정 목록</S.ArticleTitleStyle>
                </S.ArticleTitleWrapper>
                <div>
                  <S.DateOfWorkingStyle>12/16(금)</S.DateOfWorkingStyle>
                  <S.TimeofWorkingStyle>10:00~19:00</S.TimeofWorkingStyle>
                </div>
              </S.WorkingListWrapper>
            </S.VacationListWrapper>
          </>
        )}
      </S.VacationMainWrapper>
    </S.MainWrapper>
  );
};

export default VacationPresenter;