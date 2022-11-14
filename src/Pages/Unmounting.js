import React from 'react';

const Unmounting = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        maxWidth: '50%',
        marginLeft: '25%',
        marginTop: '6%',
      }}
    >
      <strong>
        This is the final phase of the lifecycle of the component that is the
        phase of unmounting the component from the DOM. The following function
        is the sole member of this phase. <br />
        <br />
        componentWillUnmount() Function: This function is invoked before the
        component is finally unmounted from the DOM i.e. this function gets
        invoked once before the component is removed from the page and this
        denotes the end of the lifecycle. We have so far discussed every
        predefined function there was in the lifecycle of the component, and we
        have also specified the order of execution of the function. Let us now
        see one final example to finish the article while revising what’s
        discussed above.
      </strong>
    </div>
  );
};

export default Unmounting;
