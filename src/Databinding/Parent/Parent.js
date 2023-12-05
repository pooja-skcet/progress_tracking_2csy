import React from 'react';
import Child from '../Child/Child';
function Parent ()
{
    return (
      <>
      <h2>One way data binding</h2>
      <Child value='Parent to child data binding completed'/>
      </>
    );
}
export default Parent;