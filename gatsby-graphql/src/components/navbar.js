import React from 'react'
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const Navbar = () => (
<div>
        <Link to={`/`}>
    <h3
      css={css`
        margin-bottom: ${rhythm(2)};
        display: inline-block;
        font-style: normal;
      `}
    >
      Lars Behrenberg
    </h3>
    </Link>
    <Link
    to={`/about/`}
    css={css`
      float: right;
    `}
  >
    About
  </Link>
    </div>
)
export default Navbar