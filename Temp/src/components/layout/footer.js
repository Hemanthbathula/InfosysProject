import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core'

function App({ muscles }) {
    return (
        <Paper >
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="All" />
                {muscles.map((group) => {
                    return <Tab label={group} />
                })
                }
            </Tabs>
        </Paper>
    );
}

export default App;
