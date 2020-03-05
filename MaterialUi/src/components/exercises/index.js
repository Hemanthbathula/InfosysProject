import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
const styles = {
    Paper: { padding: 20, marginTop: 10, marginBootom: 10 }
}


function App({exercises}) {
    return (
        <Grid container>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {exercises.map(([group,exercises])=>{
                        return(
                        <Typography variant="headLine"
                        style={{textTransform:'capitalize'}}>
                            {group}
                        </Typography>
                    )})}
                    </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    Right Pane
                </Paper>
            </Grid>
        </Grid>
    );
}

export default App;