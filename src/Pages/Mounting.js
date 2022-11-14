import React from "react";

const Mounting = () => {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "50%",
        marginLeft: "25%",
        marginTop: "6%",
      }}
    >
      <strong>
        Mounting is the phase of the component lifecycle when the initialization
        of the component is completed and the component is mounted on the DOM
        and rendered for the first time on the webpage. Now React follows a
        default procedure in the Naming Conventions of these predefined
        functions where the functions containing “Will” represents before some
        specific phase and “Did” represents after the completion of that phase.
        The mounting phase consists of two such predefined functions as
        described below.
        <br />
        componentWillMount() Function: As the name clearly suggests, this
        function is invoked right before the component is mounted on the DOM
        i.e. this function gets invoked once before the render() function is
        executed for the first time.
        <br />
        componentDidMount() Function: Similarly as the previous one this
        function is invoked right after the component is mounted on the DOM i.e.
        this function gets invoked once after the render() function is executed
        for the first time
        <h4>
          Mounting is the initial phase in which the instance of the component
          is created and inserted into the DOM. When the component gets
          successfully inserted into the DOM, the component is said to be
          mounted. In the updating phase, the component gets updated while being
          present in the DOM. In the unmounting phase, the component is removed
          from the DOM.
        </h4>
      </strong>
    </div>
  );
};

export default Mounting;
