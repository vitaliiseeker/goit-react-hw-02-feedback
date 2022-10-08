import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendListItem = ({ friends }) => {
    return (
        friends.map(f => (
            <li className={css.item} key={f.id}>
                {f.isOnline ? (<span className={css.isOnline}></span>) : (<span className={css.notOnline}></span>)}
                <img className={css.avatar}
                    src={f.avatar}
                    alt={f.name}
                    width="48" />
                <p className={css.name}>{f.name}</p>
            </li>
        ))
    )
}

export const FriendList = ({ children }) => {
    return (
        <ul className={css.friendList} >
            {children}
        </ul>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.array.isRequired
}