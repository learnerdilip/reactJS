import React from "react";

function NewsItem(props) {
  console.log(props);
  const rowStyle = {
    height: "30px",
    width: "300px",
    border: "solid black 1px",
    color: "blue"
  };
  const imgStyle = {
    height: "50px",
    width: "50px"
  };
  return (
    <div>
      <table>
        <tr>
          <td>
            <img style={imgStyle} src={props.a.urlToImage} />
          </td>
          <td style={rowStyle}>{props.a.title} </td>
          <td style={rowStyle}>{props.a.description}</td>
        </tr>
      </table>
    </div>
  );
}

export default NewsItem;
