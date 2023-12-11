import React from 'react';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const MainComp = () => {
  return (
    <>
      <section className="main">
        <LeftPane/>
        <RightPane/>
      </section>
    </>
  );
};

export default MainComp;
