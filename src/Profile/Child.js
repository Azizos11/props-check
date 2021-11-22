import React from "react";
import PropTypes from "prop-types";

const Child = (props) => {
  // console.log(props)
  const a = "Data from child component";
  return (
    <>
      <img src={props.selfie} alt="selfie" />
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.skills}</h2>
      <h2>
        English: {props.lang.english}, French : {props.lang.french}, German :{" "}
        {props.lang.german}
      </h2>
      <button onClick={() => props.getName(`hello from ${props.name}`)}>
        Get the name
      </button>
    </>
  );
};

export default Child;

/** PropTypes */
Child.proptoTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudents: PropTypes.bool,
  skills: PropTypes.string,
  //lang:PropTypes.objectOf(PropTypes.string)
  lang: PropTypes.shape({
    english: PropTypes.string,
    french: PropTypes.string,
    german: PropTypes.string,
  }),
};
