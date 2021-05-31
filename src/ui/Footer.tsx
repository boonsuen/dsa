import { Box, Text } from "theme-ui"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Created by <a href="https://boonsuen.com">Boonsuen</a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Open sourced on{" "}
      <a href="https://github.com/boonsuen">
        GitHub
      </a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Follow <a href="https://twitter.com/_wnxn">@_wnxn</a>
    </Text>
  </Box>
)

export default Footer
