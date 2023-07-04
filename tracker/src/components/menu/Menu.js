import "./Menu.css";

const Menu = ({ tabIndexProp }) => {
  const [tabIndex, setTabIndex] = tabIndexProp;

  return (
    <div className="menu">
      <div className="button-container">
        <a>
          <button className="menu-button" onClick={() => setTabIndex(0)}>
            pull
          </button>
        </a>
        <a>
          <button className="menu-button" onClick={() => setTabIndex(1)}>
            push
          </button>
        </a>
        <a>
          <button className="menu-button" onClick={() => setTabIndex(2)}>
            leg🦿
          </button>
        </a>
      </div>
    </div>
  );
};

export default Menu;
