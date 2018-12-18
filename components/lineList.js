import React from 'react';

import styled from 'styled-components';

export const List = styled.ul`
  li {
    position: relative; /* so that pseudoelements are positioned relatively to their "li"s*/
    /* use padding-bottom instead of margin-bottom.*/
    margin-bottom: 0; /* This overrides previously specified margin-bottom */
    padding-bottom: 0.5em;
  }
  li:before {
    /* lines */
    content: '';
    position: absolute;
    left: -22.5px; /* adjust manually */
    border-left: 1px solid white;
    height: 100%;
    width: 1px;
  }

  li:first-child:before {
    /* first li's line */
    top: 40px;
  }

  li:last-child:before {
    /* last li's line */
    height: 20px;
  }
`;
export const ListItem = styled.li`
  text-align: left;
  padding-top: 20px;
`;
