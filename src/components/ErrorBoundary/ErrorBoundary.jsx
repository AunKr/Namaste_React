import React from "react";
import { Grid, Box, Typography } from "@mui/material";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.children = this.props.children;
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error, errorInfo :", error, errorInfo);
    // You can also log the error to an error reporting service
    this.state.errorInfo = { ...errorInfo, error: `${error}` };
    return { hasError: true, error, errorInfo };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Grid
          container
          justifyContent="center"
          display="flex"
          alignItems="center"
          height="100vh"
        >
          <Grid
            item
            xs={12}
            textAlign="center"
            sx={{
              padding: "100px 20px",
              background: "#f5f5f5",
              border: "1px solid #eee",
              borderRadius: "5px",
              flexBasis: "inherit !important",
              width: "800px",
            }}
          >
            <Box className="error-bounderies">
              <Box className="innerBlock">
                <Box>
                  <Typography variant="h2" mb={1}>
                    Oops!
                  </Typography>
                  <Typography variant="h4">
                    Looks like something went wrong!
                  </Typography>
                </Box>
                <Typography mt={5}>
                  We track these errors automatically, but if the problem
                  persists feel free to contact us. In the meantime, please try
                  again.{" "}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      );
    }

    return this.children;
  }
}
