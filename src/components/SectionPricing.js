import React from "react";
import _ from "lodash";

import { htmlToReact, classNames, withPrefix, markdownify } from "../utils";

export default class SectionPricing extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <section
        id={_.get(section, "section_id", null)}
        className={
          "block pricing-block bg-" +
          _.get(section, "background", null) +
          " outer"
        }
      >
        <div className="block-header inner-small">
          {_.get(section, "title", null) && (
            <h2 className="block-title">{_.get(section, "title", null)}</h2>
          )}
          {_.get(section, "subtitle", null) && (
            <p className="block-subtitle">
              {htmlToReact(_.get(section, "subtitle", null))}
            </p>
          )}
        </div>

        <div className="inner">
          <div className="grid">
            <div className="row">
              <div className="cell plan">
                <div className="screen">
                  <img
                    src={withPrefix(_.get(section, "image", null))}
                    alt={_.get(section, "image_alt", null)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell plan">
                <div className="screen">
                  <img src="https://i.imgur.com/aFFEZ9U.jpg"></img>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="cell plan">
                <div className="screen">
                  <img src="https://i.imgur.com/aFFEZ9U.jpg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
