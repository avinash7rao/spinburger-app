import React from "react";

function BoxeverHoc(WrappedComponent) {
  return class extends React.Component {
    constructor() {
      super();
      this.boxever = null;
      this.boxeverq = null;
      this.createCdpEvent = this.createCdpEvent.bind(this);
      this.addFixedData = this.addFixedData.bind(this);
    }
    componentDidMount() {
      this.boxever = window.Boxever;
      this.boxeverq = window._boxeverq;
    }

    createCdpEvent(eventData) {
      eventData = this.addFixedData(eventData);
      this.boxeverq.push(function () {
        window.Boxever.eventCreate(eventData, function (data) {}, "json");
      });
    }

    addFixedData(viewEvent) {
      viewEvent.channel = "WEB";
      viewEvent.pos = "AgencyQ Spin Burger";
      viewEvent.browser_id = this.boxever.getID();
      return viewEvent;
    }

    render() {
      return (
        <React.Fragment>
          <WrappedComponent
            {...this.props}
            createCdpEvent={this.createCdpEvent}
          />
        </React.Fragment>
      );
    }
  };
}
export default BoxeverHoc;
