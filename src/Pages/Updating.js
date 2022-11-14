import React from "react";

export const Updating = () => {
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
        An update can be caused by changes to props or state. These methods are
        called in the following order when a component is being re-rendered:
        <br />
        static getDerivedStateFromProps()
        <br />
        shouldComponentUpdate()
        <br />
        render()
        <br />
        getSnapshotBeforeUpdate()
        <br />
        componentDidUpdate()
        <br />
        <br />
        componentWillUpdate() Function: As the name clearly suggests, this
        function is invoked before the component is rerendered i.e. this
        function gets invoked once before the render() function is executed
        after the updation of State or Props.
        <br />
        <br />
        componentDidUpdate() Function: Similarly this function is invoked after
        the component is rerendered i.e. this function gets invoked once after
        the render() function is executed after the updation of State or Props.
      </strong>
    </div>
  );
};
