"use strict";

const name = {
    firstName: "John",
    callName: function () {
        return `His name is ${this.firstName}`;
    },
  };
  alert(name.callName()); 