import { Text } from "theme-ui"

const DraftBadge = (props) => (
  <Text
    as="span"
    sx={{
      bg: "red",
      color: "white",
      fontWeight: 300,
      fontSize: 0,
      py: 0,
      px: 1,
      position: "absolute",
      top: "0px",
      left: "-60px",
      borderRadius: "2px",
    }}
  >
    draft
  </Text>
)

export default DraftBadge
