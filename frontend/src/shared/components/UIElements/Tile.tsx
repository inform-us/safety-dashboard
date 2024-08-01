import React from 'react';
import { Link } from 'react-router-dom';
import './Tile.css';

type Props = {
  className: string;
  size: string;
  title: string | JSX.Element;
  subtitle: string | JSX.Element | null;
  bodyHeader: string | JSX.Element | null;
  bodyCenter: string | JSX.Element | null;
  bodyFooter: string | JSX.Element | null;
  style: React.CSSProperties;
  horizontalRuleColor: string;
  to: string; // Add a to prop for routing
};

const Tile = (props: Props) => {
  const { className, size, title, subtitle, bodyHeader, bodyCenter, bodyFooter, style, horizontalRuleColor, to } =
    props;

  return (
    <Link to={to} className={`tile tile--${className} tile--${size}`} style={style}>
      <div className="tile__title">{title}</div>
      <div className="tile__subtitle">{subtitle}</div>
      <div className={`tile__horizontal-rule ${horizontalRuleColor}`}></div>
      <div className="tile__body">
        <div className="tile__header">{bodyHeader}</div>
        <div className="tile__center">{bodyCenter}</div>
        <div className="tile__footer">{bodyFooter}</div>
      </div>
    </Link>
  );
};

export default Tile;
