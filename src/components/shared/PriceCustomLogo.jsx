// CustomIcon.js
import React from "react";

const PriceCustomLogo = ({
  fillColor = "#ff595e",
  width = "24px",
  height = "24px",
}) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{ enableBackground: "new 0 0 512 512" }}
    xmlSpace="preserve"
    fill={fillColor}
    width={width}
    height={height}
  >
    <g>
      <g>
        <path d="M224,159.992v-32H32c-17.632,0-32,14.368-32,32v64h230.752C226.304,204.44,224,183.384,224,159.992z" />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M510.688,287.992c-21.824,33.632-55.104,62.24-102.784,89.632c-7.328,4.192-15.584,6.368-23.904,6.368
          s-16.576-2.176-23.808-6.304c-47.68-27.456-80.96-56.096-102.816-89.696H0v160c0,17.664,14.368,32,32,32h448
          c17.664,0,32-14.336,32-32v-160H510.688z M144,383.992H80c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h64
          c8.832,0,16,7.168,16,16C160,376.824,152.832,383.992,144,383.992z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M502.304,81.304l-112-48c-4.064-1.728-8.576-1.728-12.64,0l-112,48C259.808,83.8,256,89.592,256,95.992v64
          c0,88.032,32.544,139.488,120.032,189.888c2.464,1.408,5.216,2.112,7.968,2.112s5.504-0.704,7.968-2.112
          C479.456,299.608,512,248.152,512,159.992v-64C512,89.592,508.192,83.8,502.304,81.304z M444.512,154.008l-64,80
          c-3.072,3.776-7.68,5.984-12.512,5.984c-0.224,0-0.48,0-0.672,0c-5.088-0.224-9.792-2.848-12.64-7.104l-32-48
          c-4.896-7.36-2.912-17.28,4.448-22.176c7.296-4.864,17.248-2.944,22.176,4.448l19.872,29.792l50.304-62.912
          c5.536-6.88,15.616-7.968,22.496-2.496C448.896,137.016,449.984,147.096,444.512,154.008z"
        />
      </g>
    </g>
  </svg>
);

export default PriceCustomLogo;
