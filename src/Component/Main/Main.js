import * as Styled from "./styled";

const Main = () => {
  const OpenLink = (link) => {
    window.open(link, "_black", "noopener, noreferrer"); //noopener,noreferrer는 보안 취약점 개선
  };
  return (
    <>
      <Styled.FirstWrapper>
        <Styled.TitleText>
          개발자 포트폴리오 <br />
          -이정도-
        </Styled.TitleText>
        <Styled.Intro>
          반갑습니다. <br />
          번뜩이는 아이디어로 빠르게 성장하는 개발자 입니다. <br />
          새로운 스택을 배워 직접 적용해 보는것이 취미 입니다.
        </Styled.Intro>
      </Styled.FirstWrapper>
      <Styled.SecondWrapper id="1">
        <Styled.TitleText>ABOUT ME</Styled.TitleText>
        <Styled.InfoBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/person.png`} />
            <Styled.Text1>
              이름
              <br />
              이정도
            </Styled.Text1>
          </Styled.TextBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/calendar.png`} />
            <Styled.Text1>
              생년월일
              <br />
              93.04.16
            </Styled.Text1>
          </Styled.TextBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/phone.png`} />
            <Styled.Text1>
              전화번호
              <br />
              010-4767-1986
            </Styled.Text1>
          </Styled.TextBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/marker.png`} />
            <Styled.Text1>
              주소
              <br />
              서울시
            </Styled.Text1>
          </Styled.TextBox>
          <Styled.TextBox>
            <Styled.Image src={`${process.env.PUBLIC_URL}/assets/email.png`} />
            <Styled.Text1>
              이메일
              <br />
              bamiyamy@gmail.com
            </Styled.Text1>
          </Styled.TextBox>
        </Styled.InfoBox>
      </Styled.SecondWrapper>
      <Styled.ThirdWrapper id="2">
        <Styled.CTitleText>Channel</Styled.CTitleText>
        <Styled.WrapperChannel>
          <Styled.ChannelBox>
            <Styled.SkillWrapperBox>
              <Styled.LogoImage src={`${process.env.PUBLIC_URL}/assets/githublogo.png`} />
              <Styled.LinkText onClick={() => OpenLink("https://github.com/bamiya/")}>https://github.com/bamiya/</Styled.LinkText>
              <Styled.ChannelText>
                팀 프로젝트 버전관리 및 협업
                <br />
                개인 프로젝트 소스코드
                <br />
                K-DIGITAL-TRAINING 과제 소스코드
              </Styled.ChannelText>
            </Styled.SkillWrapperBox>
          </Styled.ChannelBox>
          <Styled.ChannelBox>
            <Styled.SkillWrapperBox>
              <Styled.LogoImage src={`${process.env.PUBLIC_URL}/assets/veloglogo.png`} />
              <Styled.LinkText onClick={() => OpenLink("https://velog.io/@bamiya/")}>https://velog.io/@bamiya/</Styled.LinkText>
              <Styled.ChannelText>
                공부중에 헷갈리는 부분 기록
                <br />
                언어, 웹 지식등 정리 후 기록
                <br />
                복습할 때 메모장 대신 사용
              </Styled.ChannelText>
            </Styled.SkillWrapperBox>
          </Styled.ChannelBox>
        </Styled.WrapperChannel>
      </Styled.ThirdWrapper>
      <Styled.FourthWrapper id="3">
        <Styled.TitleText>Skills</Styled.TitleText>
        <Styled.WrapperSkills>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Backend</Styled.SkillName>
              <Styled.LogoImage src={`${process.env.PUBLIC_URL}/assets/javalogo.png`} />
              <Styled.LogoImage src={`${process.env.PUBLIC_URL}/assets/springbootlogo.png`} />
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Frontend</Styled.SkillName>
              <Styled.LogoImage src={`${process.env.PUBLIC_URL}/assets/hcjlogo.png`} />
              <Styled.LogoImage src={`${process.env.PUBLIC_URL}/assets/reactlogo.png`} />
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Version Control</Styled.SkillName>
              <Styled.LogoImage src={`${process.env.PUBLIC_URL}/assets/gitlogo.png`} />
              <Styled.LogoImage src={`${process.env.PUBLIC_URL}/assets/githublogo.png`} />
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Communication</Styled.SkillName>
              <Styled.LogoImage src={`${process.env.PUBLIC_URL}/assets/figmalogo.png`} />
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
          <Styled.SkillBox>
            <Styled.SkillWrapperBox>
              <Styled.SkillName>Certificate</Styled.SkillName>
              <Styled.LogoImage src={`${process.env.PUBLIC_URL}/assets/qnetlogo.png`} />
              <Styled.LogoImage src={`${process.env.PUBLIC_URL}/assets/certi.png`} />
            </Styled.SkillWrapperBox>
          </Styled.SkillBox>
        </Styled.WrapperSkills>
      </Styled.FourthWrapper>
      <Styled.FifthWrapper id="4">
        <Styled.TitleText>Projects</Styled.TitleText>
        <Styled.WrapperProject>
          <Styled.ProjectBox>
            <Styled.PTitle>
              포트폴리오 웹사이트<Styled.PdateText>2023.01 / 개인 프로젝트(1인)</Styled.PdateText>
            </Styled.PTitle>
            <Styled.WrapperPInside>
              <Styled.ProjectImg src={`${process.env.PUBLIC_URL}/assets/ptp.png`} />
              <Styled.PTextBox>
                <Styled.ProjectText>
                  포트폴리오 용도로 제작한 웹사이트입니다.
                  <br />
                  <br />
                  리액트와 JS에 대해 복습도 하고, 혼자서 웹사이트 하나정도는 만들 수 있다는 것을 어필하기 위해서 개발하게 되었습니다. 반응형 웹과 grid 시스템에
                  대해서 많은 고민을 하게 해주었고, 미디어쿼리에 대해서 공부할 수 있었던 점이 좋았습니다.
                  <br />
                  <br />
                  URL : <Styled.LinkText2 onClick={() => OpenLink("https://bamiya.github.io/resume/")}>https://bamiya.github.io/resume/</Styled.LinkText2>
                  <br />
                  GitHub : <Styled.LinkText2 onClick={() => OpenLink("https://github.com/bamiya/resume/")}>https://github.com/bamiya/resume/</Styled.LinkText2>
                  <br />
                  Skills : React, JS
                </Styled.ProjectText>
              </Styled.PTextBox>
            </Styled.WrapperPInside>
          </Styled.ProjectBox>
          <Styled.ProjectBox>
            <Styled.PTitle>
              Travel-Planner<Styled.PdateText>2022.10 / 팀 프로젝트(5인)</Styled.PdateText>
            </Styled.PTitle>
            <Styled.WrapperPInside>
              <Styled.ProjectImg src={`${process.env.PUBLIC_URL}/assets/tp1.png`} />
              <Styled.PTextBox>
                <Styled.ProjectText>
                  코로나로인해 여행에 목이 마르셨던 분들,이제 코로나로 인한 걱정도 줄어들 무렵 여행 준비를 하시는 분들을 위해 도움이 될 여행 플래너 웹을
                  개발하였습니다.
                  <br />
                  <br /> 이 프로젝트에서는 기획과 전체 디자인과 흐름도, CSS배치와 회원가입, 페이지네이션, DB, webpack to vite 마이그레이션을 중점적으로 개발을
                  맡았습니다. <br />
                  <br />
                  처음으로 Front와 Back을 나누어서 개발을 해본 팀 프로젝트입니다. 개발 시에 프론트엔드와 백엔드간의 통신방법을 알게 되었고 두 분야를 나누는
                  이유를 알게 되었습니다.
                  <br />
                  <br /> Github를 통한 버전관리방법과 프로젝트 협업의 편리함을 알게되어 유용하게 사용했습니다. 2주간 학습해본 Spring boot JPA를 사용해보고 싶은
                  마음에 프로젝트에서 적용해보았고, 사용법이 미숙했으나 ORM의 유용함에 대해서도 알게되어 좋은 경험이 되었습니다. <br />
                  <br />
                  GitHub :
                  <Styled.LinkText2 onClick={() => OpenLink("https://github.com/Bamiya/travel-planner/")}>
                    https://github.com/Bamiya/travel-planner/
                  </Styled.LinkText2>
                  <br />
                  Frontend : JS, React <br />
                  Backend : Java, Spring Boot <br />
                  Database : MariaDB
                </Styled.ProjectText>
              </Styled.PTextBox>
            </Styled.WrapperPInside>
          </Styled.ProjectBox>
          <Styled.ProjectBox>
            <Styled.PTitle>
              웹 크롤링<Styled.PdateText>2022.07 / 개인 프로젝트(1인)</Styled.PdateText>
            </Styled.PTitle>
            <Styled.WrapperPInside>
              <Styled.ProjectImg src={`${process.env.PUBLIC_URL}/assets/webc1.png`} />
              <Styled.PTextBox>
                <Styled.ProjectText>
                  웹 페이지의 정보를 쉽게 스크랩할 수 있도록 기능을 제공해주는 파이썬의 라이브러리인 BeautifulSoup를 통해 웹크롤링을 진행했습니다. 크롤링의
                  대상으로는 네이버의 현재 상영영화로 선택하였으며, 영화제목과 평점을 가져와서 파싱을 했습니다. <br />
                  <br />
                  파싱된 데이터를 가공하여 Matplotlib 라이브러리로 그래프로 시각화하는 단계까지 진행해 보았으며 욕심을 조금더 내서 pandas 라이브러리의 mean
                  함수를 통해 평점의 평균값도 구현해보았습니다.
                  <br />
                  <br />
                  개인적으로는 정말 재밌게 진행한 프로젝트였으나 파이썬의 라이브러리인 pandas와 numpy 등을 사용하는데 미숙한점이 많았습니다. 앞으로 개인공부를
                  하게된다면 파이썬을 통해 데이터 수집과 가공, 시각화 등을 해보고싶다는 생각이 많이 드는 프로젝트였습니다.
                  <br />
                  <br />
                  GitHub :
                  <Styled.LinkText2 onClick={() => OpenLink("https://github.com/Bamiya/movie_crawling/")}>
                    https://github.com/Bamiya/movie_crawling/
                  </Styled.LinkText2>
                  <br />
                  Skills : Python
                </Styled.ProjectText>
              </Styled.PTextBox>
            </Styled.WrapperPInside>
          </Styled.ProjectBox>
          <Styled.ProjectBox>
            <Styled.PTitle>
              JSP 게시판<Styled.PdateText>2022.07 / 팀 프로젝트(4인)</Styled.PdateText>
            </Styled.PTitle>
            <Styled.WrapperPInside>
              <Styled.ProjectImg src={`${process.env.PUBLIC_URL}/assets/jsp1.png`} />
              <Styled.PTextBox>
                <Styled.ProjectText>
                  자바와 데이터베이스를 연결해주는 JDBC를 이용했던 첫 팀 프로젝트인 JSP 게시판 입니다.
                  <br />
                  <br />
                  데이터베이스 설계와 게시판의 삭제, 수정 쿼리문과 유효성 검사 개발을 맡았습니다.
                  <br />
                  <br />
                  데이터베이스의 기초 설계가 얼마나 중요한지 많이 깨닫게된 프로젝트였습니다. 외래키 설정을 제대로 해주지 않으면 원하는 데이터 처리가
                  되지않는다는걸 알게되었습니다. 특히 게시글을 삭제할때 해당 게시글의 댓글들의 데이터는 그대로 남아있는 문제가 발생할 수 있었습니다.
                  <br />
                  <br />
                  다행히도 테이블의 수가 많지도 않았고 DB설계에 많은 시간을 투자해 기초부터 탄탄하게 다져나갔기 때문에 이후에 외래키 문제가 생겼을 때에도 쉽게
                  해결할 수 있었던 것 같습니다.
                  <br />
                  <br />
                  GitHub :
                  <Styled.LinkText2 onClick={() => OpenLink("https://github.com/Bamiya/jsp_board/")}>https://github.com/Bamiya/jsp_board/</Styled.LinkText2>
                  <br />
                  Skills : Java JSP
                  <br />
                  Database : Oracle Database
                </Styled.ProjectText>
              </Styled.PTextBox>
            </Styled.WrapperPInside>
          </Styled.ProjectBox>
          <Styled.ProjectBox>
            <Styled.PTitle>
              미니 포토샵<Styled.PdateText>2022.06 / 개인 프로젝트(1인)</Styled.PdateText>
            </Styled.PTitle>
            <Styled.WrapperPInside>
              <Styled.ProjectImg src={`${process.env.PUBLIC_URL}/assets/photo.png`} />
              <Styled.PTextBox>
                <Styled.ProjectText>
                  파이썬이 어떤 언어인가에 대해서 배운 후 바로 시작하게된 프로젝트입니다. wand라는 이미지 처리 라이브러리를 중심으로 개발하였습니다.
                  <br />
                  <br />
                  파이썬으로 여러 라이브러리를 활용하는 방법을 알게된 프로젝트 였으며 def로 함수를 만들고, 그 함수를 호출하는 방식을 사용했습니다.
                  <br />
                  <br />
                  프로젝트를 진행할 당시는 파이썬 학습 1개월차였기 때문에 많이 느끼진 못했지만 지금와서 돌아보면 파이썬의 간단한 코드와 깔끔하게 정리할 수
                  있다는 매력이 크게 다가왔던 것 같습니다.
                  <br />
                  <br />
                  GitHub :
                  <Styled.LinkText2 onClick={() => OpenLink("https://github.com/Bamiya/py_photoshop/")}>
                    https://github.com/Bamiya/py_photoshop/
                  </Styled.LinkText2>
                  <br />
                  Skills : Python
                </Styled.ProjectText>
              </Styled.PTextBox>
            </Styled.WrapperPInside>
          </Styled.ProjectBox>
        </Styled.WrapperProject>
      </Styled.FifthWrapper>
    </>
  );
};
export default Main;
