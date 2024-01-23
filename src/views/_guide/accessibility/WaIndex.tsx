import React from "react";
import PrismCode from "@guide/components/PrismCode";
import "@assets/scss/guide.scss";

function WaIndex() {
  return (
    <div className="content-body">
      <section className="section">
        <h3 className="section-title">모바일 웹(앱) 접근성 개요</h3>
        <ul className="list-dot">
          <li>
            모바일 앱 접근성은(Mobile application Accessibility) 데스크톱,
            태블릿, 모바일, 하이브리드 앱에 이르기까지 웹 기술을 통해 구현하는
            모든 서비스가 이 가이드라인의 적용 대상입니다.
          </li>
          <li>
            이 가이드라인은
            <a
              href="https://www.w3.org/TR/WCAG21/"
              target="_blank"
              title="WCAG 2.1"
              rel="noreferrer"
            >
              WCAG 2.1
            </a>
            이 근간이며 가이드라인에서 설명하지 않거나 애매한 주제는 WCAG 2.1의
            수준 A 항목과 AA 항목의 지침 및 평가 방법을 따라야 합니다.
            오픈오브젝트 웹 접근성 가이드라인은 오픈오브젝트 고유의 콘텐츠에
            대응하는 WCAG 2.1 가이드라인에 대한 이해를 돕고 손쉽게 평가할 수
            있도록 소개한 것으로써 고객에게 웹 서비스를 제공하기 전 준수해야 할
            최소한의 요구사항입니다.
          </li>
          <li>
            이 가이드라인은 웹 기술(HTML, CSS, JavaScript)에 대한 사전 지식을
            요구합니다.
          </li>
        </ul>
      </section>
      <section className="section">
        <h4 className="section-subtitle">
          의미를 전달하고 있는 이미지에 대체 텍스트를 제공한다.
        </h4>
        <ul className="list-dot">
          <li>대체 텍스트는 이미지의 시각적 의도와 동등한 내용을 전달한다.</li>
          <li>대체 텍스트는 중복으로 제공하지 않는다.</li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>저시력 사용자가 내용을 빠르게 인지할 수 있다.</li>
        </ul>
        <PrismCode
          html
          code={`
          <!-- X -->
          <img src="openobject.png">
          <img src="openobject.png" alt>
          <img src="openobject.png" alt="">
          <img src="openobject.png" title="오픈오브젝트">
          <img src="openobject.png" alt="오픈오브젝트" title="오픈오브젝트">

          <!-- O -->
          <img src="openobject.png" alt="오픈오브젝트">

          <!-- X -->
          <a href="/">
            <img src="openobject.png" alt="오픈오브젝트"> 오픈오브젝트
          </a>

          <!-- O -->
          <a href="/">
            <img src="openobject.png" alt> 오픈오브젝트
          </a>

          <!-- X -->
          <a href="/" style="background:url(openobject.png) no-repeat"></a>

          <!-- O -->
          <a href="/" style="background:url(openobject.png) no-repeat">오픈오브젝트</a>`}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">
          전경 콘텐츠와 배경은 4.5:1 이상의 명도 대비를 유지한다.
        </h4>
        <ul className="list-dot">
          <li>
            전경 콘텐츠는 정보를 전달하고 있는 &quot;문자, 아이콘, 콘트롤(a,
            button, input, select, textarea)&quot;의 선과 면을 의미한다.
          </li>
          <li>
            문자 크기가 bold 19px 이상 또는 normal 24px 이상인 경우 3:1 이상의
            명도 대비를 유지한다.
          </li>
          <li>
            아이콘, 콘트롤 등 시각 정보가 3px 이상 두꺼운 경우 3:1 이상의 명도
            대비를 유지한다.
          </li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>저시력 사용자가 내용을 빠르게 인지할 수 있다.</li>
        </ul>
        <PrismCode
          html
          code={`
            <!-- X -->
            <body style="background:#fff">
              <p style="color:#777">오픈오브젝트</p>
            </body>

            <!-- O -->
            <body style="background:#fff">
              <p style="color:#767676">오픈오브젝트</p>
            </body>

            <!-- X -->
            <body style="background:#fff">
              <input style="border:1px solid #777">
            </body>

            <!-- O -->
            <body style="background:#fff">
              <input style="border:1px solid #767676">
            </body>
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">화면을 400%까지 확대할 수 있다.</h4>
        <ul className="list-dot">
          <li>
            너비 1,280 픽셀 해상도 모니터에서 400%까지 확대할 수 있다. 모바일
            단말에서는 테스트하지 않는다.
          </li>
          <li>
            화면을 400% 확대한 상태에서 내용과 기능에 손실이 없어야 하고, 2차원
            스크롤이 발생하지 않아야 한다.
          </li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>저시력 사용자가 내용을 빠르게 인지할 수 있다.</li>
          <li>하나의 소스 만으로 모든 해상도의 출력 장치에 대응 가능하다.</li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>저시력 사용자가 내용을 빠르게 인지할 수 있다.</li>
        </ul>
        <PrismCode
          html
          code={`
            <!-- X -->
            http://www.president.go.kr/

            <!-- O -->
            https://www.whitehouse.gov/
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">키보드만으로 조작할 수 있다.</h4>
        <ul className="list-dot">
          <li>구현된 키보드 접근 순서는 논리적으로 설명할 수 있어야 한다.</li>
          <li>초점을 받은 요소는 시각적 단서를 제공해야 한다.</li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>
            전맹 또는 상지 장애가 있는 사용자와 키보드를 선호하는 사용자의
            탐색과 조작을 돕는다.
          </li>
        </ul>
        <ul className="list-dot">
          <li>저시력 사용자가 내용을 빠르게 인지할 수 있다.</li>
        </ul>
        <PrismCode
          script
          code={`
            <!-- X -->
            a:hover{ color: #000; }

            <!-- O -->
            a:hover,
            a:focus{ color: #000; }

            <!-- X -->
            $(document).on("mouseover", ".gnb a", function() { });

            <!-- O -->
            $(document).on("mouseover focus", ".gnb a", function() { });
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">
          사용할 수 있는 충분한 시간을 제공한다.
        </h4>
        <ul className="list-dot">
          <li>
            시간 제한이 있는 정보는 시간 제한을 끄거나, 또는 최소 20초 이상
            10회까지 연장할 수 있다.
          </li>
          <li>자동으로 갱신되는 정보에는 정지, 이전, 다음 기능을 제공한다.</li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>학습장애 또는 난독증세가 있는 사람이 내용을 이해할 수 있다.</li>
        </ul>
        <PrismCode
          html
          code={`
            <!-- X -->
            10초 후 다음 페이지로 넘어갑니다. [다음 페이지로 즉시 이동]

            <!-- O -->
            20초 후 다음 페이지로 넘어갑니다. [취소] [다음 페이지로 즉시 이동]
            20초 후 다음 페이지로 넘어갑니다. [20초 연장] [다음 페이지로 즉시 이동]

            <!-- X -->
            콘텐츠가 자동으로 슬라이드 되고 있는 상황에서 정지하거나 이전, 다음 콘텐츠를 탐색할 수 없다.

            <!-- O -->
            콘텐츠가 자동으로 슬라이드 되고 있지만 정지, 이전, 다음 기능을 제공하고 있다.
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">
          발작을 유발하는 콘텐츠를 제공하지 않는다.
        </h4>
        <ul className="list-dot">
          <li>
            1초에 3~50회 사이의 번쩍이는 콘텐츠는 광과민성 발작을 유발할 수
            있다.
          </li>
          <li>
            광과민성 발작은 소아 또는 간질 경험이 있는 사람에게 더 위험하다.
          </li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>소아 또는 간질 경험이 있는 사람의 발작을 예방할 수 있다.</li>
        </ul>
        <PrismCode
          html
          code={`
          포켓몬 발작 사고 영상 - https://www.youtube.com/watch?v=gwoQRKCEHgY // 소아 또는 간질 경험이 있는 사람에게 발작 위험.
        `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">
          반복되는 콘텐츠 블록을 건너뛸 수 있다.
        </h4>
        <ul className="list-dot">
          <li>
            일반적으로 글로벌 탐색 바와 로컬 탐색 바는 반복되는 콘텐츠 블록이다.
          </li>
          <li>
            반복되는 콘텐츠 블록이 있는 경우 페이지 시작 위치에 본문으로
            건너뛰기 링크를 제공한다.
          </li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>
            전맹 또는 상지 장애가 있는 사용자와 키보드를 선호하는 사용자의
            탐색과 조작을 돕는다.
          </li>
        </ul>
        <PrismCode
          html
          code={`
            <!-- X -->
            <body>
              <h1>오픈오브젝트</h1>
              <nav>...</nav>
              <main>...</main>

            <!-- O -->
            <body>
              <a href="#main">본문으로 건너뛰기</a>
              <h1>오픈오브젝트</h1>
              <nav>...</nav>
              <main id="main">...</main>
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">
          모든 문서의 제목은 고유하고 식별할 수 있다.
        </h4>
        <ul className="list-dot">
          <li>
            제목 콘텐츠를 문서마다 다르게 설명함으로써 현재 문서의 용도를 식별할
            수 있다.
          </li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>전맹 사용자가 링크 이동 결과를 음성으로 확인할 수 있다.</li>
          <li>문서의 용도를 빠르게 파악할 수 있다.</li>
          <li>검색엔진이 올바른 페이지를 수집하도록 돕는다.</li>
          <li>유저 에이전트 탭의 식별 가능성이 높아진다.</li>
        </ul>
        <PrismCode
          html
          code={`
            <!-- X -->
            <head>
              <title>오픈오브젝트<title>

            <!-- O -->
            <head>
              <title>회사소개 | 오픈오브젝트<title>
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">
          링크와 버튼 텍스트는 콘텐츠의 목적을 알 수 있다.
        </h4>
        <ul className="list-dot">
          <li>
            주변 콘텐츠와 분리하여 독립적으로 접근해도 링크 또는 버튼의 목적을
            알 수 있어야 한다.
          </li>
          <li>
            링크 또는 버튼에 독립적으로 접근하여 이해하기 어려운 경우 동일한
            단락, 목록, 셀, 연결된 헤더셀(p, li, td, th)에 링크 또는 버튼의
            목적을 설명해야 한다.
          </li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>
            전맹 사용자가 링크 또는 버튼에 독립적으로 또는 순차적으로 접근하는
            경우 링크 또는 버튼의 목적을 음성으로 전달할 수 있다.
          </li>
        </ul>
        <PrismCode
          html
          code={`
            <!-- X -->
            <a href="javascript:void(0)" download>설치하기</a>
            <button type="button">삭제하기</button>
            
            <!-- O -->
            <a href="javascript:void(0)" download>오픈오브젝트 안드로이드 애플리케이션 설치하기</a>
            <p>오픈오브젝트 안드로이드 애플리케이션 <a href="javascript:void(0)" download>설치하기</a></p>
            <li>오픈오브젝트 안드로이드 애플리케이션 <a href="javascript:void(0)" download>설치하기</a></li>
            <td>오픈오브젝트 안드로이드 애플리케이션 <a href="javascript:void(0)" download>설치하기</a></td>
            <tr>
              <th scope="row">오픈오브젝트 안드로이드 애플리케이션</th>
              <td><a href="javascript:void(0)" download>설치하기</a></td>
            </tr>
            
            <!-- O -->
            <button type="button">구매내역 삭제하기</button>
            <p>구매내역 <button type="button">삭제하기</button></p>
            <li>구매내역 <button type="button">삭제하기</button></li>
            <td>구매내역 <button type="button">삭제하기</button></td>
            <tr>
              <th scope="row">구매내역</th>
              <td><button type="button">삭제하기</button></td>
            </tr>
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">
          섹션에는 의미 있는 마크업과 헤딩이 있다.
        </h4>
        <ul className="list-dot">
          <li>
            섹션 콘텐츠는 의미에 알맞은 article, section, nav, aside 요소로
            마크업한다.
          </li>
          <li>
            섹션 콘텐츠에는 문서의 개요 체계에 알맞은 헤딩(h1~h6)을 제공한다.
          </li>
          <li>
            명시적 헤딩 기법을 사용한다. 명시적 헤딩 기법은 하나의 문서에 h1
            요소를 한 번 사용한다.
          </li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>
            보조기기 사용자가 원하는 탐색 지점으로 빠르게 건너 뛸 수 있다.
          </li>
          <li>검색엔진이 올바를 페이지를 수집하도록 돕는다.</li>
          <li>
            유저 에이전트 확장 기능 사용자에게 문서 개요를 전달할 수 있다.
          </li>
        </ul>
        <PrismCode
          html
          code={`
            <!-- X -->
            <div className="article">...</div>
            <div className="section">...</div>
            <div className="nav">...</div>
            <div className="aside">...</div>

            <!-- O -->
            <article>
              <h2>...</h2>
              ...
            </article>
            <section>
              <h2>...</h2>
              ...
            </section>
            <nav>
              <h2>...</h2>
              ...
            </nav>
            <aside>
              <h2>...</h2>
              ...
            </aside>
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">
          문서의 휴먼 랭귀지 속성을 제공한다.
        </h4>
        <ul className="list-dot">
          <li>html 요소에 lang 속성을 제공한다.</li>
          <li>
            한글, 영문, 일문, 중문에는 이를 식별하기 위한 ISO-639-1 코드값 ko,
            en, ja, zh가 있다.
          </li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>보조기기와 검색엔진이 문서의 휴먼 랭귀지를 식별할 수 있다.</li>
        </ul>
        <PrismCode
          html
          code={`
            <!-- X -->
            <html>

            <!-- O -->
            <html lang="ko">
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">문맥 변경은 예측할 수 있다.</h4>
        <ul className="list-dot">
          <li>
            사용자가 실행하기 전까지는 문서를 갱신(이동, 추가, 삭제,
            재배치)하거나, 팝업(새 창, 레이어)을 띄우거나, 초점을 다른 곳으로
            옮기지 않는다.
          </li>
          <li>
            사용자가 초점을 넣거나 마우스를 올리는 것은 기능을 실행하기 위한
            의도로 보지 않기 때문에 문맥을 변경하면 안 된다.
          </li>
          <li>
            대한민국 선택의 결과로 &quot;대한민국&quot;의 &quot;시/군/구&quot;를
            선택하는 항목이 등장했다면 이것은 문맥의 변화가 아니다.
          </li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>보조 기기 사용자가 혼란에 빠지는 것을 예방할 수 있다.</li>
        </ul>
        <PrismCode
          html
          code={`
            <!-- X -->
            초점을 넣었을 뿐인데 자동으로 페이지 갱신 또는 이동.
            페이지 로드 시 자동 팝업.
            초점 자동 이동.
            
            <!-- O -->
            클릭 또는 리턴(엔터) 키를 통해 페이지 갱신 또는 이동.
            클릭 또는 리턴(엔터) 키를 통해 팝업 생성.
            초점을 자동으로 옮기지 않음.
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">폼 콘트롤 요소에 설명을 제공한다.</h4>
        <ul className="list-dot">
          <li>
            모든 input, textarea, select 요소에는 콘트롤을 설명하는 label 요소를
            맵핑하거나 또는 title 속성을 제공한다.
          </li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>
            보조기기가 폼 콘트롤에 독립적으로 접근했을 때 콘트롤에 대한 설명을
            제공할 수 있다.
          </li>
        </ul>
        <PrismCode
          html
          code={`
            <!-- X -->
            <form>
              <input type="search">
              <button>검색</button>
            </form>
            
            <!-- O -->
            <form>
              <label for="search">검색</label>
              <input id="search" type="search">
              <button>검색</button>
            </form>
            
            <!-- O -->
            <form>
              <input type="search" title="검색">
              <button>검색</button>
            </form>
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">
          실수를 예방하고 정정하는 것을 돕는다.
        </h4>
        <ul className="list-dot">
          <li>
            입력 오류를 자동으로 감지할 수 있는 경우에만 이 지침을 적용한다.
            예를 들면 이름을 잘못 입력하는 경우 정정 의견을 제시할 수 없다.
          </li>
          <li>
            오류 항목이 무엇인지 식별할 수 있도록 문자로 알리고 정정 의견을
            제시한다. 예를 들면 &quot;생년월일 양식에 오류가 있습니다. 입력
            형식은 yyyy-mm-dd 입니다.&quot;
          </li>
          <li>
            정정 의견은 보안을 유지하는 수준에서 제시한다. 예를 들면
            &quot;아이디 또는 비밀번호 입력 오류.&quot;
          </li>
          <li>
            입력 내용을 전송하기 전 검토 후 교정할 수 있다. 또는 제출한 내용을
            되돌릴 수 있다.
          </li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>사용자가 실수하지 않도록 예방하고 실수를 교정할 수 있다.</li>
        </ul>
        <PrismCode
          html
          code={`
            <!-- X -->
            오류 입력 양식에 붉은 색 보더 처리. // 시각에 의존하고 있다. 문자로 알려야 한다.
            "입력 양식에 오류가 있습니다." // 오류 식별 불가.
            "로그인 오류. 비밀번호는 특수문자, 숫자, 알파벳을 하나 이상 포함해야 합니다." // 정정 의견이 보안을 해치고 있음.
            여러 단계(여러 페이지)에 걸쳐 작성한 내용 중 이전 단계의 내용을 검토할 수 없고 제출 후 수정할 수 없음. // 제출 전 또는 제출 후 수정할 수 있어야 한다.
            
            <!-- O -->
            "생년월일 양식에 오류가 있습니다. 입력 형식은 yyyy-mm-dd 입니다." // 오류 식별 가능. 정정 의견 제시.
            "아이디 또는 비밀번호 입력 오류. 5회 이상 오류 발생 시 계정잠금 상태로 전환합니다." // 오류 식별 가능. 정정 의견 제시. 보안을 해치지 않음.
            여러 단계(여러 페이지)에 걸쳐 작성한 내용 중 이전 단계의 내용을 검토 후 수정할 수 있음. 또는 이전 단계의 내용을 수정할 수 없지만 제출 후 수정할 수 있음.
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">HTML 문법을 준수한다.</h4>
        <ul className="list-dot">
          <li>
            시작 태그에서 닫는(self-closing) 요소를 제외하고 시작 태그, 종료
            태그, 따옴표를 생략하지 않는다.
          </li>
          <li>명세에 따라 중첩한다.</li>
          <li>속성을 중복 선언하지 않는다.</li>
          <li>모든 id 속성의 값은 하나의 문서 안에서 중복 없이 유일하다.</li>
        </ul>
        <span>기대효과</span>
        <ul className="list-dot">
          <li>보조기기의 웹 문서 해석 오류를 예방할 수 있다.</li>
        </ul>
        <PrismCode
          html
          code={`
            <!-- X -->
            <div><span>...</div> // span 종료 태그 생략 오류.
            <span><a><div>...</div></a></span> // span 요소가 div를 감싼 것은 오류.
            <div className="aaa" className="bbb">...</div> // 속성은 한 번만 선언해야 한다.
            <div id="xyz">...</div><div id="xyz">...</div> // xyz 값은 페이지에서 유일해야 한다.
            
            <!-- O -->
            <div><span>...</span></div>
            <div><a><div>...</div></a></div>
            <div className="aaa bbb">...</div>
            <div id="abc">...</div><div id="xyz">...</div>
          `}
        ></PrismCode>
      </section>
    </div>
  );
}

export default WaIndex;
