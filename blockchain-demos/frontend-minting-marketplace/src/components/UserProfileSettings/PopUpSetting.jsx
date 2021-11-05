import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Popup } from 'reactjs-popup';

// React Redux types
import * as authTypes from './../../ducks/auth/types';

const PopUpSettings = ({ currentUserAddress, adminAccess, setLoginDone, primaryColor }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [next, setNext] = useState(false);
    const [userName, setUserName] = useState(currentUserAddress);
    const [openModal, setOpenModal] = useState(false);

    const handleNext = () => {
        setNext(prev => !prev)
    }

    const onChangeName = (e) => {
        setUserName(e.target.value);
    }

    const logout = () => {
        dispatch({ type: authTypes.GET_TOKEN_COMPLETE, payload: null })
        localStorage.removeItem("token");
        setLoginDone(false);
        history.push("/all")
    }

    const pushToMyItems = () => {
        history.push('/my-nft');
    }

    const pushToFactory = () => {
        history.push('/creator/deploy');
    }

    return (
        <Popup
            trigger={open => {
                setOpenModal(open);
                if (!open) {
                    setNext(false)
                };
                return <button className="button profile-btn" style={{ border: `1px solid ${primaryColor === "charcoal" ? "#fff" : "#383637"}` }}>
                    <img style={{ position: "absolute", width: "auto", height: 30, left: -10, top: 0 }} src="https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_1.jpg" alt="avatart-user" />
                    <span style={{ padding: "0 10px 0 5px", color: primaryColor === 'charcoal' ? "#fff" : "#383637" }}>{currentUserAddress && `${currentUserAddress.substr(0, 6)}...${currentUserAddress.substr(2, 4)}   `}</span>
                    <i className="icon-menu" className="fas fa-bars"></i>
                </button>
            }}
            position="bottom center"
            closeOnDocumentClick
        >
            <div className="user-popup" style={{ background: "#383637", borderRadius: 16 }}>
                <div style={{ display: `${next ? "none" : "block"}` }}>
                    <ul className="list-popup">
                        <li onClick={handleNext}><i className="fas fa-cog"></i>Profile settings</li>
                        <li onClick={pushToMyItems}><i className="fas fa-boxes"></i>My items</li>
                        {adminAccess && <li onClick={pushToFactory}><i className="fas fa-hammer"></i>Factory</li>}
                        <li onClick={logout}><i className="fas fa-sign-out-alt"></i>Logout</li>
                    </ul>
                </div>
                <div className="profile-settings" style={{ display: `${next && openModal ? "block" : "none"}` }}>
                    <div className="profile-header">
                        <div className="btn-back" onClick={handleNext}><i className="fas fa-chevron-left"></i></div>
                        <div className="profile-title">Profile settings</div>
                        <div></div>
                    </div>
                    <div className="profile-info">
                        <div className="user-avatar">
                            <img style={{ width: "auto", height: 56, borderRadius: 16 }} src="https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_1.jpg" alt="avatart" />
                        </div>
                        <div className="profile-form">
                            <div>
                                <label>Name</label>
                                <div className="profile-input">
                                    <input value={userName} onChange={onChangeName} type="text" />
                                </div>

                                <label>Email</label>
                                <div className="profile-input">
                                    <input type="text" placeholder="Enter your email" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
    )
}

export default PopUpSettings