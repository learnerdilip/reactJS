import React from "react";

function NewsItem(props) {
  console.log(props.details);
  return (
    <div>
      <table>
        <tr className="newsarticle">
          <td>
            <img className="newsImage" src={props.details.urlToImage} />
          </td>
          <td className="newsDetail">
            <p>{props.details.title}</p>
            <hr />
            <p> {props.details.content} </p>
            <a href={props.details.url}>
              <button>read more</button>
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default NewsItem;
