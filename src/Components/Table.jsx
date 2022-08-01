import { Component } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";


class Table extends Component {
  render() {
    const { students, removeStudent } = this.props;
    return (
      <div>
        <table>
          <TableHeader />
          <TableBody students={students} removeStudent={removeStudent} />
          
        </table>
      </div>
    );
  }
}

export default Table;
