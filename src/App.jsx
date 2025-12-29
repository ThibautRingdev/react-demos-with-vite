import StyledCard from "./components/styling/StyledCard";
import ProfileCard from "./components/styling/ProfileCard";
import IconComponent from "./components/styling/IconComponent";

function App() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <StyledCard />
            <ProfileCard />
            <IconComponent />
        </div>
    );
}

export default App;
