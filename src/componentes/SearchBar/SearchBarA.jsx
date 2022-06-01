import "./searchbar.css";
import SearchBar from "material-ui-search-bar";
import { useState } from "react";

export default function SearchBarA() {
  const [state, setState] = useState("");
  return (
    <div className="searchBar">
      <SearchBar
        dataSource={state.dataSource}
        onChange={(value) =>
          setState({
            dataSource: [value, value + value, value + value + value],
          })
        }
        onRequestSearch={() => console.log("onRequestSearch")}
        style={{
          margin: "0 auto",
          maxWidth: 800,
        }}
      />
    </div>
  );
}
