function Sample(){
  return(
    <>
      <SkipComponent/>
      <Header/>
      <WrapComponent/>
      <Footer/>
    </>
  )
}


//Skip
function SkipComponent(){
  return (
    <>
      <ul className="skip">
        <li><a href="#main">콘텐츠바로가기</a></li>
      </ul>
    </>
  );
}


//header
function Header(){
  return (
    <>
      <header>
        <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
      </header>
    </>
  );
}


//wrap
function WrapComponent(){
  return (
   <>
      <MainComponent/>
   </>
  );
} 
  

//main
function MainComponent(){
  return (
    <>
      <div id="menubox">
        <nav id="menu">
          <ul>
            <li><a href="#">제품이야기</a></li>
            <li><a href="#">브랜드이야기</a></li>
            <li><a href="#">삼익이야기</a></li>
            <li><a href="#">커뮤니티</a></li>
            <li><a href="#">고객서비스</a></li>

          </ul>
        </nav>
        <div className="submenu">
          <div className="box">
            <ul>
              <li><a href="#">피아노</a></li>
              <li><a href="#">디지털오디오</a></li>
              <li><a href="#">기타&베이스</a></li>
              <li><a href="#">관현악기</a></li>
            </ul>

            <ul>
              <li><a href="#">SAMICK</a></li>
              <li><a href="#">SEILER</a></li>
              <li><a href="#">VANESSE</a></li>
              <li><a href="#">Kohler&Campbell</a></li>
            </ul>

            <ul>
              <li><a href="#">삼익소개</a></li>
              <li><a href="#">가치관</a></li>
              <li><a href="#">CEO인사말</a></li>
              <li><a href="#">기업연혁</a></li>
            </ul>

            <ul>
              <li><a href="#">이벤트/행사안내</a></li>
              <li><a href="#">공지사항</a></li>
              <li><a href="#">보도자료</a></li>
              <li><a href="#">SNS</a></li>
            </ul>

            <ul>
              <li><a href="#">다운로드</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">서비스센터 안내</a></li>
              <li><a href="#">대리점 안내</a></li>
            </ul>
          </div>
        </div>
      </div>

      <section id="banner">
        <div><img src="img/samick01.jpg" alt="ban" /></div>
        <div><img src="img/samick02.jpg" alt="ban" /></div>
        <div><img src="img/samick03.jpg" alt="ban" /></div>
      </section>

      <section id="main">
        <h2>피아노</h2>
        <ul>
          <li><a href="#"><img src="img/p1.jpg" alt="img" id="p1"/></a></li>
          <li><a href="#"><img src="img/p2.jpg" alt="img" id="p2"/></a></li>
        </ul>
        <ul> 
          <li><a href="#"><img src="img/p3.jpg" alt="img" id="p3"/></a></li>
          <li><a href="#"><img src="img/p4.jpg" alt="img" id="p4"/></a></li>
        </ul>
      </section>

      <section id="main1">
        <h2>디지털오디오</h2>
        <ul>
          <li><a href="#"><img src="img/o1.jpg" alt="img" id="o1"/></a></li>
          <li><a href="#"><img src="img/o2.jpg" alt="img" id="o2"/></a></li>
         </ul>
         <ul>  
          <li><a href="#"><img src="img/o3.jpg" alt="img" id="o3"/></a></li>
          <li><a href="#"><img src="img/o4.jpg" alt="img" id="o4"/></a></li>
        </ul>
      </section>

      <section id="main2">
        <h2>기타&베이스</h2>
        <ul>
          <li><a href="#"><img src="img/g1.jpg" alt="img" id="g1"/></a></li>
          <li><a href="#"><img src="img/g2.jpg" alt="img" id="g2"/></a></li>
        </ul>
        <ul>
          <li><a href="#"><img src="img/g3.jpg" alt="img" id="g3"/></a></li>
          <li><a href="#"><img src="img/g4.jpg" alt="img" id="g4"/></a></li>
        </ul>
      </section>

      <section id="ban1">
        <img src="img/ban1.jpg" alt="img" />
      </section>

      <section id="main3">
        <h1>News & Event</h1>
        <ul>
          <li><a href="#"><img src="img/n4.jpg" alt="img" /></a>
          <p>아투리아 가상악기들을 50% 할인 가격으로<br/>만나보세요!</p></li>

          <li><a href="#"><img src="img/n1.jpg" alt="img" /></a>
          <p>MUSIC SOFTWARE SALE!</p></li>
          
          <li><a href="#"><img src="img/n2.jpg" alt="img" /></a>
          <p>Sample Tank4 무료증정!</p></li>
         
          <li><a href="#"><img src="img/n3.jpg" alt="img" /></a>
          <p>KOMPLETE AUDIO 구매시 Guitar Rig Pro5<br/>무료증정!</p></li>
          
        </ul>
      </section>
    </>
  );
}


//footer
function Footer(){
  return (
    <>
      <footer>
        <div className="foot">
          <div className="foot2">
            <div className="foot_left cf">
            <p><a href="#">개인정보 취급방침</a> | <a href="#">(주)삼익악기 공시정보 관리규정</a> | <a href="#">관리자</a></p>
            </div>
          </div>
        </div> 

        <div id="foot_logo">
        <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
            <p>사업자 : (주)삼익악기 | 대표 : 이형국<br />
              사업자등록번호 : 122-81-01045<br />
              [369-872] 충청북도 음성군 소이면 소이로 313<br /></p>
        </div>

        <div id="num">
          <p>대표번호<br />
              1688-3151
          </p>
        </div>

        <div id="center">
          <p>고객센터<br />
            1644-3827
          </p>
        </div>

        <div id="foot_bottom">
          <div id="foot_text2">
              <p>법인명 ㈜삼익악기 /<br />
              주소 (27711) 충청북도 음성군 소이면 소이로 313<br />
              사업자등록번호 122-81-01045<br />
              COPYRIGHT (C) 2017 SAMICK CORP. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div id="sns">
            <img src="img/sns1.png" alt="sns" />
            <img src="img/sns2.png" alt="sns" />
            <img src="img/sns3.png" alt="sns" />
            <img src="img/sns4.png" alt="sns" />
          </div>
        </div>       
      </footer>
    </>
  );
}

ReactDOM.render(
  <Sample/>,
  document.getElementById("root")
);