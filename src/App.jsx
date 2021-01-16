import { useState, useEffect } from 'react';
import ThemeProvider from './theme/ThemeProvider';
import AppContainer from './App.styled';
import Header from './components/Header/Header';
import JobBoard from './components/JobBoard/JobBoard';
import JobDetail from './components/JobDetail/JobDetail';

function App() {

  const [jobDetail, setJobDetail] = useState({
    visible: false,
    job: {}
  });

  const [hideJobBoard, setHideJobBoard] = useState(false);
  const [scrollPosition, setScrollPosition] = useState('');

  useEffect(() => {
    // remove job board from the DOM after the animation.
    let timer;
    if (jobDetail.visible) {
      timer = setTimeout(() => {
        setHideJobBoard(true);
      }, 400)
      setScrollPosition(document.documentElement.scrollTop)
    }

    return () => {
      setScrollPosition('');
      clearTimeout(timer);
    };
  }, [jobDetail.visible])

  const cancelJobDetail = () => {
    setJobDetail({
      visibile: false,
      job: {}
    });
    setHideJobBoard(false);
    // bring user back to where they were positioned.
    document.documentElement.scrollTop = scrollPosition;
  }

  return (
    <ThemeProvider>
      <Header />
      <AppContainer
        hideJobBoard={hideJobBoard}
      >
        <JobBoard
          hideJobBoard={hideJobBoard}
          hidden={jobDetail.visible ? true : false}
          setJobDetail={setJobDetail}
        />
        <JobDetail
          shown={jobDetail.visible}
          job={jobDetail.job}
          cancelJobDetail={cancelJobDetail}
        />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
