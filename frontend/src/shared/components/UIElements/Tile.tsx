import React from 'react';
import { Link } from 'react-router-dom';
import './Tile.css';

type Props = {
  className: string;
  size: string;
  title: string | JSX.Element;
  body_paragraph1: string | JSX.Element | null;
  body_paragraph2: string | JSX.Element | null;
  body_paragraph3: string | JSX.Element | null;
  style: React.CSSProperties;
  horizontalRuleColor: string;
  to: string; // Add a to prop for routing
};

const Tile = (props: Props) => {
  const { className, size, title, style, horizontalRuleColor, body_paragraph1, body_paragraph2, body_paragraph3, to } =
    props;

  return (
    <Link to={to} className={`tile tile--${className} tile--${size}`} style={style}>
      <div className="tile__title">{title}</div>
      <div className={`tile__horizontal-rule ${horizontalRuleColor}`}></div>
      <div className="tile__body">{body_paragraph1}</div>
      <div className="tile__body">{body_paragraph2}</div>
      <div className="tile__body">{body_paragraph3}</div>
    </Link>
  );
};

export default Tile;
