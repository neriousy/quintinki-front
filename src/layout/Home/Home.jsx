import React from 'react';
import background from '../../assets/backgrounds/home.jpg';
import RecruitmentInfo from '../../components/Recruitment/RecruitmentInfo';

function Home(){
  document.body.style.backgroundImage = 'url(' + background + ')'; // ??? no idea how to make different bgc on each layout
  
  return(
    <React.Fragment>
      <main>
        <RecruitmentInfo/>
      </main>
    </React.Fragment>
  );
}

export default Home;