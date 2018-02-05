import * as React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  }
});

function BaseBoxImpl(props) {
  const { classes } = props;
  return (
    <Card>
      <CardContent>
        <Typography className={classes.title}>{props.title}</Typography>
        {props.children}
      </CardContent>
    </Card>
  );
}

export const BaseBox = withStyles(styles)(BaseBoxImpl);
