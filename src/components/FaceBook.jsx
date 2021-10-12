// ###################################################
// ##  Iteration 13 - Component: FaceBook (Simple)  ##
// ###################################################

import profiles from '../data/berlin.json';

const FaceBook = () => {
  console.log(profiles);
  return (
    <div id="facebook">
      {profiles.map((el) => (
        <div id="facebook-card" key={Math.random()}>
          <div id="facebook-img">
            <img src={el.img} alt="ironhacker" />
          </div>
          <div id="facebook-data">
            <div>
              <b>First name: </b>
              {el.firstName}
            </div>
            <div>
              <b>Last name: </b>
              {el.lastName}
            </div>
            <div>
              <b>Country: </b>
              {el.country}
            </div>
            <div>
              <b>Type: </b>
              {el.isStudent ? 'Student' : 'Teacher'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;
