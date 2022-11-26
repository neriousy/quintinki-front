import React from 'react';
import background from '../../assets/backgrounds/Quintin-main-bg.jpg';
import RecruitmentInfo from '../../components/Recruitment/RecruitmentInfo';

function Home(){
  document.body.style.backgroundImage = 'url(' + background + ')';
  
  return(
    <React.Fragment>
      <main>
        <RecruitmentInfo/>
      </main>
    </React.Fragment>
  );
}

export default Home;