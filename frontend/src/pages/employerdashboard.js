import React from 'react';
import { Container, Typography, TextField, Grid, Card, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    marginTop: theme.spacing(4),
  },
  searchBar: {
    marginBottom: theme.spacing(2),
  },
  jobCard: {
    marginBottom: theme.spacing(2),
  },
}));

const EmployerDashboard = () => {
  const classes = useStyles();

  // Dummy data for job listings
  const jobListings = [
    { id: 1, title: 'Software Engineer', location: 'San Francisco, CA', datePosted: '2024-02-26' },
    { id: 2, title: 'Data Analyst', location: 'New York, NY', datePosted: '2024-02-25' },
    // Add more job listings as needed
  ];

  return (
    <Container className={classes.dashboardContainer}>
      <Typography variant="h4" gutterBottom>
        Employer Dashboard
      </Typography>
      <TextField className={classes.searchBar} label="Search Jobs" variant="outlined" fullWidth />

      <Grid container spacing={2}>
        {jobListings.map(job => (
          <Grid item key={job.id} xs={12} sm={6} md={4}>
            <Card className={classes.jobCard}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {job.title}
                </Typography>
                <Typography color="textSecondary">
                  Location: {job.location}
                </Typography>
                <Typography color="textSecondary">
                  Date Posted: {job.datePosted}
                </Typography>
                <Button color="primary" variant="contained">Edit</Button>
                <Button color="secondary" variant="contained">Delete</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button color="primary" variant="contained">Add Job</Button>
    </Container>
  );
}

export default EmployerDashboard;
