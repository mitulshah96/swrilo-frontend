import { useState } from 'react';

const Header = (props) => {
    const [inputField, setinputField] = useState('');

    function handleChange(event) {
        setinputField(event.target.value);
    }

    function onsubmit() {
        props.handelChangeValue(inputField);
    }

    return (
        <div className=" parent bg-dark p-4">
            <nav className="navbar  navbar-light bg-light">
                <div className=" search input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search this movies"
                        value={inputField}
                        onChange={handleChange}
                    />

                    <div className="input-group-append">
                        <button
                            className="btn btn-secondary"
                            onClick={onsubmit}
                            type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <style>{`
    .parent {
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
      z-Index: 100000;
      background-color: #343a40;
    }
    `}</style>
            </nav>
        </div>
    );
};

export default Header;
