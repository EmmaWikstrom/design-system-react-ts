import { Button } from "./components/Button/Button";
import { colors } from "./tokens/colors";
import { spacing } from "./tokens/spacing";

function App() {
  return (
    <div
      style={{
        background: colors.subtle,
        padding: spacing.xl,
        minHeight: "100vh",
      }}
    >
      <Button label="Add task" />
    </div>
  );
}

export default App;
