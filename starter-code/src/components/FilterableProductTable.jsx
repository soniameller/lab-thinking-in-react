import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      checked: true
    };

    this.searchValue = this.searchValue.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);
  }

  searchValue(search) {
    this.setState({ ...this.state, search: search });
  }

  toggleChecked() {
    this.setState({ ...this.state, checked: !this.state.checked });
  }

  render() {
    const data = this.props.products;

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          search={this.state.search}
          checked={this.state.checked}
          searchValue={search => this.searchValue(search)}
          toggleChecked={this.toggleChecked}
        ></SearchBar>
        <ProductTable
          data={data}
          checked={this.state.checked}
          search={this.state.search}
        ></ProductTable>
      </div>
    );
  }
}
