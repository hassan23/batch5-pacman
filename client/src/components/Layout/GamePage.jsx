import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import ScoreCard from '../UI/ScoreCard';
import Modal from '../UI/Modal';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '96%',
  },
});

class GamePage extends Component {
  state = {
    openModal: false,
  }

  componentDidMount() {
    this.setState({ openModal: true });
  }

  render() {
    const {
      render, classes, startGame, score, status,
    } = this.props;
    const { openModal } = this.state;
    return (
      <React.Fragment>
        <Paper className={classes.root} elevation={1}>
          <Modal open={openModal} />
          <Grid container spacing={16}>
            <Grid item xs={3} />
            <Grid item xs={6}>
              <Button variant="outlined" size="medium" color="primary" onClick={startGame}>
                Start
              </Button>
              <div>
                Score:
                {score}
              </div>
              <div>
                Status:
                {status === 2 ? 'GAME OVER' : status}
              </div>
              {render()}
            </Grid>
            <Grid item xs={3} sm container>
              <ScoreCard />
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    );
  }
}

GamePage.propTypes = {
  score: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  render: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

GamePage.defaultTypes = {
  classes: null,
};


export default withStyles(styles)(GamePage);
