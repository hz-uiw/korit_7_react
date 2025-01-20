import React, { useEffect } from 'react';

function Route({pathname, path, element}) {

  return (
    <>
      {
        window.location.pathname === path && element
      }
    </>
  );
}

export default Route;