import React from "react"
import { css } from "@emotion/core"
import Navbar from "./navbar"
import "../images/profile-image.svg"
import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 1100px;
      min-width: 400px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Navbar />
    {children}
  </div>
)
