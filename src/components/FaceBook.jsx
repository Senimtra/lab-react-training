// ###################################################
// ##  Iteration 13 - Component: FaceBook (Simple)  ##
// ###################################################

// import profiles from '../data/berlin.json';

// const FaceBook = () => {
//   let x = new Set(profiles.map((el) => el.country));
//   console.log(x);
//   return (
//     <div id="facebook">
//       {profiles.map((el) => (
//         <div id="facebook-card" key={Math.random()}>
//           <div id="facebook-img">
//             <img src={el.img} alt="ironhacker" />
//           </div>
//           <div id="facebook-data">
//             <div>
//               <b>First name: </b>
//               {el.firstName}
//             </div>
//             <div>
//               <b>Last name: </b>
//               {el.lastName}
//             </div>
//             <div>
//               <b>Country: </b>
//               {el.country}
//             </div>
//             <div>
//               <b>Type: </b>
//               {el.isStudent ? 'Student' : 'Teacher'}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FaceBook;

// #####################################################
// ##  Iteration 14 - Component: FaceBook (Advanced)  ##
// #####################################################

import React from 'react';
import profiles from '../data/berlin.json';

const countryList = ['All', ...new Set(profiles.map((el) => el.country))];
class FaceBook extends React.Component {
  constructor() {
    super();
    this.state = {
      ironhackers: profiles,
      selected: [],
      searchString: '',
    };
  }

  selectByCountry = (country) => {
    let ironhackersByCountry;
    if (country === 'All') {
      ironhackersByCountry = [...this.state.ironhackers];
    } else {
      ironhackersByCountry = this.state.ironhackers.filter(
        (el) => el.country === country
      );
    }
    this.setState({
      selected: ironhackersByCountry,
    });
  };

  setBackground = (el) => {
    if (this.state.selected.includes(el)) {
      return 'lightblue';
    } else {
      return 'white';
    }
  };

  setButtonColor = (el) => {
    if (!this.state.selected.length) {
      return 'white';
    } else if (
      this.state.selected.length === this.state.ironhackers.length &&
      el === 'All'
    ) {
      return 'lightblue';
    } else if (
      el === this.state.selected[0].country &&
      this.state.selected.length < this.state.ironhackers.length
    ) {
      return 'lightblue';
    } else {
      return 'white';
    }
  };

  updateSearch = (event) => {
    let search = profiles.filter((el) =>
      el.lastName.toLowerCase().startsWith(event.target.value)
    );
    this.setState({
      ironhackers: search,
      searchString: event.target.value,
    });
  };

  preventSubmit = (event) => {
    event.preventDefault();
  };

  backspaceSearch = (event) => {
    if (event.key === 'Backspace') {
      let search = this.state.ironhackers.filter((el) =>
        el.lastName.toLowerCase().startsWith(event.target.value)
      );
      this.setState({
        ironhackers: search,
        searchString: event.target.value,
      });
    }
  };

  render() {
    return (
      <div id="facebook">
        <div id="facebook-country-btns">
          {countryList.map((el) => (
            <button
              key={el}
              onClick={() => this.selectByCountry(el)}
              style={{ backgroundColor: this.setButtonColor(el) }}
            >
              {el}
            </button>
          ))}
        </div>
        <div id="search-form">
          <form onSubmit={this.preventSubmit}>
            <input
              type="text"
              placeholder="Find your Ironhacker!"
              value={this.state.searchString}
              onChange={this.updateSearch}
              onKeyDown={this.backspaceSearch}
            />
          </form>
        </div>
        {this.state.ironhackers.map((el) => (
          <div
            id="facebook-card"
            key={Math.random()}
            style={{ backgroundColor: this.setBackground(el) }}
          >
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
  }
}

export default FaceBook;
