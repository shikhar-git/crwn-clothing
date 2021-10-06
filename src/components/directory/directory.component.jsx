import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "./../../redux/directory/directory.selector";
import "./directory.scss";
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...othersSectionProps }) => (
      <MenuItem key={id} {...othersSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
