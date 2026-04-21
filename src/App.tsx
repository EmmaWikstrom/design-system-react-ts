import { colors } from "./tokens/colors";
import { spacing } from "./tokens/spacing";
import { radius } from "./tokens/radius";
import { typography } from "./tokens/typography";
import { borders } from "./tokens/borders";

function App() {
  return (
    <div
      style={{
        background: colors.subtle,
        padding: spacing.xl,
        fontFamily: typography.fontFamily.base,
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: colors.background,
          color: colors.text.primary,
          border: borders.default,
          borderRadius: radius.md,
          padding: spacing.lg,
          fontSize: typography.fontSize.md,
          fontWeight: typography.fontWeight.medium,
          lineHeight: typography.lineHeight.md,
          maxWidth: "400px",
        }}
      >
        My design system
      </div>
    </div>
  );
}

export default App;
