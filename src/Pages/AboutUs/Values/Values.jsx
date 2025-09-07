import { Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Values() {
  return (
    <Container component="section" id="values" sx={{ py: { xs: 6, md: 10 } }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        style={{ width: "100%" }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            color: "#255946",
            fontSize: { xs: "50px", md: "60px", lg: "70px" },
            fontWeight: 900,
            fontFamily: "El Messiri",
            mb: 5,
          }}>
          Our Values
        </Typography>
        <Grid container spacing={4}>
          {["Innovation", "Integrity", "Excellence"].map((val) => (
            <Grid size={{ xs: 12, md: 4 }} key={val}>
              <Paper sx={{ p: 3, textAlign: "center" }} elevation={1}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontSize: "30px",
                    fontWeight: "600",
                    fontFamily: "Marhey",
                  }}>
                  {val}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ lineHeight: 1.5, fontSize: "20px" }}>
                  Committed to maintaining the highest standards of in
                  everything we do.
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}

export default Values;
