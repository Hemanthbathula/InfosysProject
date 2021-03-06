import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBootom: 10, height: 500, overflowY: "auto" }
}
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}


function App({ exercises }) {
    return (
        <Grid container>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {exercises.map(([group, exercises]) => {
                        return (
                            <Fragment>
                                <Typography variant="h4"
                                    style={{ textTransform: 'capitalize' }}>
                                    {group}
                                </Typography>
                                <List component="nav" aria-label="secondary mailbox folders">
                                    {exercises.map(({ title }) => {
                                        return <ListItem button>
                                            <ListItemText primary={title} />
                                        </ListItem>
                                    })}

                                </List>
                            </Fragment>
                        )
                    })}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    <Typography variant="h3">
                        Welcome to Gym
                    </Typography>
                    <Typography variant="h5" style={{ marginTop: 20 }}>
                        Please select an exercise
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default App;