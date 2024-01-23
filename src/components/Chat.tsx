import React, { useState, useEffect } from "react";
import "../styles/chat.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Chat() {
  const [showButton, setShowButton] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="webchat">
      <div className="rw-widget-container">
        <button type="button" className="rw-launcher">
          <div className="rw-open-launcher__container">
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNzMyMzA0IDAgMCAwLjczMjMwNCA2OC41MzAzIDEyNC4yNTQpIj48cGF0aCBkPSJNNDQ4LDBINjRDMjguNzA0LDAsMCwyOC43MDQsMCw2NHYyODhjMCwzNS4yOTYsMjguNzA0LDY0LDY0LDY0aDMydjgwICBjMCw2LjIwOCwzLjU4NCwxMS44NzIsOS4yMTYsMTQuNDk2YzIuMTQ0LDAuOTkyLDQuNDgsMS41MDQsNi43ODQsMS41MDRjMy42OCwwLDcuMzI4LTEuMjgsMTAuMjQtMy43MTJMMjMyLjk5Miw0MTZINDQ4ICBjMzUuMjk2LDAsNjQtMjguNzA0LDY0LTY0VjY0QzUxMiwyOC43MDQsNDgzLjI5NiwwLDQ0OCwweiIgZGF0YS1vcmlnaW5hbD0iIzIxOTZGMyIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzIxOTZGMyIgZmlsbD0iI0Y2RjZGNiIvPjwvZz4gPC9zdmc+Cg=="
              className="rw-open-launcher"
              alt=""
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Chat;
