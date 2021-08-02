import { Container, Icon, IconButton, Paper } from '@material-ui/core';
import { Jumbotron } from 'reactstrap';

const LandingPage = () => {
    return (
        <div>
            <Paper elevation={3}>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </Container>
                </Jumbotron>
            </Paper>

            <footer>
                <address>
                    <div>

                    </div>
                    <IconButton>
                        <Icon>save</Icon>
                    </IconButton>
                </address>
            </footer>
        </div>
    );
}

export default LandingPage;