function ProfileCard() {
    const styles = { backgroundColor: "gray", padding: "15px", borderRadius: "8px", color: "black" };
    return (
        <div style={styles}>
            <h2>Titre du Profil</h2>
            <p>Ceci est une courte description du profil.</p>
        </div>
    );
}

export default ProfileCard;