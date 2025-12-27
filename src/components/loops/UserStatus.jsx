function UserStatus({ loggedIn, isAdmin }) {
    return (
        <>
            {loggedIn && isAdmin && <p>Welcome Admin</p>}
            {loggedIn && !isAdmin && <p>Welcome User</p>}
            {!loggedIn && <p>Please log in</p>}
        </>
    );
}

export default UserStatus;
