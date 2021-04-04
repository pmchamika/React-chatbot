import React from "react";
import PropTypes from "prop-types";
import { StyledWrapper, StyledLink } from "./styles";

const Link = ({ name, ...props }) => (
  <StyledWrapper {...props}>
    <StyledLink >
      {name}
    </StyledLink>
  </StyledWrapper>
);

Link.propTypes = {
  name: PropTypes.string.isRequired,
 
};

Link.defaultProps = {
  rel: "noopener",
  target: "_blank",
};

export default Link;
