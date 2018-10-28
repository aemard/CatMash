import React, { Component } from "react";
import { Button } from "react-bootstrap";
import cx from "classnames";
import PropTypes from "prop-types";

class CustomButton extends Component {
  render() {
    const { fill, icon, simple, pullRight, round, block, ...rest } = this.props;

    const btnClasses = cx({
      "btn-fill": fill,
      "btn-simple": simple,
      "pull-right": pullRight,
      "btn-block": block,
      "btn-round": round,
      'btn-icon': icon,
    });

    return <Button className={btnClasses} {...rest} />;
  }
}

CustomButton.propTypes = {
  fill: PropTypes.bool,
  simple: PropTypes.bool,
  pullRight: PropTypes.bool,
  block: PropTypes.bool,
  round: PropTypes.bool,
  icon: PropTypes.bool
};

export default CustomButton;
