import './Menu.css'

const UpperLowerMenu = ({tabIndexProp}) => {
    const [tabIndex, setTabIndex] = tabIndexProp;

        return (
            <div className="menu">
                <div className="button-container">
                    <a>
                        <button className="menu-button" onClick={() => setTabIndex(4)}>Upper</button>
                    </a>
                    <a>
                        <button className="menu-button" onClick={() => setTabIndex(5)}>Lower</button>
                    </a>
                </div> 

            </div>

);

} 

export default UpperLowerMenu;