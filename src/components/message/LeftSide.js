/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import { getConversations, MESS_TYPES } from "../../redux/actions/messageAction";
import { getDataAPI } from "../../utils/fetchData";
import UserCard from "../UserCard";

function LeftSide() {
    const { auth, message, online } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
    const [searchUsers, setSearchUsers] = useState([]);
    const token = localStorage.getItem("token");

    // const history = useHistory()
    const router = useRouter();
    // const { id } = useParams()
    // const { id } = router.query

    const pageEnd = useRef();
    const [page, setPage] = useState(0);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!search) return setSearchUsers([]);

        try {
            const res = await getDataAPI(`users?search=${search}`, token);

            setSearchUsers(res.data.users);
        } catch (err) {
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: { error: err?.response?.data?.msg },
            });
        }
    };

    const handleAddUser = (user) => {
        setSearch("");
        setSearchUsers([]);
        dispatch({ type: MESS_TYPES.ADD_USER, payload: { ...user, text: "", media: [] } });
        dispatch({ type: MESS_TYPES.CHECK_ONLINE_OFFLINE, payload: online });
        return router.push(`/message/${user._id}`);
    };

    // const isActive = (user) => {
    //     if(id === user._id) return 'active';
    //     return ''
    // }

    // const {user} = useAuth()
    useEffect(() => {
        if (message.firstLoad) return;
        dispatch(getConversations({ auth }));
    }, [dispatch, auth, message.firstLoad]);

    // Load More
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPage((p) => p + 1);
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(pageEnd.current);
    }, [setPage]);

    useEffect(() => {
        if (message.resultUsers >= (page - 1) * 9 && page > 1) {
            dispatch(getConversations({ auth, page }));
        }
    }, [message.resultUsers, page, auth, dispatch]);

    // Check User Online - Offline
    // useEffect(() => {
    //     if(message.firstLoad) {
    //         dispatch({type: MESS_TYPES.CHECK_ONLINE_OFFLINE, payload: online})
    //     }
    // },[online, message.firstLoad, dispatch])

    return (
        <>
            <form className="message_header" onSubmit={handleSearch}>
                <input
                    type="text"
                    value={search}
                    placeholder="Enter to Search..."
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button type="submit" style={{ display: "none" }}>
                    Search
                </button>
            </form>

            <div className="message_chat_list">
                {searchUsers.length !== 0 ? (
                    <>
                        {searchUsers.map((user) => (
                            <div
                                key={user._id}
                                className={`message_user `}
                                onClick={() => handleAddUser(user)}
                            >
                                <UserCard user={user} />
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {message.users.map((user) => (
                            <div
                                key={user._id}
                                className={`message_user `}
                                onClick={() => handleAddUser(user)}
                            >
                                <UserCard user={user} msg>
                                    {/* {
                                            user.online
                                            ? <i className="fas fa-circle text-success" />
                                            : auth.user.following.find(item => 
                                                item._id === user._id
                                            ) && <i className="fas fa-circle" />
                                                
                                        } */}
                                </UserCard>
                            </div>
                        ))}
                    </>
                )}

                <button ref={pageEnd} style={{ opacity: 0 }}>
                    Load More
                </button>
            </div>
        </>
    );
}

export default LeftSide;
