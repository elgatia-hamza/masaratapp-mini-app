import React, { Component } from "react";

class Header  extends Component {
  constructor() {
    super();
  }

  render() {
  return (
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MasaratApp</a>
            </div>
        </nav>
    </header>
  );
  }
}

export default Header;